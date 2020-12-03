let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8')
document.head.appendChild (metaUtf8)

let lang = document.querySelector('html')
lang.setAttribute('lang', 'en')

let title = document.createElement('title');
title.innerHTML = 'HW_JS_9'
document.head.appendChild (title)

let link = document.createElement('link')
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat&family=Open+Sans&display=swap')
link.setAttribute('rel', 'stylesheet')
document.head.appendChild (link)

let h1 = document.createElement('h1')
h1.innerHTML = 'Choose Your Option'
document.body.appendChild(h1)

let h4 = document.createElement('h4')
h4.innerHTML = 'But I must explain you how all this mistaken idea of denouncing'
document.body.appendChild(h4)

let container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

let div1 = document.createElement('div')
div1.classList.add('item')
container.appendChild(div1)

let div1_1 = document.createElement('div')
div1_1.classList.add('subtitle')
div1.appendChild(div1_1)
let p1_1 = document.createElement('p')
p1_1.classList.add('mon')
p1_1.innerHTML = 'Freelancer'
div1_1.appendChild(p1_1)

let div1_2 = document.createElement('div')
div1_2.classList.add('title')
div1.appendChild(div1_2)
let h2_1 = document.createElement('h2')
h2_1.innerHTML = 'Initially designed to'
div1_2.appendChild(h2_1)

let div1_3 = document.createElement('div')
div1_3.classList.add('content')
div1.appendChild(div1_3)
let p1_3 = document.createElement('p')
p1_3.innerHTML = 'But I must explain you how all this mistaken idea of denouncing'
div1_3.appendChild(p1_3)

let div1_4 = document.createElement('div')
div1_4.classList.add('button')
div1.appendChild(div1_4)
let a1_4 = document.createElement('a')
a1_4.setAttribute('href', '#')
a1_4.classList.add('mon')
a1_4.innerHTML = 'Start here'
div1_4.appendChild(a1_4)

let div2 = document.createElement('div')
div2.classList.add('item')
container.appendChild(div2)

let div2_1 = document.createElement('div')
div2_1.classList.add('subtitle')
div2.appendChild(div2_1)
let p2_1 = document.createElement('p')
p2_1.classList.add('mon')
p2_1.innerHTML = 'Studio'
div2_1.appendChild(p2_1)

let div2_2 = document.createElement('div')
div2_2.classList.add('title')
div2.appendChild(div2_2)
let h2_2 = document.createElement('h2')
h2_2.innerHTML = 'Initially designed to'
div2_2.appendChild(h2_2)

let div2_3 = document.createElement('div')
div2_3.classList.add('content')
div2.appendChild(div2_3)
let p2_3 = document.createElement('p')
p2_3.innerHTML = 'But I must explain you how all this mistaken idea of denouncing'
div2_3.appendChild(p2_3)

let div2_4 = document.createElement('div')
div2_4.classList.add('button')
div2.appendChild(div2_4)
let a2_4 = document.createElement('a')
a2_4.setAttribute('href', '#')
a2_4.classList.add('mon')
a2_4.innerHTML = 'Start here'
div2_4.appendChild(a2_4)

let style = document.createElement('style')
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }
    h1 {
        text-align: center;
        font-family: 'Arvo', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        margin-top: 123px; 
        margin-bottom: 10px;
    }
    h2 {
        text-align: center;
        font-family: 'Arvo', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
    }
    h4 {
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        color: #9FA3A7;
        font-size: 14px; 
        margin-bottom: 64px;
        font-weight: normal
    }
    p {
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        color: #9FA3A7;
    }
    a {
        text-decoration: none;
        color: black;
        letter-spacing: 2.4px;
    }
    .mon {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
    }
    .yellow {
        color: #FFC80A;
    }
    .container {
        margin: 54px auto 0 auto;
        display: flex;
        width: 940px;
        justify-content: center;
    }
    .container .item {
        width: 400px;
        height: 480px;
        border: 1px solid rgb(218, 218, 218);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .subtitle {
        margin-top: 81px;
    }
    .title {
        width: 210px;
        margin-top: 19px;
    }
    .content {
        margin-top: 25px;
        width: 210px;
    }
    .button {
        margin-top: 80px;
    }
    .button a {
        padding: 20px 30px;
        border: 3px solid #FFC80A;
        border-radius: 50px;
        font-size: 12px;
    }
`
document.head.appendChild (style)

div1.addEventListener('mouseover', function(){
    this.style.backgroundColor = '#8F75BE'
    this.style.borderColor = '#8F75BE'
})
div1.addEventListener('mouseout', function(){
    this.style.backgroundColor = ''
    this.style.borderColor = ''
})

div1.addEventListener('mouseover', function(){
    p1_1.style.color = '#FFC80A'
})
div1.addEventListener('mouseout', function(){
    p1_1.style.color = ''
})

div1.addEventListener('mouseover', function(){
    h2_1.style.color = 'white'
})
div1.addEventListener('mouseout', function(){
    h2_1.style.color = ''
})

div1.addEventListener('mouseover', function(){
    p1_3.style.color = 'white'
})
div1.addEventListener('mouseout', function(){
    p1_3.style.color = ''
})

div1.addEventListener('mouseover', function(){
    a1_4.style.color = 'white'
})
div1.addEventListener('mouseout', function(){
    a1_4.style.color = ''
})

div2.addEventListener('mouseover', function(){
    this.style.backgroundColor = '#8F75BE'
    this.style.borderColor = '#8F75BE'
})
div2.addEventListener('mouseout', function(){
    this.style.backgroundColor = ''
    this.style.borderColor = ''
})

div2.addEventListener('mouseover', function(){
    p2_3.style.color = 'white'
})
div2.addEventListener('mouseout', function(){
    p2_3.style.color = ''
})

div2.addEventListener('mouseover', function(){
    p2_1.style.color = '#FFC80A'
})
div2.addEventListener('mouseout', function(){
    p2_1.style.color = ''
})

div2.addEventListener('mouseover', function(){
    h2_2.style.color = 'white'
})
div2.addEventListener('mouseout', function(){
    h2_2.style.color = ''
})

div2.addEventListener('mouseover', function(){
    a2_4.style.color = 'white'
})
div2.addEventListener('mouseout', function(){
    a2_4.style.color = ''
})