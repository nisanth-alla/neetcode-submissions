class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedArray: string[] = [];
        for (let i = 0; i < strs.length; i++) {
            encodedArray[i] = strs[i].length.toString().concat("#", strs[i]);
        }
        let encodedString: string = encodedArray.join("");

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let position: number = 0;
        const decodedArray: string[] = [];
        while (position < str.length) {
            let hasPosition = str.indexOf("#", position);
            let lengthPart = str.substring(position, hasPosition);
            let length = Number(lengthPart);
            let wordStart = hasPosition + 1;
            let word = str.substring(wordStart, wordStart + length);
            decodedArray.push(word);
            position = wordStart + length;
        }
        return decodedArray;
    }
}
