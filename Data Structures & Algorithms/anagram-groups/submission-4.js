class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grouped = new Map();

        strs.forEach(word => {
            const sortedKey = word.split('').sort().join('');

            if(!grouped.has(sortedKey)) grouped.set(sortedKey, [word]);
            else grouped.get(sortedKey).push(word);
        });

        return [...grouped.values()];
    }
}
