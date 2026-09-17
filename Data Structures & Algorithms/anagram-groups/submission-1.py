class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        # Create a defaultdict. If a key is missing, it creates an empty list []
        res = defaultdict(list)

        #Loop through every string in our input list
        for s in strs:
            # Create an array of 26 zeros to represent the letters a-z
            count = [0] * 26

            # Loop through each character in the current string
            for c in s:
                # Map the character to an index (0-25) and add 1 to its count
                count[ord(c) - ord("a")] += 1

            # Convert the list of counts into a tuple (so it can be a dictionary key)
            # and append the original string to that group
            res[tuple(count)].append(s)

        # Return the grouped lists
        return list(res.values())

        
        