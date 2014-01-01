/*
* Copyright (c) 2009
*/
var penguin = (function(){
    var image = new Image();
    image.src = 'images/penguin.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 26, 26, false, image);
        }
    });
})();