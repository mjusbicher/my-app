let isOk = true;


const promesaCustom = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isOk){
                resolve(task);
            } else{
                reject('Erorr');
            }
    }, time)})};

export default promesaCustom;