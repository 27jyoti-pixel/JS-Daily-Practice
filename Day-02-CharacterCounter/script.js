let user_input = document.querySelector(".user-input")
let clear = document.querySelector(".but")
let count = document.querySelector(".count")
let left_count = document.querySelector(".left-count")
let alert = document.querySelector(".alert")

user_input.addEventListener("input",()=>{
  let c = (user_input.value).length
  if(c>79){

  }
  count.textContent=c
  left_count.textContent=100-c
})

clear.addEventListener("click",()=>{
  user_input.value=""
  count.textContent=0
  left_count.textContent=100
})