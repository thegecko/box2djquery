/*
* Copyright (c) 2009
*/

var b2cBox = Class.create(b2BoxDef, 
{
	initialize: function(world, x, y, width, height, fixed, image)
	{
		// The constructor for b2cBox	
		this.parent();
		this.userData = {};
		this.userData.draw = this.draw;
		this.userData.width = width;
		this.userData.height = height;
		
		if (image) this.userData.image = image;
		if (typeof(fixed) == 'undefined') fixed = true;
		if (!fixed) this.density = 1.0;
		this.extents.Set(width/2.0, height/2.0);
		var body = new b2BodyDef();
		body.AddShape(this);
		body.position.Set(x, y);
		world.CreateBody(body);
	},
	
	draw: function(context)
	{
	    if (this.m_userData.image)
	    {
		    context.save();
		    context.translate(this.m_position.x, this.m_position.y);
		    context.rotate(this.m_body.GetRotation());
		    context.translate(-this.m_position.x, -this.m_position.y);
		    context.drawImage(this.m_userData.image, this.m_position.x - this.m_userData.width/2.0, this.m_position.y - this.m_userData.height/2.0, this.m_userData.width, this.m_userData.height); 
		    context.restore();
		}
		else
		{
	        context.strokeStyle = '#000000';
		    var tV = b2Math.AddVV(this.m_position, b2Math.b2MulMV(this.m_R, this.m_vertices[0]));		
		    context.beginPath();
		    context.moveTo(tV.x, tV.y);
		    for (var i = 0; i < this.m_vertexCount; i++) {
			    var v = b2Math.AddVV(this.m_position, b2Math.b2MulMV(this.m_R, this.m_vertices[i]));
			    context.lineTo(v.x, v.y);
		    }
		    context.lineTo(tV.x, tV.y);
            context.stroke();
		}
	}
});

