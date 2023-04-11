//1. Write a function that takes in a string and returns it when reversed
// let food = “eating”
function array(string){


}


//Write a function that takes in the following array and 
// consoles the target if it is found else null
// let num1 = [2,8,0,23,5,45,76]
Target = 23

function divideArray(num){
  if(num.length<=1){
      return num;
  }
      let middle = Math.floor(num.length/2)
      let left= num.slice(0,middle);
      let right = num.slice(middle);
      return sortedArray(divideArray(left),divideArray(right));
      
  }
  function sortedArray(left,right){
  let emptyArray = [];
  while(left.length && right.length){
      if(left[0]<right[0]){
       emptyArray.push(left.shift());
      }
      else{
           emptyArray.push(right.shift());
      }
  
  }
  return[...emptyArray,...left,...right]
  }
  
  let num = [2,8,0,23,5,45,76]
  console.log(divideArray(num))
  function divideArrs(array){
      if (array <= 1){
          return array
      }
  
  }
  //target 23
function binary(Array,target){
        let left = 0
        let right = array.length -1
        while(left<=right){
           let  middle  = Math.floor((left+right )/2)
            if(array[middle]===target){
            return middle
        }
            else if(array[middle]<target){
            left = middle +1
         }
        else{
            right = middle -1
        }
    }
        return null
    }
    const Array = [2,8,0,23,5,45,76];
    target = 23;
    console.log(binary(Array,target));

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e 
// “2001 is not a leap year” 


//Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function number(arr){
    arr.forEach(element =>{
        console.log(element *4)
    });
}
let numArray = [12,87,45,75,23,64,73];
number(numArray);
//6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
let nums = ["10","24","45","56","67"];
for(let i = 0; i <nums.length; i++){
    console.log(i);
    console.log(nums[i]);
}

//Given a range of numbers from 0 to 100, console”Fizz” 
// if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” 
// if divisible by both 3 and 5.