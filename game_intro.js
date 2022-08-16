const no = document.getElementById("no");

no.addEventListener("click", e=>{
    document.getElementById("wrn").className =
    "warning";
});

const wno = document.getElementById("wno");

wno.addEventListener("click", e=>{
    document.getElementById("wrn").className = "offing_warning";

    const timeout = setTimeout(()=>{
        document.getElementById("wrn").className = "off_warning";
    },1500);
});