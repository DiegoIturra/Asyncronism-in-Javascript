const doSomething = (value) => {
    return new Promise((resolve , reject) => {
        if(value){
            setTimeout(() => resolve("Resolved") , 3000);
        }else{
            reject(new Error("No resolved"));
        }
    });
}

const doSomethingAsync = async() => {
    const value = true;
    try {
        const something = await doSomething(value);
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log("Before");
doSomethingAsync();
console.log("After");

console.log("Before 1");
doSomethingAsync();
console.log("After 1");