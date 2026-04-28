// store all the users here so the search can access
 let allUsers = [];
async function userDirectory() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    allUsers = data
    document.getElementById("loading").style.display = "none"
    showCards(allUsers)

  } catch(error){
    document.getElementById("loading").innerText = "Failed"
  }
}

function showCards(users){
  const container = document.getElementById("cards-container")
  let allCards = "";
  users.forEach(user => {
    allCards += `<div class = "card">
    <h2>${user.name}</h2>
    </div>
    `
  });
  container.innerHTML = allCards;
}

document.getElementById("search").addEventListener("input",function(){
  const typed = this.value.toLowerCase()
  // filter users where name includes what you typed 
  const filtered = users.filter(user => user.name.toLowerCase().includes(type))
  showCards(filtered)
})
userDirectory()