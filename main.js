predictoratio1="";
predictoratio2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");


function tAxe_snapbumbs(){
    Webcam.snap(function(data_uri){
        document.getElementById("resuultion").innerHTML="<img id='con_image' src='"+data_uri+"'>;"       
    })
}

console.log("ml5version=" + ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PBqMECrad/model.json" , modelloaded);

function modelloaded(){
    console.log("modeloaded");
    
}

function speak(){
    var synth=window.speechSynthesis;
    var speakdata1="The first prediction is " + predictoratio1;
    var speakdata2="The second prediction is " + predictoratio2;
    utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis);
}

function cjhecxsfg(){
    img=document.getElementById("con_image");
    classifier.classify(img, getresult);
    
}

function getresult(error, result){
    if (error){
        console.log(error);
    
    }

    else{
        console.log(result);
        predictoratio1=result[0].label;
        predictoratio2=result[1].label
        document.getElementById("reculemtinamede").innerHTML=predictoratio1;
        document.getElementById("reculemtinameden").innerHTML=predictoratio2;
        speak();
        
        if (predictoratio1=="Sleepy"){
            document.getElementById("update_emoji1").innerHTML="&#128564";

        }
        if (predictoratio1=="Sad"){
            document.getElementById("update_emoji1").innerHTML="&#128532";

        }
        if (predictoratio1=="Happy"){
            document.getElementById("update_emoji1").innerHTML="&#128522";

        }
        if (predictoratio2=="Sleepy"){
            document.getElementById("update_emoji2").innerHTML="&#128564";

        }
        if (predictoratio2=="Sad"){
            document.getElementById("update_emoji2").innerHTML="&#128532";

        }
        if (predictoratio2=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522";

        }
        
    }
    
    
}