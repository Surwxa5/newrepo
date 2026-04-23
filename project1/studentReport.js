const Students =[
  {Name:"Surakshya Nepali",Marks:65},
  {Name:"Samikshya Nepali",Marks:95},
  {Name:"Pratikshya Nepali",Marks:45},
  {Name:"Prashant Nepali",Marks:35},
  {Name:"Shanta Nepali",Marks:75},
  {Name:"prem Nepali",Marks:55},
]

const tableBody = document.getElementById("student-table")
const averageMarks = document.getElementById("ave-Marks")

let totalAvg = 0

Students.forEach(student =>{

  totalAvg += student.Marks
  let colorCourse = ''
  if(student.Marks<50){
    colorCourse = "red"
    }
    else if (student.Marks>70){
      colorCourse = "green"
    }
    else{
      colorCourse = "orange"
    }

    const row = `<tr class="${colorCourse}">
    <td>${student.Name}</td>
    <td>${student.Marks}</td>
    </tr>`
    tableBody.innerHTML += row
})

 const average = totalAvg/Students.length
averageMarks.innerText = average.toFixed(2)
