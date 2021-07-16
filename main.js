var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function block_update()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        block_image_object= Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}	

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object= Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}

function playSound(){
x.play();	
}
