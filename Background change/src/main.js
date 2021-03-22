const btn = document.querySelector('button'),
      rbgInput = document.querySelector('.rgb'),
      hexInput = document.querySelector('.hex'),
      tooltip = document.querySelector('.tooltip')

function randomColor(){
    const r = Math.floor(Math.random() * 256),
          g = Math.floor(Math.random() * 256),
          b = Math.floor(Math.random() * 256)
    return {r: r, g: g, b: b}
}

function componentToHex(c) {
    let hex = c.toString(16)
    if (hex.length == 1){
        return "0" + hex
    } else {
        return hex
    }
    
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
  }

btn.addEventListener('click', () =>{
    const caller = randomColor()
    const resRGB = `rgb(${caller.r}, ${caller.g}, ${caller.b})`
    const hex = rgbToHex(caller.r, caller.g, caller.b)
    rbgInput.value = resRGB
    hexInput.value = hex
    document.body.style.backgroundColor = resRGB
    tooltip.style.display = 'none'
})

const lst = [rbgInput, hexInput]

lst.forEach((item) =>{
    item.addEventListener('click', () =>{
        item.select()
        document.execCommand("copy");
        tooltip.style.display = 'block'
    })
})

