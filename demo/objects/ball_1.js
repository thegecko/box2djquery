/*
* Copyright (c) 2009
*/
var ball_1 = (function(){
    var image = new Image();
    image.src = 'images/ball1.png';
    var highlight = new Image();
    highlight.src = 'images/highlight.png';
	
    return Class.create(b2cCircle, 
    {
        initialize: function(world, x, y)
        {
	        this.parent(world, x, y, 10, null, highlight);
			var rint = Math.round(0xffffff * Math.random());
			this.userData.colour = ('#0' + rint.toString(16)).replace(/^#0([0-9a-f]{6})$/i, '#$1');
        },
		
		draw: function(context)
		{
			    context.save();
	    context.translate(this.m_position.x, this.m_position.y);
	    context.rotate(this.m_body.GetRotation());
	    context.translate(-this.m_position.x, -this.m_position.y);

				context.strokeStyle = '#000000';
				context.fillStyle = this.m_userData.colour;
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
				
				context.moveTo(pos.x - r, pos.y);
				context.lineTo(pos.x + r, pos.y);
				
				context.moveTo(pos.x, pos.y - r);
				context.lineTo(pos.x, pos.y + r);
				
				context.fill();
				context.stroke();
						context.restore();
			if (this.m_userData.highlight) context.drawImage(this.m_userData.highlight, this.m_position.x - this.m_radius, this.m_position.y - this.m_radius, this.m_radius*2, this.m_radius*2);
		}
    });
})();