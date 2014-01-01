/*
* Copyright (c) 2009
*/
var kitten = (function(){
    var image = new Image();
    image.src = 'images/kitten.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 31, 29, false, image);
        }
    });
})();