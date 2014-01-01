/*
* Copyright (c) 2009
*/
var dog = (function(){
    var image = new Image();
    image.src = 'images/dog.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 33, 30, false, image);
        }
    });
})();