const singleQueryBtn=document.getElementById("single-query-btn")
const battleModeBtn=document.getElementById("battle-mode-btn")

const singleSection=document.getElementById("singleQuery-section")
const battleSection=document.getElementById("battle-section")

singleSection.style.display="block";
battleSection.style.display="none";
singleQueryBtn.style.backgroundColor="#18B797"
singleQueryBtn.style.color="black"

singleQueryBtn.addEventListener("click",()=>{
    singleQueryBtn.style.backgroundColor="#18B797"
    singleQueryBtn.style.color="black"
    singleSection.style.display="block";
    battleSection.style.display="none";
    battleModeBtn.style.backgroundColor="transparent"
    battleModeBtn.style.color="white"

})

battleModeBtn.addEventListener("click",()=>{
    battleModeBtn.style.backgroundColor="#18B797";
    battleModeBtn.style.color="black";
    battleSection.style.display="block";
    singleSection.style.display="none";
    singleQueryBtn.style.backgroundColor="transparent"
    singleQueryBtn.style.color="white"
})


