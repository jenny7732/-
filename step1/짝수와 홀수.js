function solution(num) {
  var answer = (num%2==1 || num%2 ==-1) ? "Odd" : "Even";
  return answer; 
}

// num % 2 의 결과가 0이면 false!!
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}