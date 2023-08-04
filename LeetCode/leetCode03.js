var fizzBuzz = function(n) {
    let answer = [];
    let pom = 0;
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i%5 == 0){
            answer[pom] = "FizzBuzz";
        }else if(i % 3 == 0){
            answer[pom] = "Fizz";
        }else if(i % 5 == 0){
            answer[pom] = "Buzz";
        }else{
            answer[pom] = i.toString();
        }
        pom++;
    }
    console.log(answer);
    return answer;
};
fizzBuzz(3);