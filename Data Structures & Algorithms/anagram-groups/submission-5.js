class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grouped = new Map();

        strs.forEach(word => {
            const sortedKey = word.split('').sort().join('');

            if(grouped.has(sortedKey)) grouped.get(sortedKey).push(word);
            else grouped.set(sortedKey, [word]);
        });

        return [...grouped.values()];
    }
}
