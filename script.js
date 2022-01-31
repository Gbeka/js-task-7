const btn = document.querySelector('button')
const input = document.getElementById('input-todo')
const item = document.getElementById('todo-item')
const form = document.getElementById('add-todo-form')

btn.addEventListener('click', function () {
    let inputValue = input.value
    const div = document.createElement('div')
    div.innerHTML = inputValue;
    item.appendChild(div);
    div.addEventListener('click', function () {
        item.removeChild(div)
    })
})

