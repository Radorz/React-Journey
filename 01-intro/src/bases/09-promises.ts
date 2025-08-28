


const myPromise = new Promise<number>((resolve,reject) => {

    setTimeout(() => {
        //! Yo quiero mi cualto !!
        resolve(100);
        reject('Mi amigo se perdio')
    }, 2000);    
});

myPromise
    .then((myMoney) => {
        console.log(`Tengo mi cualto ${myMoney}`);
    })
    .catch((reason) => {
        console.warn(reason);
    })
    .finally(()=> {
        console.log('Pues sa seguir con mi vida')
    })