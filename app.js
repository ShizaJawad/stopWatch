// // console.log("hello world");


// // setTimeout(function(){
// //     console.log("hello");
// // } , 1000)
// // setTimeout(function(){
// //     console.log("hello 2");
// // } , 2000)
// // setTimeout(function(){
// //     console.log("hello 3");
// // } , 3000)
// // setTimeout(function(){
// //     console.log("hello 4");
// // } , 4000)



// // function setTimeout(){
// //     clearInterval(interval)
// // }


// var timer = document.querySelector("#timer");
// var num = 0
// timer.innerHTML = num


// setInterval(function(){
//     num +=1
//     timer.innerHTML = num;
// } , 1000)


// // ------------TIMER STARTED--------------

var seconds = document.querySelector("#sec");
sec = 0
seconds.innerHTML = sec;

var minutes = document.querySelector("#min")
min = 0
minutes.innerHTML = min;

var hour = document.querySelector("#hr")
hr = 0
hour.innerHTML = hr

// var interval;
setInterval(function(){
    var interval = 
    sec += 1
    seconds.innerHTML = sec
    if(sec == 60){
        min += 1
        sec = 0
        minutes.innerHTML = min
    }
    else if(min == 60){
        min = 0
        sec = 0
        hr += 1
        hour.innerHTML = hr
    }
}, 1000)


function myStopFunction() {
    clearInterval(interval);
  }
  







