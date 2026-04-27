const card = document.getElementById("card1")

async function userDirectory() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
    card.innerHTML +=data 

  } catch(error){
    console.log("something wrong !")
  }
}
userDirectory()