// 8. Pass or Fail

// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 
// 32. 

// Input Format: 

// The first line of the input contains an integer N, denoting the number of students in your class.
// The second line of the input contains N space-separated integers, denoting the maths marks of students in your class.


const isAllPass = (N, Arr) => 
{
  for(let i=0; i<N; i++){
    if(Arr[i] < 32){
      return("NO");
    }
  }
    return("YES");
};
 
