/*
* Copyright (c) 2009
*/

var b2cCircle = Class.create(b2CircleDef, 
{
	initialize: function(world, x, y, radius, image, highlight)
	{
		// The constructor for b2cCircle		
		this.parent();
		this.userData = {};
		this.userData.draw = this.draw;
		
		if (image) this.userData.image = image;
		if (highlight) this.userData.highlight = highlight;
		this.density = 10;
		this.radius = radius;
		this.restitution = 0.8;
		this.friction = 0.1;
		var body = new b2BodyDef();
		body.AddShape(this);
		body.position.Set(x, y);
		world.CreateBody(body);
	},
	
	draw: function(context)
	{
	    context.save();
	    context.translate(this.m_position.x, this.m_position.y);
	    context.rotate(this.m_body.GetRotation());
	    context.translate(-this.m_position.x, -this.m_position.y);

	    if (this.m_userData.image) context.drawImage(this.m_userData.image, this.m_position.x - this.m_radius, this.m_position.y - this.m_radius, this.m_radius*2, this.m_radius*2); 
		else
		{
    	    context.strokeStyle = '#000000';
            var pos = this.m_position;
            context.beginPath();
		    var r = this.m_radius;
		    var segments = 16.0;
		    var theta = 0.0;
		    var dtheta = 2.0 * Math.PI / segments;
		    // draw circle
		    context.moveTo(pos.x + r, pos.y);
		    for (var i = 0; i < segments; i++) {
			    var d = new b2Vec2(r * Math.cos(theta), r * Math.sin(theta));
			    var v = b2Math.AddVV(pos, d);
			    context.lineTo(v.x, v.y);
			    theta += dtheta;
		    }
		    context.lineTo(pos.x + r, pos.y);
		    context.stroke();
		}
		
		context.restore();
		if (this.m_userData.highlight) context.drawImage(this.m_userData.highlight, this.m_position.x - this.m_radius, this.m_position.y - this.m_radius, this.m_radius*2, this.m_radius*2);
	}
});

