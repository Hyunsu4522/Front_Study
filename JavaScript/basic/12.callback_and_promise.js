/**
 * callback
 */
function getHuman(callback){
    setTimeout(function(){//서버에 요청한다는 가정 (응답은 2초가 걸린다.)
        callback({
            name : "김시원",
            age : 44
        })
    },2000)
}

console.log('요청전송')
getHuman(function(human){
    console.log('응답완료')
    console.log(human.name)
    console.log(human.age)
})


//function 함수관련
// function tmp(){

// }
//이거를 아래와 같이 쓸 수 있음
// but this가 안생김
// tmp = () => {

// }


/**
 * Promise
 */

const timeoutPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('완료')
    }, 2000)
});

timeoutPromise.then(function(res){
    console.log(res)
})