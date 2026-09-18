class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums).most_common(k)

        result = []

        for i in count:
            result.append(i[0])
            
        return result
