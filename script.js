
item = document.querySelector("#item")
listContainer = document.querySelector("#list-container")

function addItem() {
    const li = document.createElement("li")
    const textContent = document.createElement("span")
    const del = document.createElement("button")

    li.innerHTML = item.value
    li.appendChild(textContent)
    li.appendChild(del)
    del.textContent = "Delete"
    listContainer.appendChild(li)

    item.value = ""

    del.addEventListener("click", () => {
        listContainer.removeChild(li)
    })

}

