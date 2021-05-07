const profile = {
    name : "철수",
    age: 12,
    school: "다람쥐초등학교"
}

if(profile.age >= 20 ){
    console.log("성인입니다")
}else if (profile.age >= 8 && profile.age <=19) {
    console.log("학생입니다.")
}else{
    console.log("어린이입니다.")
}

// 조건문 연습문제 1번
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

