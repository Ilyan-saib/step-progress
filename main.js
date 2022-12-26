let title = document.getElementsByTagName('p')
let num_unlock = document.getElementsByClassName('num-unlock')
let num = document.getElementsByClassName('num')
let step = document.getElementsByClassName('step')
let step_unlock = document.getElementsByClassName('step_unlock')
let back = document.getElementById('back')
let submit = document.getElementById('submit')
let collection = document.getElementById('collection')
let jsp = collection.children
let counter = 0
let desc = document.getElementById('desc')
verif()

function unlock(x) {
  jsp[x].children[0].classList.remove('num')
  jsp[x].children[0].classList.add('num-unlock')
  jsp[x].children[1].classList.remove('steps')
  jsp[x].children[1].classList.add('step-unlock')


  if (counter > 0 && counter < 3) {
    back.style.visibility = "visible"
  }
  else{
    back.style.visibility = "hidden"
  }
}
function lock(x) {
  jsp[x].children[0].classList.remove('num-unlock')
  jsp[x].children[0].classList.add('num')
  jsp[x].children[1].classList.remove('step-unlock')
  jsp[x].children[1].classList.add('steps')

  if (counter > 0 && counter < 3) {
    back.style.visibility = "visible"
  }
  else{
    back.style.visibility = "hidden"
  }
}
function verif() {
  if (counter === 0) {
    desc.innerHTML = "LOREM IPSUM"
    back.innerText = "back"
    submit.innerText = "Submit decription"
  }
  else if (counter === 1) {
    desc.innerHTML = "DOLOR SIT AMET"
    back.innerText = "back"
    submit.innerText = "Submit decription"
  }
  else if (counter === 2) {
    desc.innerHTML = "ARE YOU SURE?"
    back.innerText = "Nope"
    submit.innerText = "Yes, im sure"
  }
}
jsp[0].children[0,1].addEventListener('click',()=>{

lock(1)
lock(2)
back.style.visibility = "hidden"
counter = 0
verif()
})


jsp[1].children[0,1].addEventListener('click',()=>{

 unlock(1)
 lock(2)
 
counter = 1
if (counter > 0 && counter < 3) {
  back.style.visibility = "visible"
}
else{
  back.style.visibility = "hidden"
}
verif()
})

jsp[2].children[0,1].addEventListener('click',()=>{

 
  if (jsp[1].children[0].classList.contains('num')) {
    return
  }
  else{
    unlock(2)
  }
  counter = 2 
 })

 





 if (counter > 0 && counter < 3) {
  back.style.visibility = "visible"
}
else{
  back.style.visibility = "hidden"
}

submit.addEventListener('click',()=>{

  counter++
 console.log(counter);
 back.style.visibility = "visible"
if (counter > 3) {
 return
}
else{
unlock(counter)
verif()

}

})

back.addEventListener('click' , ()=>{
counter--;
console.log(counter);
if (counter <= 0) {
  lock(counter+1)
  back.style.visibility = "hidden"
  verif()
  return
}
else{
lock(counter+1)
verif()
}

})

