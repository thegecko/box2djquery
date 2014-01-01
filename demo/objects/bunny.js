/*
* Copyright (c) 2009
*/
var bunny = (function(){
    var image = new Image();
    image.src = 'images/bunny.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 27, 45, false, image);
        }
    });
})();