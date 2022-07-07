// 4. Even Odd

// You are given an array A containing N integer elements, and your task is to return an array 
// B(having a size equal to 2), where B [0]contains the sum of all even elements of array A and 
// B[1]has the sum of all odd elements of the array A.

// Input Format: 

// The first line of the input contains an integer N, denoting the number of elements in the array A.
// The second line of the input contains N space-separated integers, denoting the elements of array A.

const findEvenOdd = (N, Arr) => 
{
    let output = [0,0];
    for(let i=0; i<N; i++){
      if(Arr[i]%2===0){
        output[0] += Arr[i]; //even num arrays addition
      }
      else{
        output[1] += Arr[i]; //odd num arrays addition
      }
    }
    return(output);
};
 