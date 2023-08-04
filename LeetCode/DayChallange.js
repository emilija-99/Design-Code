var PredictTheWinner = function(nums) {
    var pointsPlayer1 = 0;
    var pointsPlayer2 = 0;
    let random = 0;
    var i = nums.length;
    while(i > 0){
        console.log(i)
        if (i % 2 != 0) {
            console.log("PLAYER1")
            random = parseInt(Math.random() * (i - 1));
            pointsPlayer1 += nums[random];
            console.log("Total points: "+nums[random]);
            nums.splice(random, 1);
            console.log(nums);
        } else {
            console.log("PLAYER2")
            random = parseInt(Math.random() * (i - 1))
            pointsPlayer2 += nums[random];
            console.log("Total points: "+nums[random]);
            nums.splice(random, 1);
            console.log(nums)
        }
        --i;
    }
    console.log("Player 1 : "+pointsPlayer1+" Player 2 : "+pointsPlayer2)
        if (pointsPlayer1 > pointsPlayer2 || pointsPlayer2 == pointsPlayer1)
            return true;
        else return false;

};
nums = [1,5,2]
PredictTheWinner(nums)