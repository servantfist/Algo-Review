// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const nums1 = [2, 3, 5, 7, 11, 15] 
const nums2 = [2, 3, 7, 10, 11, 15]; 

// 
function twoSum(numArr, target) {
  let map = {};
  for (let index = 0; index < numArr.length; index++) {
      console.log(map);
      let complement = target - numArr[index];
      if (map[complement] !== undefined) {
        return [map[complement], index];
      }
      map[numArr[index]] = index;
  }
}

/*
 Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 */
function findDups(numArr) {
    const mySet = new Set(numArr)
    console.log("numArr: " + numArr.length);
    console.log("mySet: " + mySet.size)
    if ( mySet.size === numArr.length) {
        return false;
    }
    
    return true;
}

let target = 10;

let res = twoSum(nums1,target);
console.log(typeof res);

console.log(res)
console.log("Checking array1: " + findDups(nums1));
console.log("Checking array2: " + findDups(nums2));

function twoSumEasier(numArr, target) {
  const indexes = [];
  console.log('Value of indexes before loop: ' + indexes);
  let myString = indexes.join(", ");
  console.log(myString);

  for (let i = 0; i < numArr.length; i++) {
      for( let j = 0; j < numArr.length; j++) {
        let res = numArr[i] + numArr[j];
        if ( res === target) {
          indexes.push(indexes[i]);
          indexes.push(indexes[j]);
          console.log('Value of indexes: ' + indexes);
          return indexes;
        }
      } 
  }
}

console.log("Checking easy version: " + twoSumEasier(nums1));

const array3 = [1, 3, 10, 11, 14]
const goal = 13


const twoSumFirst = (array, goal) => {
  let indexes = [];

  for(let i = 0; i < array.length; i++){
     for(let j = i + 1; j < array.length; j++){
        if (array[i] + array[j] === goal) {
          indexes.push(i);
          indexes.push(j);
        }
     }
  }
  return indexes;
}
let resTwo = twoSumFirst(array3,goal);
console.log(resTwo);
