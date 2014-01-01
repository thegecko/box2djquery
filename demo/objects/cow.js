/*
* Copyright (c) 2009
*/
var cow = (function(){
    var image = new Image();
    image.src = 'images/cow.png';
    
    return Class.create(b2cBox, 
    {
        initialize: function(world, x, y)
        {
		    this.parent(world, x, y, 34, 35, false, image);
        }
    });
})();