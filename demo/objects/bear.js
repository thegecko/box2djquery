/*
* Copyright (c) 2009
*/
var bear = (function(){
    var image = new Image();
    image.src = 'images/bear.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 31, 26, false, image);
        }
    });
})();