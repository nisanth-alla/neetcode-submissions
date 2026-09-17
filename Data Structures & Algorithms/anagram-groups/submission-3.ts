class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramGroups = new Map<string, string[]>();

        strs.forEach(word => {
            const key = word.split('').sort().join('');

            if(!anagramGroups.has(key)) anagramGroups.set(key, [word]);
            else anagramGroups.get(key).push(word);
        })

        return [...anagramGroups.values()];
    }
}
