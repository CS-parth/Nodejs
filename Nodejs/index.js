// Nodejs was written in C,C++ and Javascript(98%)

/** Architecture of Nodejs 
 * Call stack 
 * NodeAPI CAllback_queue
 */
{
    console.log("I'am here");
    sum = 90;
    console.log("The sum is",sum);
}
/**
 * The above code template do not involve interation with the libraries of c/c++
 * It will only use call stack with main() function will be there by default
 * after that .log(I'am here) then after its completion it will be remoevd and .log("The sum is") will be added 
 */
{
    console.log("Starting up");
    setTimeout(()=>{    // A code function wrtitten in C++
        console.log("2 seconds");
    },2000)
    setInterval(()=>{
        console.log("0 seconds");
    },0)    
    console.log("Ending up");
}
/**
 * The above code is having interations with other lagugae libraries 
 * So first .log() will be added and poped after than 
 * 2sec func will be addde to NodeAPI section
 * 0sec func will be added to Node API secion
 * .log() will be added and poped after than
 * first fastest will be added to the callback queue
 * in this callback queue the function will wait till the main() is not poped
 */