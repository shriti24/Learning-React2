
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let sortedNums=nums.sort(function(a, b) {
        return a - b;
    }); // 11, 5, 5 1
        console.log(sortedNums);

    let firstSubArray=0;
    let secSubArray=0;
    for(let j=sortedNums.length-1; j>=0 ; j--) {
      
        firstSubArray = sortedNums[j] + firstSubArray; //11
        console.log(firstSubArray);
        for (let i =0;i< sortedNums.length-1 ; i++){
            secSubArray = sortedNums[i] + secSubArray;
        }
        console.log(secSubArray);
        
        if(firstSubArray === secSubArray ) return true

    }
    return false
};

