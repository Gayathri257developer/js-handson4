// 5. Find whether the number is present or not

// Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.

// Input Format: 

// The first line contains an integer N, denoting the size of the array.
// The second line contains N space-separated integers, denoting the elements of the array.
// The third line contains an integer M, denoting the element that needs to be searched.

const Find_Num = (array,N,M) => 
{
  let result=0;
  for(let i=0; i<N; i++){
    if(M == array[i]){
      result++;
    }
  }
  if(result>0){
    return ("YES");
  }
  else{
    return ("NO");
  }
};
 
