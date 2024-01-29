Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality:90
})
Webcam.attach(document.getElementById("camera"))
function take_snapshot()
{
    Webcam.snap(function(img_src) {
        document.getElementById("result").innerHTML = "<img src= '" + img_src + "' id= 'image_preview'> ";
    })

}
console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XvZAW6Z0b/model.json", modelLoaded)
function modelLoaded()
{
    console.log("MODEL IS LOADED SUCCESSFULLY");
}
function check()
{
    img1 = document.getElementById("image_preview");
    classifier.classify(img1, got_results);
}
function got_results(error,results)
{
if(error) {
    console.log(error);

}else{
    console.log(results)
    objectName = results[0].label;
    confidence = results[0].confidence;
    document.getElementById("result_person_name").innerHTML = objectName;
    document.getElementById("result_person_accuracy").innerHTML = confidence.toFixed(2);
}
}