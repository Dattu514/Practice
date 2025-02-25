console.log("Hello World");
console.log("Hello World1");

//write a armstrong number code

let num = 153;   
let sum = 0;
let temp = num;  

while (num > 0) {
    let rem = num % 10;
    sum += rem * rem * rem;
    num = parseInt(num / 10);
}

if (temp == sum) {           
    console.log(temp + " is an Armstrong number");
} else {
    console.log(temp + " is not an Armstrong number");
}            


