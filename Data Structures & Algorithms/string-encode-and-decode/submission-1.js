class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        strs.forEach((string) => {
            encodedString += string.length + "#" + string;
        });
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedString = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j += 1;
            }

            let length = parseInt(str.slice(i, j), 10);

            let word = str.slice(j + 1, j + 1 + length);
            decodedString.push(word);

            i = j + 1 + length;
        }
        return decodedString;
    }
}
