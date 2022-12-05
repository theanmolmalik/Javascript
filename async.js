const uno = () => {
    return "I am One.";
}

// const des = async () => {
//     setTimeout(()=>{
//         return "I am Two.";
//     },3000);
// }

const des = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I am Two.");
        }, 3000);
    });
};

const tres = () => {
    return "I am Three.";
};

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await des();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();