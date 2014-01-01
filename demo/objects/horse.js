/*
* Copyright (c) 2009
*/
var horse = (function(){
    var image = new Image();
    image.src = 'images/horse.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 38, 33, false, image);
        }
    });
})();