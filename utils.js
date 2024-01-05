function calculateMean(arr){
    const sum = arr.reduce((acc, num) => acc + num, 0)
    return sum / arr.length
}

function calculateMedian(nums){
    const sortedNums = nums.slice().sort((a, b) => a - b);
    const length = sortedNums.length;
    const middle = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      // For even-length arrays, return the average of the two middle elements
      return (sortedNums[middle - 1] + sortedNums[middle]) / 2;
    } else {
      // For odd-length arrays, return the middle element
      return sortedNums[middle];
    }
  }

function calculateMode(arr) {
const frequencyMap = new Map();

// Count the frequency of each number in the array
arr.forEach(num => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
});

// Find the mode(s) - numbers with the highest frequency
let mode = [];
let maxFrequency = 0;

frequencyMap.forEach((frequency, num) => {
    if (frequency > maxFrequency) {
    mode = [num];
    maxFrequency = frequency;
    } else if (frequency === maxFrequency) {
    mode.push(num);
    }
});

return mode.length === arr.length ? [] : mode;
}

module.exports = {
    calculateMean,
    calculateMedian,
    calculateMode
}