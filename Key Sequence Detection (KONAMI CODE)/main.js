const pressed = [];
const secretCode = 'secret';
const input = document.querySelector('#inputText');
const content = document.querySelector('.content')

input.addEventListener('keyup',(e)=>{
    pressed.push(e.key);
    pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
        content.style.display = 'none';
        cornify_add({ younicorns: "12,957,826,716,386" });
        

    }
})