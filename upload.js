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