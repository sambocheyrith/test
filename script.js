const a = document.getElementById("num1");
const b = document.getElementById("num2");
const result = document.getElementById("result");
const sum = document.getElementById("sum");

// function plus(){
//     c = parseFloat(a.value) + parseFloat(b.value);
//     result.innerText= c ;
// }


sum.addEventListener('keydown', () => {
    c = parseFloat(a.value) + parseFloat(b.value);
    result.innerText= c ;
})

function minus(e){
    c = (parseFloat(a.value) - parseFloat(b.value)) * e;
    result.innerText= c ;

}
function multip(){
    c = parseFloat(a.value) * parseFloat(b.value);
    result.innerText= c ;
}


function division(){
    c = parseFloat(a.value) / parseFloat(b.value);
    result.innerText= c ;

}
