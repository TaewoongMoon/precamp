// 변수와 상수 1번
let name = "문태웅"
console.log(name)

//변수와 상수 2번
name = "철수"
console.log(name)

// 배열 3번
let fruits = ["사과", "바나나", "파인애플"]
console.log(fruits)

//배열 4번
console.log(fruits.indexOf("파인애플"))
let newFruits = []
newFruits.push(fruits[2])

console.log(newFruits)

//배열 5번
let students = ["철수", "영희", "훈이", "짱구", "유리"]
newArr = students.slice(0, 2)
console.log(newArr)

//배열 6번
fruits = ["사과", "바나나"]
let deliciousFruits = []
deliciousFruits.push("맛있는" + " " + fruits[0])
deliciousFruits.push("맛있는" + " " + fruits[1])
console.log(deliciousFruits)

//배열 7번
const number = "01012345678"
let arr = []
arr.push(number.slice(0,3))
arr.push(number.slice(3,7))
arr.push(number.slice(7))

console.log(arr)

//배열 8번
let student = {name :"철수"}
console.log(student)


//배열 9번
const student1 = {
    name: "철수",
    age: 8,
};
const school = {
    name: "다람쥐초등학교",
    teacher: "다람이",
}

student1["school"] = school

console.log(student1)

//배열 10번
student = {
    name: "철수",
    age: 8,
    drink: "사이다",
};

delete student["drink"]

console.log(student)

//배열 11번
const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];


classmates[1].school = "다람쥐 초등학교"

console.log(classmates)


//실무문제 1번
let email = "coDecAmp@gmail.com"
email.includes("@");
email = email.trim();
email = email.toLowerCase();

console.log(email)

//실무문제 2번
//수업시간에 이미 수행함

//실무문제 3번(객체)
	
let movies = [
    { title: "킹스맨", genre: "액션", 상영관: "메가박스" },
    { title: "러브레터", genre: "로맨스", 상영관: "cgv" },
    { title: "스폰지밥", genre: "코미디", 상영관: "메가박스" },
      { title: "노트북", genre: "드라마", 상영관: "cgv" },
      { title: "임파서블", genre: "액션", 상영관: "cgv" },
    { title: "파리의 인어", genre: "로맨스", 상영관: "메가박스" },
    { title: "심슨", genre: "코미디", 상영관: "메가박스" },
      { title: "포레스트 검프", genre: "드라마", 상영관: "cgv" },
 ]


let actionMovie = movies.filter(function(item, idx){
    if (item.genre == "액션"){
        return true;
    }

});
console.log(actionMovie)

let cgvMovie = movies.filter(function(item, idx){
    if (item.상영관 == "cgv"){
        return true;
    }

});
console.log(cgvMovie)

let romanceAndCgvMovie= movies.filter(item =>{
 item.상영관 == "cgv" && item.genre == "로맨스"
});
console.log(romanceAndCgvMovie)

//실무문제 4번(객체)
let List = [
    { number: 1, title: "장미", price: 4000 },
    { number: 2, title: "식칼", price: 7000 },
    { number: 3, title: "슬리퍼", price: 12000 },
      { number: 4, title: "주전자", price: 5000 },
      { number: 5, title: "선풍기", price: 5700 },
    { number: 6, title: "마우스 패드", price: 1800 },
    { number: 7, title: "휴대폰 케이스", price: 5500 },
      { number: 8, title: "마우스", price: 6500 },
 ]

 let result = List.sort(function(a, b) {
     a.price - b.price 
 });



 console.log(result)