async function loadUsers (){
  try{
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  // we have to wait until the data fetch and goes to response
  const data = await response.json();
  // All the data will be printed stored in the data in key value pairs 
  console.log(data)
  data.forEach(users => {
    console.log(users.name)
  });
  } catch (error){
    console.log("somethings went wrong:",error)
  }
  }
loadUsers()