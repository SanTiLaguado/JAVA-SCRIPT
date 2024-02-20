function asyncOperation(id, delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Operacion ${id} completada`)         
        }, delay);
    })
}

const promise=[
    asyncOperation(1, 1000),
    asyncOperation(2, 4000),
    asyncOperation(3, 3000)
]

Promise.race(promise)
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.error(error)
    })

Promise.all(promise)
    .then(data =>{
        console.log(data)
    })
    .catch(error =>{
        console.log(error)
    })