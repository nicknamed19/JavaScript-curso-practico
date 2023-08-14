const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')
const form = document.querySelector('#form')
const resultado2 = document.querySelector('#resultado2')

form.addEventListener('submit', btnClick)
input1.addEventListener('change', inptChng)
input2.addEventListener('change', inptChng)
input2.addEventListener('input', eventInput)


function eventInput(e) {
    console.log({e})
    resultado2.textContent = e.srcElement.value
}

function inptChng(){
    console.log(input1.value, input2.value)
}

function btnClick(e){ 
    console.log({e})
    e.preventDefault()
    const result = parseInt(input1.value) + parseInt(input2.value)
    resultado.innerHTML = `El resultado es ${result}`;
}
