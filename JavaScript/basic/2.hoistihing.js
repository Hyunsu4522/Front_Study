/*
    Hoisting

*/
console.log(name);
var name = "jiwon";
console.log(name);


/*
    Hoisting은 뭘까?

    모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
    var와는 다르게 let과 const는 tdz를 이용하여
    마치 오이스팅이 일어나지 않는 것 처럼 동작하게 해준다.
    
*/
console.log(name);
let name = "jiwon";
console.log(name);