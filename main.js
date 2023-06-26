Webcam.set ({

width: 350, 

height: 300,

image_format: "png",

png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach ("#camera");

function CapturaDeCamara()

{
     Webcam.snap(function (

        data_uri)
        
        {

            document.getElementById("result").innerHTML = '<img id="ImagenCapturada" src = "' + data_uri + '"/>';


     }
    
     );
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier ("https://storage.googleapis.com/tm-model/I9J5Y9DqQ/model.json", modelLoaded)

function modelLoaded()

{

console.log("modelo cargado")

}

function check()

{

img = document.getElementById("ImagenCapturada");

classifier.classify (img, ObtenerResultados);

}

function ObtenerResultados(error, results)

{

if (error) 
{
console.error (error) 

     } else 

{
console.log(results);

document.getElementById("NombreDelObjeto").innerHTML = results [0].label;

document.getElementById("PorcentajeDePrecisión").innerHTML = results[0].confidence.toFixed(3);
}

}