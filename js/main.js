/**
 * Created by michpenn on 1/17/17.
 */
$(document).ready(function(){
    //slideInPyramidParts('#pyramidBottom', '#pyramidMiddle', '#pyramidTop');
});

function slideInPyramidParts(){
    var elements = arguments;

    for(var i in elements) {

        setTimeout(function(x){
            return function(){
                var el = elements[x];
                slideInPyramidPart(el);
            };
        }(i),1000*i);
    }
}

function slideInPyramidPart(element){
    var $el = $(element);
    return $el.fadeIn(1000,'easeInSine');
}