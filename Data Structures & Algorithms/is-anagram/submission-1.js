class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const charCounts = {};

        for (let char of s) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }

        for (let char of t) {
            if (!charCounts[char] ||charCounts[char] === 0) {
                return false;
            }
            charCounts[char] -= 1;
        }
        return true;
    }
}
