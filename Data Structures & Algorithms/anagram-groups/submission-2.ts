class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramGroups: Record<string, string[]> = {};

        for (let word of strs) {
            const sortedWord = word.split('').sort().join('');

            if(!anagramGroups[sortedWord]) {
                anagramGroups[sortedWord] = [];
            }
            
            anagramGroups[sortedWord].push(word);
        }

        return Object.values(anagramGroups);
    }
}
