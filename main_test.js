let successfully_hooked=false;
window.expose=()=>{
    successfully_hooked=true;
}

document.querySelector(".ply").click();

setTimeout(()=>{
    if(!successfully_hooked)betterncm.tests.fail("Hijack lyrics timeout");
},5000)