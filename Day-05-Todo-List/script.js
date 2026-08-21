let mid_content = document.querySelector(".mid")
let task = document.querySelector("#task")
let addBtn = document.querySelector(".add")
let total = document.querySelector(".total_val")
let remaining = document.querySelector(".remain")
let completed = document.querySelector(".complete")
let count = 0;
let complete = 0

addBtn.addEventListener('click',()=>{
  let t = document.createElement('div')
  let checkBox = document.createElement('input')
  let tsk = document.createElement('p')
  let deleteBtn = document.createElement('button')


  checkBox.type="checkbox"
  task.value = task.value.trim()
  if(task.value.length>=1){
    tsk.textContent = task.value
    task.value=""
    count+=1;
    total.textContent=count
    completed.textContent=complete
    remaining.textContent=count-complete
    deleteBtn.textContent="Delete"
    deleteBtn.style.height="30px"
    deleteBtn.style.width="90px"
    deleteBtn.style.border="none"
    deleteBtn.style.border="1.2px solid red"
    deleteBtn.style.color="red"
    deleteBtn.style.backgroundColor="white"
    deleteBtn.style.borderRadius="10px"
    deleteBtn.style.cursor="pointer"
    deleteBtn.addEventListener("click",()=>{
      if(checkBox.checked){
        complete-=1
      }
      mid_content.removeChild(t)
      count-=1
      total.textContent=count 
      remaining.textContent=count-complete
      completed.textContent=complete
    })

    checkBox.addEventListener("click",()=>{
      if(checkBox.checked){
        complete+=1
        completed.textContent=complete
        remaining.textContent=count-complete
      }else{
        complete-=1;
        completed.textContent = complete
        remaining.textContent= count-complete
      }
      
    })
    t.append(checkBox)
    t.append(tsk)
    t.append(deleteBtn)
    t.style.display = "flex"
    t.style.alignItems="center"
    t.style.justifyContent="space-between"
    t.style.width="540px"
    t.style.fontSize = "16px"
    mid_content.append(t)
    }
  
})