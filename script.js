let cel = document.querySelector('#cel > input');
let far = document.querySelector('#far > input');
let kal = document.querySelector('#kal > input');
let btn = document.querySelector('#btn');

function roundnum(num){
    return Math.round(num*100)/100
}

cel.addEventListener('input',function(){
    let cTemp = parseFloat(cel.value)
    let fTemp = (cTemp*(9/5)) +32
    let kTemp = cTemp+273.15

    far.value=roundnum(fTemp)
    kal.value=roundnum(kTemp)
})
far.addEventListener('input',function(){
    let fTemp = parseFloat(far.value)
    let cTemp = (fTemp-32)*5/9
    let kTemp = cTemp+273.15

    cel.value=roundnum(cTemp)
    kal.value=roundnum(kTemp)
})
kal.addEventListener('input',function(){
    let kTemp = parseFloat(kal.value)
    let cTemp = kTemp-273.15
    let fTemp = (cTemp*(9/5)) +32

    cel.value=roundnum(cTemp)
    far.value=roundnum(fTemp)
})

btn.addEventListener('click', ()=>{
    cel.value=""
    far.value=""
    kal.value=""
})

