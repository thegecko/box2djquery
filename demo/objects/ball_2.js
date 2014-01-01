/*
* Copyright (c) 2009
*/
var ball_2 = (function(){
    var image = new Image();
    image.src = 'images/ball2.png';
    var highlight = new Image();
    highlight.src = 'images/highlight.png';
    
    return Class.create(b2cCircle, 
    {
        initialize: function(world, x, y)
        {
	        this.parent(world, x, y, 15, image, highlight);
        }
    });
})();