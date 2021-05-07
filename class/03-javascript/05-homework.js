//데이터타입 연습문제 13번
let str = "3"
let number = 3

console.log(typeof(str))
console.log(typeof(number))

//데이터타입 연습문제 14번
let array = []
let object = {}

console.log(typeof(array))
console.log(typeof(object))

console.log(Array.isArray(array))
console.log(Array.isArray(object))


//데이터 타입 연습문제 15번
let num = 24
str = String(num)

console.log(typeof(str))


// 연산자 연습문제 16번
console.log(1 + "1")
console.log(1 - "1")
console.log("1" + "1")
console.log(1 + "1")
console.log(3 + "A")
console.log(1 + 1 + "1")
console.log('1' + 1 + 1) //해당 부분 질문하기
console.log("11" -1) 
console.log("11" + 1)
console.log("홍" + "길동")
console.log(20 === "20")
console.log(20 == "20")
console.log(!true)

// 연산자 연습문제 17번
console.log((20 >= 10 ) && (20 === 10))
console.log((20 === 10) || (10 === 10))

//조건문 연습문제 18번
function boolean(input1, input2){
    if(input1 !== input2){
        console.log("true")
    }else if(input1 === input2 && input1 === false ){
        console.log("false")
    }else{
        console.log("true")
    }
}

boolean(true, false)
boolean(true, true)
boolean(false, false)

// 조건문 연습문제 19번
function evenOdd(num){
    if(num === 0){
        console.log("Zero")
    }else if(num % 2 === 1){
        console.log("Odd")
    }else if(num % 2 === 0){
        console.log("Even")
    }
}

evenOdd(3)
evenOdd(0)

// 조건문 연습문제 20번
function temperature(number){
    if(number >= 24){
        console.log("조금 덥습니다")
    }else if(number <= 23 && number >= 19){
        console.log("날씨가 좋네요")
    }else if(number<= 18 && number >= 10){
        console.log("조금 춥네요")
    }else{
        console.log("숫자입력이 잘못되었습니다.")
    }
}

temperature(14)
temperature(8)

// 조건문 연습문제 21번
function days(month){
    if(month === 2){
        console.log(28)
    }else if(month === 1 || 3 || 5 || 7 || 8 || 10 || 12){
        console.log(31)
    }else{
        console.log(30)
    }
}

days(8)

// 조건문 연습문제 22번
function calculator(num1, num2, operator){
    if (operator === "+" && typeof(num1) === "number" && typeof(num2) === "number"){
        console.log(num1 + num2)
    }else if(operator === "-" && typeof(num1) === "number" && typeof(num2) === "number"){
        console.log(num1 - num2)
    }else if(operator === "/" && typeof(num1) === "number" && typeof(num2) === "number"){
        console.log(num1 / num2)
    }else if(operator === "*" && typeof(num1) === "number" && typeof(num2) === "number"){
        console.log(num1 * num2)
    }else {
        console.log("올바른 입력이 아닙니다.")
    }
}

calculator("2", "2", "-")
calculator(2, 2, "+")


//반복문 연습문제 23번
let value =0
function sum(num){
    for(i =1 ; i < num +1 ; i++){
        value = value + i
    }
    console.log(value)
}

sum(5)

// 반복문 연습문제 24번
function countLetter(str){
    let count =0
    for(i=0 ; i< str.length ; i++){
        if(str[i] === "a" || str[i] === "A"){
            count = count + 1
        }
    }
    console.log(count)
}

countLetter("I am from Korea")
countLetter("A day without laughter is a day wasted")

// 반복문 연습문제 25번
function makeNumber(num){
    let character = ""
    for(i=1; i<num + 1; i++){
        if(i === 1){
            character = character + "1"
        }else{
            character = character + "-" + i
        }
    }
    console.log(character)
}
makeNumber(5)
makeNumber(7)

// 반복문 연습문제 26번
function makeOdd(num){
    let character = ""
    for(i=1; i< num+1; i++){
        if(num % 2 === 0 ){
            console.log("홀수 숫자만 입력하셔야 합니다")
        }else if(i % 2 === 0){
            continue
        }else{
            character = character + String(i)
        }
    }
    console.log(character)
}

makeOdd(5)
makeOdd(7)

// 반복문 연습문제 27번
function bigNum(str){
    let compNum = 0;
    for(i=0 ; i < str.length; i++){
        if(compNum < Number(str[i])){
            compNum = Number(str[i]);
        } 
    }
    console.log(compNum)
}

bigNum("12345")
bigNum("871345")


//수학객체 연습문제 28번
function random(){
    let number = 50
    const rand_1_100 = Math.floor(Math.random() * 100) + 1
    if(number > rand_1_100){
        console.log("Win")
    }else{
        console.log("Lose")
    }
}

random()


//실무문제 데이터타입 38번
let stringData = [1, "가나", true, 126, "false" ] 

newStringData = [];
newStringData.push(stringData.pop())
newStringData.push(String(stringData.pop()))
newStringData.push(String(stringData.pop()))
newStringData.push(stringData.pop())
newStringData.push(String(stringData.pop()))
console.log(newStringData)

//실무문제 데이터타입 39번
let numberData = [1, "가나", true, 126, "false", 100 ] 
newNumberData = [];
newNumberData.push(numberData.pop())
numberData.pop()
newNumberData.push(numberData.pop())
numberData.pop()
numberData.pop()
newNumberData.push(numberData.pop())
console.log(newNumberData)

//실무문제 조건문 40번  
function password(input1, input2){
    const newInput1 = String(input1)
    const newInput2 = String(input2)
    if(newInput1 === newInput2){
        console.log("회원가입을 축하합니다")
    }else{
        console.log("비밀번호를 다시확인해주세요.")
    }
}

password("1234", "1235")
password("1234", 1234)

//실무문제 조건문 41번
function grade(score){
    if(score>= 90 && score<=100){
        console.log("A")
    }else if(score>= 80 && score <=89){
        console.log("B")
    }else if(score>= 70 && score <=79){
        console.log("C")
    }else if(score>=60 && score <=69){
        console.log("D")
    }else if(score>=0 && score<=59){
        console.log("F")
    }else{
        console.log("잘못된 점수입니다.")
    }
}

grade(-10)
grade(105)
grade(97)
grade(86)

//실무문제 42번
const fruits = [
    { number:  1, title: "레드향"　　　　},
    { number:  2, title: "샤인머스켓"　　},
    { number:  3, title: "산청딸기"　　　},
    { number:  4, title: "한라봉"　　　　},
    { number:  5, title: "사과"　　　　　},
    { number:  6, title: "애플망고"　　　},
    { number:  7, title: "딸기"　　　　　},
    { number:  8, title: "천혜향"　　　　},
    { number:  9, title: "과일선물세트"　},
    { number: 10, title: "귤"　　　　　 },
]

for(let i = 0 ; i < 3 ; i++){
    console.log("현재" + " " + fruits[i].number + "위" + " " + "과일은" + " "+ fruits[i].title + "입니다.")
}

//실무문제 43번
const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]
let categoryCount = 0 
let pricelevel = 0
let BadgeLevel = ""
for(let i = 0 ; i< myShopping.length; i++){
    if(myShopping[i].category === "의류"){
        categoryCount = categoryCount + 1
        pricelevel = pricelevel + myShopping[i].price
    }
}
if(categoryCount >=5){
    BadgeLevel = "Gold"
}else if(categoryCount <=4 && categoryCount>=2){
    BadgeLevel = "Silver"
}else{
    BadgeLevel = "Bronze"
}
console.log("의류를 구매한 횟수는 총" + categoryCount + "회 금액은" + " " + pricelevel + "이며 등급은" + " " + BadgeLevel+"입니다.")