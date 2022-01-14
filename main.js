Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
  });
camera = document.getElementById("camera");

function setup(){
    canvas= createCanvas(540,400);
    canvas.left();
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}