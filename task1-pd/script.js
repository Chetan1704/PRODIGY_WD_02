
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")
const result = document.querySelector(".result")
const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const millisecond = document.querySelector(".millisecond")

let hr = min = sec = ms = "0" + 0;
let startTimer;

start.addEventListener("click",()=>{
    result.innerHTML= "Clock Start Counting";
    start.classList.add("active");
    stop.classList.remove("stopActive");
    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;
        if(ms == 100){
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60){
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }

        timer();
        
    }, 1);
})
stop.addEventListener("click",()=>{
    result.innerHTML= "Clock Stoped ";
    stop.classList.remove("active");
    stop.classList.add("stopActive");
    clearInterval(startTimer);
})
reset.addEventListener("click",()=>{
    result.innerHTML= "Clock Reset";
    reset.classList.remove("active");
    stop.classList.add("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    timer();
    

})

function timer(){
    millisecond.innerHTML = ms;
    second.innerHTML = sec;
    minute.innerHTML = min;
    hour.innerHTML = hr;
}


