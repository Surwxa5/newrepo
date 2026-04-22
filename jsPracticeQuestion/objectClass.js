//  const myProfile={
//     name:"surakhya",
//     age:20,
//     city:"yogikuti",
//     hasTravelHobby: function(){
//       return this.hobbies.includes("traveling")
//     },
//     hobbies:["reading","traveling","eating"],
//     introduce:function(){
//       // using this instead of myprofile
//       return "Hi ,i am " + this.name + " form " + this.city + " my hobbies are:" + this.hobbies.join()
//     }
//   }
// console.log( myProfile.hasTravelHobby())

const students = [
  { name: "Ram", marks: 45 },
  { name: "Sita", marks: 80 },
  { name: "Hari", marks: 32 },
  { name: "Gita", marks: 71 },
  { name: "Bimal", marks: 28 }
];

function getFailingStudent(students){
  let result = []
  for(let i = 0 ;i<students.length;i++){
    if(students[i].marks<50)
    {
      result.push(students[i])
    }
  }
return result
}
console.log(getFailingStudent(students))


