const botaoCadastrar = document.getElementsByTagName("button")[0];

async function createUser(data) {
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

  if(response.id){
    const modal = document.querySelector(".modal");
    modal.style.display = "flex"
    const modalfechar = document.querySelector(".modal-fechar")
    modalfechar.addEventListener("click", (e)=>{
      modal.style.display = "none"
    })
  }else{
    const modalError = document.querySelector(".modal-fechar");
    modalError.style.display = "flex";
    const modalfecharError = document.querySelector(".modal-fechar-error")
    modalfecharError.addEventListener("click", (e)=>{
      modal.style.display = "none"
    })
  }
  
  console.log(response)
})