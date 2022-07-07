// 7. Increment the Array Elements

// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

// Input Format:

// The input contains a single number N, then N array elements as input.


const Inc_Arr = (array,N) => 
{
 for(let i=0; i<N; i++){
   array[i] = array[i]+1;
   console.log(array[i]);
 }
};
 
