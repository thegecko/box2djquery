/*
* Copyright (c) 2009
*/
var giraffe = (function(){
    var image = new Image();
    image.src = 'images/giraffe.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 34, 37, false, image);
        }
    });
})();