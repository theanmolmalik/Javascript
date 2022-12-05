let courses = [
    {
        name: "C++",
        price: 10,
    },
    {
        name: "Js",
        price: 25,
    },
    {
        name: "Java",
        price: 15,
    },
    {
        name: "Django",
        price: 30,
    },
    {
        name: "Python",
        price: 18,
    },
];

function generateList(){
    let ul = document.querySelector(".list-group");
    ul.innerHTML="";

    courses.forEach((course)=>{

        let li = document.createElement("li");
        li.classList.add("list-group-item");

        let name = document.createTextNode(course.name);
        li.appendChild(name);

        let span = document.createElement("span");
        span.classList.add("float-right");

        let price = document.createTextNode("$"+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}

generateList();

const button1 = document.querySelector(".b1");

button1.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price);
    generateList();
})

const button2 = document.querySelector(".b2");

button2.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price-a.price);
    generateList();
})