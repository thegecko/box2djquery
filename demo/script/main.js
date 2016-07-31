// Global variables
var canvas;
var canvasLeft;
var canvasTop;
var canvasWidth;
var canvasHeight;

var ctx;
var world;

// Document ready function
$(function() {
    canvas = document.getElementById('canvas');
    canvasLeft = $(canvas).position().left;
    canvasTop = $(canvas).position().top;
    canvasWidth = $(canvas).width();
    canvasHeight = $(canvas).height();

    ctx = canvas.getContext('2d');
    world = createWorld();

    $(canvas).click(function(e) {
        if (e.preventDefault) e.preventDefault();
        var ball = null;

        if (Math.random() < 0.7) ball = ball_1;
        else ball = ball_2;

        if (ball) new ball(world, e.pageX - canvasLeft, e.pageY - canvasTop);
    });

    $(canvas).bind('contextmenu', function(e) {
        var random = Math.random();
        var animal = null;

        if (random < 0.1) animal = bear;
        else if (random < 0.2) animal = bunny;
        else if (random < 0.3) animal = cow;
        else if (random < 0.4) animal = dog;
        else if (random < 0.5) animal = giraffe;
        else if (random < 0.6) animal = horse;
        else if (random < 0.7) animal = kitten;
        else if (random < 0.8) animal = mouse;
        else if (random < 0.9) animal = penguin;
        else animal = pig;

        if (animal) new animal(world, e.pageX - canvasLeft, e.pageY - canvasTop);
        return false;
    });

    $('#clear').click(function(e) {
        world = createWorld();
    });

    step();
});

function createWorld() {
    var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-1000, -1000);
    worldAABB.maxVertex.Set(1000, 1000);
    var gravity = new b2Vec2(0, canvasHeight);
    var doSleep = true;
    var world = new b2World(worldAABB, gravity, doSleep);
    new b2cBox(world, canvasWidth/2, canvasHeight-10, canvasWidth*0.9, 10);
    new b2cBox(world, 5, canvasHeight/2, 10, canvasHeight*0.8);
    new b2cBox(world, canvasWidth-5, canvasHeight/2, 10, canvasHeight*0.8);
    return world;	
}

function step() {
    world.Step(1.0/60, 1);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawWorld(world, ctx);
    setTimeout('step()', 10);
}

function drawWorld(world, context) {
    for (var j = world.m_jointList; j; j = j.m_next) {
        drawJoint(j, context);
    }

    for (var b = world.m_bodyList; b; b = b.m_next) {
        for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
            s.m_userData.draw.call(s, context);
        }
    }
}

function drawJoint(joint, context) {
    var b1 = joint.m_body1;
    var b2 = joint.m_body2;
    var x1 = b1.m_position;
    var x2 = b2.m_position;
    var p1 = joint.GetAnchor1();
    var p2 = joint.GetAnchor2();
    context.strokeStyle = '#00EEEE';
    context.beginPath();
    switch (joint.m_type) {
        case b2Joint.e_distanceJoint:
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            break;

        case b2Joint.e_pulleyJoint:
            // TODO
            break;

        default:
            if (b1 == world.m_groundBody) {
                context.moveTo(p1.x, p1.y);
                context.lineTo(x2.x, x2.y);
            }
            else if (b2 == world.m_groundBody) {
                context.moveTo(p1.x, p1.y);
                context.lineTo(x1.x, x1.y);
            }
            else {
                context.moveTo(x1.x, x1.y);
                context.lineTo(p1.x, p1.y);
                context.lineTo(x2.x, x2.y);
                context.lineTo(p2.x, p2.y);
            }
            break;
    }
    context.stroke();
}
