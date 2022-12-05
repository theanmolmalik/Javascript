let counter = document.querySelector(".counter");
let followers = document.querySelector(".followers");

console.log(counter);
console.log(followers);

let count = 1;

setInterval(()=>{
    if(count<1000)
    {
        count++;
        counter.innerText = count;
    }
},1);

setTimeout(()=>{
    followers.innerText = "Followers on Instagram.";
},5000);