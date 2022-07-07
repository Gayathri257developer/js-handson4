// 1.Find the Product

// Write a program that takes an array as input from the user and find out the product of the elements.

// Input Format:

// The input contains a single number 
// N, followed by N numbers as array elements.


const Find_Prod = (array, N) => 
{
  let product = 1;
  for(let i=0; i<N; i++){
   product *= array[i];
  }
return (product);
};