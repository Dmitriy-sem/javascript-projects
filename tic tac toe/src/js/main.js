const btns = document.querySelectorAll('.game_btn')

btns.forEach((item) =>{
    item.addEventListener('click', () => {
        clickBtn(item)
    })
})

let xORo = 'x',
    mt = '&nbsp;'

function clickBtn(btn) {
    if (btn.innerHTML == mt && xORo == 'x'){
        btn.innerHTML = 'X'
        xORo = 'o'
    } else if (btn.innerHTML == mt && xORo == 'o'){
        btn.innerHTML = 'O'
        xORo = 'x'
    }
    
    turn.innerHTML = `Go on ${xORo.toUpperCase()}`
    checkWin()
}


function checkWin() {
    const b0 = btns[0].innerHTML,
          b1 = btns[1].innerHTML,
          b2 = btns[2].innerHTML,
          b3 = btns[3].innerHTML,
          b4 = btns[4].innerHTML,
          b5 = btns[5].innerHTML,
          b6 = btns[6].innerHTML,
          b7 = btns[7].innerHTML,
          b8 = btns[8].innerHTML

    if (b0 == b1 && b1 == b2 && b0 != mt ){
        strikeOver('horizontal', 1)
        changeScore(b0)
        turn.innerHTML = ''

    } else if (b3 == b4 && b4 == b5 && b3 != mt){
        strikeOver('horizontal', 2)
        changeScore(b3)
        turn.innerHTML = ''

    } else if (b6 == b7 && b7 == b8 && b6 != mt){
        strikeOver('horizontal', 3)
        changeScore(b6)
        turn.innerHTML = ''

    } else if (b0 == b3 && b3 == b6 && b0 != mt){
        strikeOver('vertical', 1)
        changeScore(b0)
        turn.innerHTML = ''

    } else if (b1 == b4 && b4 == b7 && b1 != mt){
        strikeOver('vertical', 2)
        changeScore(b1)
        turn.innerHTML = ''

    } else if (b2 == b5 && b5 == b8 && b2 != mt){
        strikeOver('vertical', 3)
        changeScore(b2)
        turn.innerHTML = ''

    } else if (b0 == b4 && b4 == b8 && b0 != mt){
        strikeOver('diagonal', 1)
        changeScore(b0)
        turn.innerHTML = ''

    } else if (b2 == b4 && b4 == b6 && b2 != mt){
        strikeOver('diagonal', 2)
        changeScore(b2)
        turn.innerHTML = ''

    } else {
        let k = 0
        for (i of btns){
            if (i.innerHTML != mt){
                k++
            }
        }
        if (k == 9){
            draw()
            changeScore('both')
        }
        
    }
}


function changeScore(who) {
    scores = document.querySelectorAll('.score')
    getAngry(who)
    getHappy(who)
    if (who == 'X'){
        let score1 = scores[0].innerHTML
        scores[0].innerHTML = +score1 + 1
        document.querySelector('#point').play()
    } else if (who == 'O'){
        let score2 = scores[1].innerHTML
        scores[1].innerHTML = +score2 + 1
        document.querySelector('#point').play()
    } else if (who == 'both'){
        scores.forEach(item => item.innerHTML = +item.innerHTML + 1)
    }
    changeStateButton('d')
}

function strikeOver(pos, numberRowCol) {
    const line = document.createElement('div'),
          row = document.querySelectorAll('.row')
    line.classList.add('line')
    line.style.position = 'absolute'
    line.style.backgroundColor = '#505050'
    line.style.borderRadius = '2px'
    line.style.zIndex = '2'

    if (pos == 'horizontal'){
        line.style.width = '450px'
        line.style.height = '5px'
        line.style.top = '48%'
        line.style.marginLeft = '5px'
        row[numberRowCol-1].append(line)
    } else if (pos == 'vertical'){
        line.style.width = '4px'
        line.style.height = '420px'
        line.style.top = '15px'
        if (numberRowCol ==  1){
            line.style.left = '16%'
        } else if (numberRowCol ==  2){
            line.style.left = '49.5%'
        } else if (numberRowCol ==  3){
            line.style.left = '83.25%'
        }
        row[0].append(line)
    } else if (pos == 'diagonal'){
        line.style.width = '5px'
        line.style.height = '600px'
        line.style.top = '-80px'
        line.style.left = '222px'
        if (numberRowCol ==  1){
            line.style.transform = 'rotate(-46deg)' 
        } else if (numberRowCol ==  2){
            line.style.top = '-70px'
            line.style.transform = 'rotate(45deg)'
        }
        row[0].append(line)
    }
    
    
}

function changeStateButton(param) {
    if (param == 'd'){
        btns.forEach(item => item.disabled = true)
    } else if (param == 'a'){
        btns.forEach(item => item.disabled = false)
    }
}

changeStateButton('d')

function clearField() {
    for (btn of btns){
        btn.innerHTML = mt
    }
}

const startButton = document.querySelector('.start button'),
      turn = document.querySelector('.turn')
turn.style.visibility = 'hidden'

/*Start Game*/
startButton.addEventListener('click', () => {

    
    /*Clear Line*/
    const elementLine = document.querySelector('.line')
    if (elementLine){
         elementLine.remove()
    }

    clearField()
    
    changeStateButton('a')
    startButton.innerHTML = 'Restart'
    turn.style.visibility = 'visible'
    turn.innerHTML = `Go on ${xORo.toUpperCase()}`
})

/*Greet from X and O*/

let Xhello = {
    wrapper: document.querySelectorAll('.anim')[0], 
    animType: 'svg',
    loop: false,
    prerender: false,
    autoplay: true,
    path: './src/animation/Xhello.json' 

}

let Ohello = {
    wrapper: document.querySelectorAll('.anim')[1], 
    animType: 'svg',
    loop: false,
    prerender: false,
    autoplay: true,
    path: './src/animation/Ohello.json' 

}

function greet() {
    bodymovin.loadAnimation(Xhello)
    bodymovin.loadAnimation(Ohello)
}

greet()


let Xangry = {
    wrapper: null, 
    animType: 'svg',
    loop: false,
    prerender: false,
    autoplay: true,
    path: './src/animation/Xangry.json' 

}

let Oangry = {
    wrapper: null, 
    animType: 'svg',
    loop: false,
    prerender: false,
    autoplay: true,
    path: './src/animation/Oangry.json' 

}

function clearAnimation(n){
    const delElem = document.querySelectorAll('.anim')[n],
          parent = document.querySelectorAll('.wrapper_anim')[n]
    parent.removeChild(delElem)

    const newDiv = document.createElement('div')
    newDiv.classList.add('anim')
    parent.append(newDiv)
}

function getAngry(param){
    if (param == 'X'){
        clearAnimation(1)
        Oangry.wrapper = document.querySelectorAll('.anim')[1]
        bodymovin.loadAnimation(Oangry)
    } else if (param == 'O'){
        clearAnimation(0)
        Xangry.wrapper = document.querySelectorAll('.anim')[0]
        bodymovin.loadAnimation(Xangry)
    }
}

let Xhappy = {
    wrapper: null, 
    animType: 'svg',
    loop: false,
    prerender: false,
    autoplay: true,
    path: './src/animation/Xhappy.json' 

}

let Ohappy = {
    wrapper: null, 
    animType: 'svg',
    loop: false,
    prerender: false,
    autoplay: true,
    path: './src/animation/Ohappy.json' 

}

function getHappy(param){
    if (param ==  'X'){
        clearAnimation(0)
        Xhappy.wrapper = document.querySelectorAll('.anim')[0]
        bodymovin.loadAnimation(Xhappy)
    } else if (param == 'O'){
        clearAnimation(1)
        Ohappy.wrapper = document.querySelectorAll('.anim')[1]
        bodymovin.loadAnimation(Ohappy)
    }
}

let drawAnim = {
    wrapper: null, 
    animType: 'svg',
    loop: false,
    prerender: false,
    autoplay: true,
    path: './src/animation/friendshipwon.json' 

}

function draw() {
    const delElem = document.querySelector('.draw'),
          parent = document.querySelector('.container')
    parent.removeChild(delElem)

    const newDiv = document.createElement('div')
    newDiv.classList.add('draw')
    parent.insertBefore(newDiv,document.querySelector('.title'))
    drawAnim.wrapper = document.querySelector('.draw')
    bodymovin.loadAnimation(drawAnim)
}

