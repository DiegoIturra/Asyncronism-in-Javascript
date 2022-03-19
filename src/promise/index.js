const somethingWillHappend = (value) => {
  return new Promise((resolve,reject) => {
    if(value){
      resolve("Promise resolved");
    }else{
      reject("Promise rejected");
    }
  });
}


const somethingWillHappend2 = (value) => {
  return new Promise((resolve,reject) => {
    if(value){
      setTimeout(() => { resolve("Yeah!") } , 2000)
    }else{
      const error = new Error("Whoops!");
      reject(error)
    }
  });
}

const value = false;

somethingWillHappend(value)
  .then(response => console.log(response))
  .catch(error => console.log(error));

somethingWillHappend2(value)
  .then(response => console.log(response))
  .catch(error => console.log(error));

//Execute one or more promise
Promise.all([somethingWillHappend(value) , somethingWillHappend2(value)])
  .then(response => {
    console.log("Array of results: " , response);
  })
  .catch(error => {
    console.error(error)
  })