function add() {
  const today = "21/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists === true) {
    alert("Oh, oh! Take easy cowboy! This day already exists")
  }

  alert(dayExists)

  nlwSetup.addDay(today)
}
