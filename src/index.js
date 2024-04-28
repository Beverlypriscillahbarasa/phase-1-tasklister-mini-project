document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    handleTodo(e.target.new_description.value)
  })
})

function handleTodo(description){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent= `${description}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('list').appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove()
}
