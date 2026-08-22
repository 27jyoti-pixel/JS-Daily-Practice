let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let mid = document.querySelector(".mid")
let con = document.querySelector(".stat")

red.addEventListener("click",()=>{
  mid.style.backgroundColor = "red"
  con.textContent = "Red"
  con.style.color="red"
})

green.addEventListener("click",()=>{
  mid.style.backgroundColor = "green"
  con.textContent="Green"
  con.style.color="green"
})

blue.addEventListener("click",()=>{
  mid.style.backgroundColor = "blue"
  con.textContent="Blue"
  con.style.color="blue"
})