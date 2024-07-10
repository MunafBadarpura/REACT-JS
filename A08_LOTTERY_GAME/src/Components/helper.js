function genTicket(n){
    let arr = new Array(n);
    for(let i =0; i<n;i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr){
    let sum = arr.reduce((sum, curr) => sum+curr, 0);
    return sum;
}

export {genTicket, sum};