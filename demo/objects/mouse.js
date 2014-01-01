/*
* Copyright (c) 2009
*/
var mouse = (function(){
    var image = new Image();
    image.src = 'images/mouse.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 35, 30, false, image);
        }
    });
})();