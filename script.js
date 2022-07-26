const botaoCadastrar = document.getElementsByTagName("button")[0];


async function createUser(data) {
  // https://api-desafio-softlive.herokuapp.com/users
  const response = await fetch(
    "https://api-desafio-softlive.herokuapp.com/users",
    {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => error);
  return response;
}

botaoCadastrar.addEventListener("click", async (e) => {

  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  
  const userData = {
    name: name,
    email: email,
    password: password
  }

  const response = await createUser(userData)
  
  console.log(response)
})