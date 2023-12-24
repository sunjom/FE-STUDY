let battery_charge = document.getElementById('battery_size');
let now_time = document.getElementById('now_time_id');
let day = new Date();
let string = day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()+' '+day.getHours()+':'+day.getMinutes() + ':' + day.getSeconds();
now_time.innerText = string;

function stop_clock(interval_battery){
    clearInterval(interval_battery);
    now_time.innerText="";
    now_time.style.backgroundColor='#111'
}

function battery_count(){
    battery_charge.innerText = battery_charge.innerText-1;
    day = new Date();
    string = day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()+' '+day.getHours()+':'+day.getMinutes() + ':' + day.getSeconds();
    now_time.innerText = string;

    if(battery_charge.innerText < 1){
        stop_clock(interval_battery);
    }
}
let interval_battery = setInterval(battery_count,1000);

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

hours.addEventListener('keyup', ()=>{
    let hours_val = hours.value;
    if(hours_val < 0 || hours_val > 23){
        alert('시간은 1~23사이 값을 써주세요');
        hours.value='';
    }
});

minutes.addEventListener('keyup',()=>{
    let minutes_val = minutes.value;
    if(minutes_val < 0 || minutes_val > 59){
        alert('분은 0~59사이 값을 써주세요');
        minutes.value='';
    }
});

seconds.addEventListener('keyup',()=>{
    let seconds_val = seconds.value;
    if(seconds_val < 0 || seconds_val > 59){
        alert('초는 0~59사이 값을 써주세요');
        seconds.value='';
    }
});

let day_class = document.getElementsByClassName('night_and_day');
let time_class = document.getElementsByClassName('selected_time');
let delete_class = document.getElementsByClassName('delete_button');
function insert_clock(){
    for(let i = 0 ; i < day_class.length ; i++){
        if(day_class[i].innerText=='' && time_class[i].innerText==''){
            if(hours.value<12){
                day_class[i].innerText='오전';
            }else{
                day_class[i].innerText='오후';
            }
            time_class[i].innerText=hours.value +':' + minutes.value + ':' + seconds.value;
            delete_class[i].style.visibility='visible';
            break;
        }
    }
}
function delete_func(idx){
    day_class[idx-1].innerText='';
    time_class[idx-1].innerText='';
    delete_class[idx-1].style.visibility='hidden';
}

function delete_all_func(){
    for(let i = 0 ; i < day_class.length ; i++){
        day_class[i].innerText='';
        time_class[i].innerText='';
        delete_class[i].style.visibility='hidden';
    }
}

function turn_off_func(){
    stop_clock(interval_battery);
}