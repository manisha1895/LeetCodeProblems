/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Constraints:
//   2 <= nums.length <= 103
//  -109 <= nums[i] <= 109
//  -109 <= target <= 109
// Only one valid answer exists.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    let mapOfNumbers = {}; // key: num from nums, value: their array index
    // we loop nums array and check in mapOfNumbers
    // if a key exists that can add upto target with current num in nums
    for(let i=0;i<nums.length;i++){
       const otherKey = target - nums[i];
       // if otherKey already traversed , we got the pair
       if (mapOfNumbers[otherKey] !== undefined) return [i, mapOfNumbers[otherKey]];
       // if otherKey not traversed , we add nums[i]
       if (mapOfNumbers[nums[i]] === undefined) mapOfNumbers[nums[i]] = i;
    }
}

// Time Complexity : O(n)
// Space Complexity : O(n)
