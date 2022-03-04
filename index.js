function incraseDrecase(inputName,iscase,total,price){
  let input = document.getElementById(inputName,);
  let inputNumber = input.value;

if(iscase==true ){
 
  inputNumber =parseInt(inputNumber)+1
}
else if(inputNumber>0){
 
  inputNumber =parseInt(inputNumber)-1 
}
input.value =inputNumber;
  
  let balance = document.getElementById(total)
  balance.innerText=inputNumber*price;
  calculator()
}


function calculator(){
  let phoneInput = document.getElementById("input");
  let phoneNumber =phoneInput.value;
  let phoneTotal = phoneNumber*1219;

  let caseInput = document.getElementById("case-input");
  let caseNumber = caseInput.value;
  let caseTotal = caseNumber*59;

  let subTotal = parseInt(phoneTotal)+parseInt(caseTotal);

  let tax = parseInt(subTotal/10);

  let sumTotal = tax+subTotal

  document.getElementById("subtotal").innerText=subTotal;

  document.getElementById("tax").innerText=tax;

  document.getElementById("total").innerText=sumTotal;
}


document.getElementById("incrase-btn").addEventListener("click",function(){

  incraseDrecase('input',true,'iphone-total',1219)


})

document.getElementById("drecase").addEventListener("click",function(){
  incraseDrecase('input',false,'iphone-total',1219)
 
})

document.getElementById("case-incrase").addEventListener("click",function(){

  incraseDrecase("case-input",true,'case-total',59)
})

document.getElementById("case-drecase").addEventListener("click",function(){
  incraseDrecase("case-input",false,'case-total',59)
})