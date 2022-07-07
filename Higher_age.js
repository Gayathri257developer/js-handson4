// 6. Higher Age

// You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 
// 18(included).
 
// Input Format:

// The first line of the input contains an integer N, denoting the number of person in your locality.
// The second line of the input contains N space-separated integers, denoting the age of persons in your locality.


const highAge = (N, Arr) => 
{
    let age=[];
    for(let i=0; i<N; i++)
    {
      if(Arr[i] >= 18){
        age.push(Arr[i]);
      }
      
    }
    return (age);
};
 
