
var nextBtn=document.getElementById('nextBtn');
nextBtn.onclick=function(){
    var ipt=document.getElementById('ipt').value;
    console.log(ipt)
    if(ipt){
        window.localStorage.setItem('val',ipt)
        // location.href="./encourage0.html"
        if (confirm("To continue your experience, you can choose OK to open your camera or Cancel to experience without camera.")) {
            location.href="./selfieView-camera-word.html"
         } else {
           location.href="./selfieView-black-word.html"
         }
    }else{
        alert('Please enter a word')
      //   if (confirm("To continue your experience, you can choose OK to open your camera or Cancel to experience without camera.")) {
      //     location.href="./selfieView-camera-skip.html"
      //  } else {
      //    location.href="./selfieView-black-skip.html"
      //  }
    }
}

// var skipBtn=document.getElementById('skipBtn');
// skipBtn.onclick = function(){
//     if (confirm("To continue your experience, you can choose OK to open your camera or Cancel to experience without camera.")) {
//         location.href="./selfieView-camera-skip.html"
//      } else {
//        location.href="./selfieView-black-skip.html"
//      }
// }


// function confirmCamera() {
//     var txt;
//     if (confirm("Do you want to open your camera?")) {
//        location.href="./selfieView-camera-word.html"
//     } else {
//       location.href="./selfieView-black-word.html"
//     }
//   }


// function onReady(callback) {
//   var intervalId = window.setInterval(function() {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 1000);
// }

// function setVisible(selector, visible) {
//   document.querySelector(selector).style.display = visible ? 'block' : 'none';
// }

// onReady(function() {
//   setVisible('.page', true);
//   setVisible('#loading', false);
// });