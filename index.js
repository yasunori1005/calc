const btn = document.getElementById("button");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const symbol = document.getElementById("symbol");

btn.addEventListener('click' , function(){
    const p=document.createElement("p");
    if(result.childNodes.length>0){
        result.innerHTML = '';
    }
    if(symbol.value==="plus"){
        p.innerText = Number(num1.value) + Number(num2.value);
        p.classList.add("text-secondary");
        result.appendChild(p);
    }else if(symbol.value==="minus"){
        p.innerText = Number(num1.value) - Number(num2.value);
        p.classList.add("text-info");
        result.appendChild(p);
    }else if(symbol.value==="times"){
        p.innerText = Number(num1.value) * Number(num2.value);
        p.classList.add("text-warning");
        result.appendChild(p);
    }else{
        p.innerText = Number(num1.value) / Number(num2.value);
        p.classList.add("text-danger");
        result.appendChild(p);
    }
})