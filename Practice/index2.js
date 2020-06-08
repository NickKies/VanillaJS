// 첫 사용은 const, 필요할 때만 let
/* String
const what = "Nikkies";*/

/*Boolean
const wat = true;*/

/*
Number
const wat = 666;*/

/*Float
const wat = 55.1;*/

// Array
/*const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "fri";


console.log(monday, tue, wed, thu, fri);

const daysOfWeek = [monday, "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 56];

console.log(daysOfWeek[2]);*/

// object
const nikkiesInfo = {
    name:"ys",
    age:29,
    gender:"Male",
    isHandsome:true,
    favMovie:["Along the gos", "LOTR", "Oldboy"],
    favFood:[
        {
            name:"Kimchi",
            fatty:false
        },
        {
            name:"Cheese burger",
            fatty:true
        }
    ]
};

console.log(nikkiesInfo.isHandsome);

nikkiesInfo.isHandsome = false;

console.log(nikkiesInfo.isHandsome);

console.log(nikkiesInfo);