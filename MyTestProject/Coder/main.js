// coding
function coder(input) {
  let arrayIN = input.split('')
  let arrayOU = []

  arrayIN.forEach(item => {arrayOU.push(item.charCodeAt(0))})
  let str = ''
  arrayOU.forEach(item => {str += item + ','})
  str = str.slice(0,-1)
  return(str)
}

let buttonCoder = document.getElementById('buttonCoder')

buttonCoder.addEventListener('click', ()=>{
  let input = document.getElementById('inputCoder').value
  document.getElementById('outputCoder').textContent = coder(input)
})

// decoding
function decoder(input) {
  let arrayIN = input.split(',')
  let arrayOU = []

  arrayIN.forEach(item => {arrayOU.push(String.fromCharCode(Number(item)))})
  let str = arrayOU.join('')
  return(str)
}

let buttonDeCoder = document.getElementById('buttonDeCoder')

buttonDeCoder.addEventListener('click', ()=>{
  let input = document.getElementById('inputDeCoder').value
  document.getElementById('outputDeCoder').textContent = decoder(input)
})

// Task for next work:
// Add Kat for coder