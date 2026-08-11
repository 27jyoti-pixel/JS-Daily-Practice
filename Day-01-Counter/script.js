let counter = document.querySelector(".counter")
let decr = document.querySelector(".decr")
let incr = document.querySelector(".incr")
let reset = document.querySelector(".reset")
let main = document.querySelector(".m")


incr.addEventListener('click',()=>{
  let x = counter.textContent
  x++;
  counter.textContent = x
  if(counter.textContent>0){
    main.style.backgroundColor="#e6f7ed"
    counter.style.color="green"
    main.style.boxShadow="none"
    main.style.border="3px solid green"
  }else if(counter.textContent==0){
    counter.style.color="black"
    main.style.backgroundColor="white"
    main.style.boxShadow="5px 13px 12px rgba(0, 0, 0, 0.256)"
    main.style.border="none"
  }
})

reset.addEventListener('click',()=>{
  let x = 0;
  counter.textContent = x;
  main.style.backgroundColor="white"
  main.style.boxShadow="5px 13px 12px rgba(0, 0, 0, 0.256)"
  counter.style.color="black"
  main.style.border="none"
})

decr.addEventListener('click',()=>{
  let x = counter.textContent
  x-=1;
  counter.textContent = x
  if(counter.textContent<0){
    counter.style.color = "red"
    main.style.backgroundColor = "#ffe5e5"
    main.style.border = "3px solid rgba(241, 15, 15, 0.85)"
    main.style.boxShadow="none"
  }else if(counter.textContent==0){
    counter.style.color="black"
    main.style.backgroundColor="white"
    main.style.boxShadow="5px 13px 12px rgba(0, 0, 0, 0.256)"
    main.style.border="none"
  }
})