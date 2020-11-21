Webcam.set({
  width:300,
  height:300,
  img_format:'png',
  png_quality:90
});

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(snap){
        document.getElementById("snapshot").innerHTML=`<img src=${snap} id="output">`;
    })
}

console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2t_MVJh7Q/model.json",modelloaded)


function modelloaded(){
    console.log("model has been loaded")
    
}

function identify(){
     image = document.getElementById("output");
     classifier.classify(image,output);
}

function output(error,results){
     if(error){
         console.log(error)
     }
     else{
         console.log(results);
         object_name = results[0].label;
         confidence = results[0].confidence.toFixed(3)*100;
         document.getElementById("object_result").innerHTML=object_name;
         document.getElementById("accuracy_result").innerHTML=confidence+"%";
    }
}