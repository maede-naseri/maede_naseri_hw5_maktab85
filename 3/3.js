// let input
// let arr=[]
// do{
//   input=prompt("enter your name and age")
//     if (input==="" || input===null) break
//     const temp=input.split(',')
//     arr.push({
//         name:temp[0].trim(),
//         age:temp[1].trim(),
//     })
// }while (input!=="" || input!==null)
//
// let tempAgeArray = [...arr.sort((a, b) => a.age - b.age)];
// console.table("Sort By Age : ", tempAgeArray);
//
//





// -----------------------------------------------//
function func(array){
    let age=[...array.sort((a,b)=>a.age-b.age)]
    console.table("Sort By Age : ", age);
}
console.log(func([
    {name:'zahra',age:23},
    {name:'maede',age:22},
]))