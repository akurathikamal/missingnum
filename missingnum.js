function findMissingNumber(nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  const arraySum = nums.reduce((sum, num) => sum + num, 0);
  const missingNumber = totalSum - arraySum;
  return missingNumber;
}
const nums = [3, 0, 1];
console.log(`The missing number is: ${findMissingNumber(nums)}`);
