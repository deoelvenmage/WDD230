//vartime; .list is a list item
const input = document.querySelector("#favchap")
const button = document.querySelector("#submitter")
const list = document.querySelector(".listcontainer")

button.addEventListener('click', () => {
    if (input.value != "") {
        const item = document.createElement('li')
        const deleter = document.createElement('button')

        item.textContent = input.value
        deleter.textContent = "❌"
        deleter.addEventListener('click', () => {list.removeChild(item)})

        item.appendChild(deleter)
        list.appendChild(item)
        input.focus()
        input.value = ""
    }
    return
})