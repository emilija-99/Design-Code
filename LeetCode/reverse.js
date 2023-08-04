str = "Hello, World!";
function reverseFunction(str){
    let arrayString = str.split('');
    let arrayReverse = arrayString.reverse();
    let stringReverse = arrayReverse.join('');
    return stringReverse
}
let return1 = reverseFunction(str);
console.log(return1)

function myReverse(str){

    let n = str.length;
    let ind =0;
    let pom;
    n = parseInt(n/2);
    if(str.length%2 != 0){
        ind = str.length/2;
        ind++;
        ind = parseInt(ind);
    }
    for(let i = 0; i < n; i++){
        let j = str.length - 1 - i;
            if(ind === i){
                continue;
            }else{
                pom = str[i];
                let strArr = str.split('')
                strArr[i] = str[j];
                strArr[j] = pom;
                str = strArr.join('');
            }
        }

    return str;
}

let return2 = myReverse(str);
console.log(return2);