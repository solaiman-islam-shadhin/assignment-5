document.getElementById("theme-btn").addEventListener("click",function(){
    getRandomColor();
    changeTheme();
})
function getRandomColor() {
    
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTheme() {
    const backgroundColor = getRandomColor();
    const textColor = getRandomColor();

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
}