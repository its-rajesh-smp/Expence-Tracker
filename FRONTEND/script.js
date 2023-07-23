var addBtn = document.querySelector("#id_add")

var list_container = document.querySelector(".list_container")




window.addEventListener('load', async () => {
    const { data: response } = await axios.get("http://localhost:5000/getAllExpense")
    response.forEach((expense) => {
        createList(expense.id, expense.Description, expense.Expence, expense.Chatagorie)
    })

})






addBtn.addEventListener('click', async (e) => {
    e.preventDefault;

    let desc = document.querySelector("#id_description").value
    let expe = document.querySelector("#id_expence").value
    let chat = document.querySelector("#id_chatagorie").value

    if (chat == "Select" || desc == "" || expe == "") { alert('Fill The Input Areas'); return }


    let NewObj = {
        "Description": desc,
        "Expence": expe,
        "Chatagorie": chat
    }

    const { data: response } = await axios.post("http://localhost:5000/addExpense", NewObj)





    createList(response.id, response.Description, response.Expence, response.Chatagorie)


});






function createList(id, desc, expe, chat) {
    let newList = document.createElement('div')
    newList.classList.add('list_container_child')

    let newDesc = divspan(desc)
    let newExpe = divspan(expe)
    let newChat = divspan(chat)


    let newBtnDiv = document.createElement('div')
    newBtnDiv.classList.add("btn-group", "gap-1")

    let newBtn1 = document.createElement('button')
    newBtn1.classList.add("btn", "btn-sm", "btn-secondary", "edit_btn")
    newBtn1.textContent = "EDIT"

    let newBtn2 = document.createElement('button')
    newBtn2.classList.add("btn", "btn-sm", "btn-danger", "del_btn")
    newBtn2.textContent = "X"

    newBtnDiv.appendChild(newBtn1)
    newBtnDiv.appendChild(newBtn2)

    newBtnDiv.id = id

    newList.appendChild(newDesc)
    newList.appendChild(newExpe)
    newList.appendChild(newChat)
    newList.appendChild(newBtnDiv)


    list_container.append(newList)


    function divspan(value) {

        let newSpan = document.createElement('span')
        newSpan.textContent = value

        let newDiv = document.createElement('div')
        newDiv.append(newSpan)

        return newDiv
    }
    document.querySelector("#id_description").value = ""
    document.querySelector("#id_expence").value = ""
    chat = document.querySelector("#id_chatagorie").value = "Select"

}



document.querySelector(".list_container").addEventListener('click', async (e) => {
    if (e.target.classList.contains("edit_btn")) {
        if (confirm("Do You Wanna Edit This?") == true) {

            let targetId = e.target.parentElement.id
            let targetDesc = e.target.parentElement.parentElement.children[0].children[0].innerText
            let targetExp = e.target.parentElement.parentElement.children[1].children[0].innerText
            let targetChat = e.target.parentElement.parentElement.children[2].children[0].innerText


            document.querySelector("#id_description").value = targetDesc
            document.querySelector("#id_expence").value = targetExp
            document.querySelector("#id_chatagorie").value = targetChat

            if (document.querySelector("#id_chatagorie").value == "Select" || document.querySelector("#id_description").value == "" || document.querySelector("#id_expence").value == "") { alert('Fill The Input Areas'); return }

            await axios.post("http://localhost:5000/deleteExpense", { id: targetId })

            e.target.parentElement.parentElement.remove()
        }
    }
})



document.querySelector(".list_container").addEventListener('click', async (e) => {
    if (e.target.classList.contains("del_btn")) {
        let targetId = e.target.parentElement.id
        await axios.post("http://localhost:5000/deleteExpense", { id: targetId })
        e.target.parentElement.parentElement.remove()
    }
})