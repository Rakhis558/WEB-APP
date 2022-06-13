const colors=['skyblue','green','blue','yellow','pink','purple'];

function changecolor(){
    const colorIndex=parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}