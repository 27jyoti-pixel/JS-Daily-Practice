let user_input = document.querySelector(".user-input")
let clear = document.querySelector(".but")
let count = document.querySelector(".count")
let left_count = document.querySelector(".left-count")
let alertstat = document.querySelector(".alertstat")
let stat = document.querySelector(".stat")

user_input.addEventListener("input",()=>{
  let c = (user_input.value).length
  if(c>=0 && c<=79){
    alertstat.textContent="You're good to go"
    stat.style.backgroundColor="green"
    count.textContent=c
    left_count.textContent=100-c
  }
  else if(c>=80 && c<=99){
    alertstat.textContent="Almost at the limit!"
    stat.style.backgroundColor = "orange"
    count.textContent=c
    left_count.textContent=100-c  
  }else if(c>99 && c<=100){
    alertstat.textContent="Character limit reached!"
    stat.style.backgroundColor = "red"
    count.textContent=c
    left_count.textContent=100-c
  }
})

clear.addEventListener("click",()=>{
  user_input.value=""
  count.textContent=0
  left_count.textContent=100
  stat.style.backgroundColor="green"
  alertstat.textContent="You're good to go"
})