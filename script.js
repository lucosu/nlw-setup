//registro na memória
const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

//registrou na memória um evento de clique&mudança
button.addEventListener("click", add)
form.addEventListener("change", save)

//adicionando uma nova data e recortando
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Oh, oh! Take easy cowboy! This day already exists.")
    return
  }

  nlwSetup.addDay(today)
}

//pegando os dados e guardando no localStorage
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//pegou no localStorage e transformou em objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || []

nlwSetup.setData(data)
nlwSetup.load()
