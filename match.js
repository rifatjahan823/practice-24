function genaratePin(){
    const pin = Math.round(Math.random()*10000);
    const pinLength = pin+""
    if(pinLength.length==4){
        return pin
    }
    else{
        return genaratePin();
    }
   
}
document.getElementById("grt-btn").addEventListener("click",function(){
    const input = document.getElementById("input").value=genaratePin();

})

document.getElementById("calculator").addEventListener("click",function(event){
    const number = event.target.innerText;
    const calc =document.getElementById("calc-input");
   if(isNaN(number)){
    if(number =='C'){
        calc.value=" ";
    }
   }
   else{
    const previousCalc =calc.value;
    const newCalc = previousCalc+number;
    calc.value=newCalc;
   }
})

document.getElementById("submit").addEventListener("click",function(){
    const inputMatch = document.getElementById("input").value;
    const calacMatch = document.getElementById("calc-input").value;
    if(inputMatch==calacMatch){
        const sucess = document.getElementById('sucess');
        sucess.style.display="block"

        const fail= document.getElementById('fail');
        fail.style.display="none" 
    }
    else{
        const fail= document.getElementById('fail');
        fail.style.display="block" 
        const sucess = document.getElementById('sucess');
        sucess.style.display="none"
    }
})