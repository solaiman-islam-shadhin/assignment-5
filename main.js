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

let day=document.getElementById("day-container");
let daytime=new Date();
let converteddate=daytime.toDateString();

let div=document.createElement("div");
div.classList.add();
div.innerHTML= `
<p class="text-xl "> ${converteddate}</p>
`
day.appendChild(div);

// time

let now = new Date();

let Time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });


function taskmin(id){
    const task=document.getElementById(id).innerText;
    const newtask= task-1;
    document.getElementById(id).innerText=newtask;
}
function taskplus(id){
    const task=document.getElementById(id).innerText;
    const convertedvalue=parseInt(task);
   
    const sum= convertedvalue+1;
    document.getElementById(id).innerText=sum;
}

let click=0;
function creatediv(id1,id2){
    alert("Board Updated Successfully")
    if(click===5){
        alert("congo!!!!!!!!!!! you have completed all of the task");
    }
    taskmin("task-remaining");
    taskplus("task-plus");
    const head=document.getElementById(id2).innerText;
    const history=document.getElementById('history-container');
    const div=document.createElement("div");
    
    div.classList.add();
    div.innerHTML=`
    <p class="p-4 bg-[#F4F7FF] m-4 rounded-md text-gray-500"> You have completed the task ${head} at ${Time}</p>
 
    `
    history.appendChild(div);
    click++;
    document.getElementById(id1).disabled = true;
}
document.getElementById('Completed-1st').addEventListener('click',function(){

creatediv('Completed-1st','head-1')
})
document.getElementById('Completed-2').addEventListener('click',function(){
    creatediv('Completed-2','head-2')
})
document.getElementById('Completed-3').addEventListener('click',function(){
    creatediv('Completed-3','head-3')
})
document.getElementById('Completed-4').addEventListener('click',function(){
    creatediv('Completed-4','head-4')
})
document.getElementById('Completed-5').addEventListener('click',function(){
    creatediv('Completed-5','head-5')
})
document.getElementById('Completed-6').addEventListener('click',function(){
    creatediv('Completed-6','head-6')
})

document.getElementById('discover').addEventListener("click",function(){
    window.location.href="./next.html";
})
function clearDivs() {
    const container = document.getElementById("history-container");
    container.innerHTML = '';
  }
document.getElementById('clear-history').addEventListener("click",function(){
    clearDivs();
})

