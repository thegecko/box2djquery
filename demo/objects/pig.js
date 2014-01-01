/*
* Copyright (c) 2009
*/
var pig = (function(){
    var image = new Image();
    image.src = 'images/pig.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 26, 31, false, image);
        }
    });
})();