for(let i=0 ; i< 5; i++){
    console.log("안녕하세요")
}

for(let i=0; i<5 ; i= i+1){
    console.log(i + " " +  "번째입니다.")
}


const classmates = ["철수", "영희", "훈이"]
for(let i = 0 ; i < classmates.length; i++){
    console.log(classmates[i] + "입니다.")
}

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]
for(let i =0 ; i< fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}


// 반복문 실습문제
let value =0
function sum(num){
    for(i =1 ; i < num +1 ; i++){
        value = value + i
    }
    console.log(value)
}

sum(5)

//반복문 실습문제2

