const timeout1 = setTimeout(()=> {
    document.getElementById("hong2_box").className = "hong2";
}, 2500)

    

const timeout3 = setTimeout(()=> {
    document.getElementById("camera_box").className = "btn";

    document.getElementById("txt1").className = "text"
}, 4500)

const btn = document.getElementById("camera_box");
btn.addEventListener("click", e=>{
    btn.className = "off_btn";
    document.getElementById("display").className = "display";
    document.getElementById("txt1").className = "off_text";
    document.getElementById("txt").className = "text";
    

    const timeout6 = setTimeout(()=> {
        document.getElementById("txt2").className = "anounce";
    }, 2000);

    const timeout4 = setTimeout(()=> {
        document.getElementById("count").className = "demo";
    }, 4000);

    const timeout5 = setTimeout(()=>{
        location.replace("taking_pic.html")
    }, 7000);
})

var myVideoStream = document.getElementById('myVideo')     // make it a global variable
  var myStoredInterval = 0

function getVideo(){
  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  navigator.getMedia({
    video: {
        deviceId:"5d6e3d43a7a644214cfb2635cc12542378ff7a99a78abb9757dd8d8bb6138acd"
    }, 
    audio: false
},
                     
    function(stream) {
      myVideoStream.srcObject = stream   
      myVideoStream.play();
  }, 
                     
   function(error) {
     alert('webcam not working');
  });
}

if (!navigator.mediaDevices?.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
  } else {
    // List cameras and microphones.
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
        });
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }