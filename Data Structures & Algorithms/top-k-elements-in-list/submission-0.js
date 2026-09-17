class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();

        for (const num of nums) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
        }

        const bucket = [];

        for (const [num, count] of frequency.entries()) {
            if (!bucket[count]) bucket[count] = [];
            bucket[count].push(num);
        }

        const result = [];

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i]) {
                for (const num of bucket[i]) {
                    result.push(num);
                    if (result.length === k) return result;
                }
            }
        }
        return result;
    }
}
