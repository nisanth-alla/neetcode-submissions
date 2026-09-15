class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seenNums = {};

        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const complement = target - nums[i];

            if(complement in seenNums) {
                return [seenNums[complement], i];
            }
            seenNums[currentNum] = i;
        }
        return [];
    }
}
