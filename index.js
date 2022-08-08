const timeout = setTimeout(()=>{
    document.getElementById("text1").className = "off_text1";
    document.getElementById("text2").className = "off_text2";
    document.getElementById("text3").className = "off_text3";
},12000)

const timeout1 = setTimeout(()=> {
    document.getElementById("text4").className = "off_text4";
}, 14000)

const timeout2 = setTimeout(()=> {
    document.getElementById("box1").className = "no_box";
    document.getElementById("box2").className = "yes_box";
}, 16000)


timeout;

const fromLeftButton = document.getElementById("box1");
const fromTopButton = document.getElementById("box2");



fromLeftButton.addEventListener("click", e=>{

});
fromTopButton.addEventListener("click", e=>{

});
