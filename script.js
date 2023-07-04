// Declaring  multiple variables and initialising with "0"+0.
// so all the variables have initil value 00.
let hr = (min = sec = ms = "0" + 0),
    startTimer;


//selects the element from the document using their class names &
// assigned them the variables startBtn, stopBtn, and resetBtn.
// document.queryselector finds the first element in the document that matches the specified css selector
const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");


//Added event listener to the buttons for the "click" event.
// When the button is clicked, the start/stop/reset function will be called
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);


// Start Function

//  function is called when the start button is clicked
function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");
    //  sets up a timer using setInterval() that increments the milliseconds (ms) variable every 10 milliseconds
    startTimer = setInterval(() => {
        ms++;
        // conditional (ternary) operator to update the value of the ms variable.
        ms = ms < 10 ? "0" + ms : ms;

        //  checks if the milliseconds reach 100
        if (ms == 100) {
            // increments the seconds (sec) variable 
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            //  resets the milliseconds to 0
            ms = "0" + 0;
        }

        // checks if the seconds reach 60
        if (sec == 60) {
            // increments the minutes (min) variable
            min++;
            min = min < 10 ? "0" + min : min;
            //  resets the seconds to 0
            sec = "0" + 0;
        }
        //  if the minutes reach 60
        if (min == 60) {
            //  it increments the hours (hr) variable 
            hour++;
            hour = hour < 10 ? "0" + hour : hour;
            // resets the minutes to 0.
            min = "0" + 0;
        }
        // After each update, it calls the putValue function to update the displayed values.
        putValue();
    }, 10); //1000ms = 1sec;
}


// Stop Function

// This function is called when the stop button is clicked
function stop() {
    // removes the "active" class from startBtn and adds the "stopActive" class to stopBtn
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    //  stops the timer using clearInterval() by passing the startTimer variable
    clearInterval(startTimer);
}

// reset Function

// This function is called when the reset button is clicked
function reset() {
    //it removes both "active" and "stopActive " class.
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    // stops the timer using clearInterval() by passing the startTimer variable
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    // calls the putValue function to update the displayed values
    putValue();
}


// Putvalue Function

// updates the displayed values of milliseconds, seconds, minutes, and hours
// selects the elements with the corresponding class names and updates their
//  innerText to the values of ms, sec, min, and hr

function putValue() {

    document.querySelector(".milliseconds").innerText = ms;
    document.querySelector(".seconds").innerText = sec;
    document.querySelector(".minutes").innerText = min;
    document.querySelector(".hours").innerText = hr;

}

