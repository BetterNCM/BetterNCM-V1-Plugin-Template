let successfully_hooked=false;
window.expose=(a)=>{
    if(a)
    successfully_hooked=JSON.stringify(a.lrc);
}

betterncm.utils.waitForElement(".ply").then(e=>e.click());

// polyfill for <0.2.6
betterncm.tests={
    async fail(reason) {
        await betterncm.fs.writeFileText("/__TEST_FAILED__.txt", reason);
    }, async success(message) {
        await betterncm.fs.writeFileText("/__TEST_SUCCEEDED__.txt", message);
    }
}

setTimeout(()=>{
    if(!successfully_hooked)betterncm.tests.fail("Hijack lyrics timeout");
    else betterncm.tests.success(successfully_hooked)
},5000)