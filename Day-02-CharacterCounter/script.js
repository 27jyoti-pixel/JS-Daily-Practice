let user_input = document.querySelector(".user-input")
let clear = document.querySelector(".but")
let count = document.querySelector(".count")
let left_count = document.querySelector(".left-count")

user_input.addEventListener("input",()=>{
  let c = Number((user_input.value).length())
  count.textContent=c
  left_count.textContent=100-c
})

clear.addEventListener("click",()=>{
  user_input.value=""
  count.textContent=0
  left_count.textContent=100
})