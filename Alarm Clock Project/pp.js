//Variables
const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;
const myList = document.querySelector('#myList');
const addAlarm = document.querySelector('.setalarm');
const alarmList = [];
//function to ring the alarm audio
function ringing(now){
    audio.play();
    alert(`Hey !it is $(now)`);
}
//function for current time 
function updateTime (){
    var today = new Date(); 
    const hour = formatTime(today.getHours());
    const minutes = formatTime(today.getMinutes());
     const seconds = formatTime(today.getSeconds());

  
     const ampm =  hour >= 12 ? 'PM' : 'AM';


     const now = `${hour}:${minutes}:${seconds}:${ampm}`;
    display.innerText=`${hour}:${minutes}:${seconds} ${ampm}`;
    //if time is in AM format the background is set to have lighter theme
    if(ampm=='AM')
    {
      document.body.style.background ='linear-gradient(to top, #99ccff 0%, #ffff99 100%) no-repeat ';
        
    }
    //if time is in PM format the background is set to have dark theme
    else{
       document. body.style.background = 'linear-gradient(to top , black 0%, darkgrey 100%) no-repeat ';
       document.getElementById("container1").classList.add("customStyle");    
    }
    //If it is, the function "ringing()" is called, presumably to sound an alarm.
    if(alarmList.includes(now) ){
        ringing(now);
    } 
}
function formatTime(time){
    if(time < 10 && time.length != 2){
        return '0' + time;
    }
    return time;
}
//Clear alarm function
function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}
myList.addEventListener('click',e=>{
    console.log("removing element")
    if(e.target.classList.contains("deleteAlarm")){
        e.target.parentElement.remove();
    }
})
remove = (value) => {
    let newList = alarmList.filter((time) => time != value);
    alarmList.length = 0;
    alarmList.push.apply(alarmList,newList);
    console.log("newlist",newList);
    console.log("alarmList",alarmList);
}
//showing the newly alarm added to the display screen
function showNewAlarm(newAlarm){
    const html =`
    <li class = "time-list">
        <span class="time">${newAlarm}</span>
        <button class="deleteAlarm time-control" id="delete-button" onclick = "remove(this.value)" value=${newAlarm}>Delete</button>
        </li>`
        myList.innerHTML += html
};
//Add alarm function
addAlarm.addEventListener('submit',e=> {
    e.preventDefault();

    let new_h=formatTime(addAlarm.a_hour.value);
        if(new_h ==='0'){
            new_h = '00'
        }
    let new_m=formatTime(addAlarm.a_min.value);
        if(new_m ==='0'){
            new_m = '00'
        }
    let new_s=formatTime(addAlarm.a_sec.value);
        if(new_s === '0'){
        new_s = '00'
    }
    let new_ampm=addAlarm.ampm.value;

    const newAlarm = `${new_h}:${new_m}:${new_s}:${new_ampm}`

    if(isNaN(newAlarm)){
        if(!alarmList.includes(newAlarm)){
            alarmList.push(newAlarm);
            console.log(alarmList);
            console.log(alarmList.length);
            showNewAlarm(newAlarm);
            addAlarm.reset();
        } else{
            alert(`Alarm for ${newAlarm} already set.`);
        }
    } else {
        alert("Invalid Time Entered");
    }

})

//updating the current time every second
setInterval(updateTime, 1000);
    
    
    
