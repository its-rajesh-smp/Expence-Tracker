var addBtn=document.querySelector("#id_add")

var list_container=document.querySelector(".list_container")




window.addEventListener('load',()=>{
    let CollectList= Object.keys(localStorage)
    CollectList.forEach((keys)=>{
        let grabItem=localStorage.getItem(keys)
        let Parsh=JSON.parse(grabItem)
        
        createList(Parsh.Description,Parsh.Expence,Parsh.Chatagorie)
    })

})






addBtn.addEventListener('click',(e)=>{
    e.preventDefault;

    let desc=document.querySelector("#id_description").value
    let expe=document.querySelector("#id_expence").value
    let chat=document.querySelector("#id_chatagorie").value
    
    if(chat=="Select" || desc=="" || expe==""){alert('Fill The Input Areas'); return}

    // Local Storage
    if(localStorage.getItem(desc)!=null){alert("Already Present");return}
    // Create Object To Push in local Storage
    
    let NewObj={
        "Description":desc,
        "Expence":expe,
        "Chatagorie":chat
    }
    
    localStorage.setItem(desc,JSON.stringify(NewObj))
    createList(desc,expe,chat)

    
});






function createList(desc,expe,chat){
    let newList=document.createElement('div')
    newList.classList.add('list_container_child')

    let newDesc=divspan(desc)
    let newExpe=divspan(expe)
    let newChat=divspan(chat)


    let newBtnDiv=document.createElement('div')
    newBtnDiv.classList.add("btn-group","gap-1")

    let newBtn1=document.createElement('button')
    newBtn1.classList.add("btn", "btn-primary","edit_btn")
    newBtn1.textContent="EDIT"

    let newBtn2=document.createElement('button')
    newBtn2.classList.add("btn", "btn-primary","del_btn")
    newBtn2.textContent="X"

    newBtnDiv.appendChild(newBtn1)
    newBtnDiv.appendChild(newBtn2)

    newList.appendChild(newDesc)
    newList.appendChild(newExpe)
    newList.appendChild(newChat)
    newList.appendChild(newBtnDiv)


    list_container.append(newList)


    function divspan(value){
        
        let newSpan=document.createElement('span')
        newSpan.textContent=value

        let newDiv=document.createElement('div')
        newDiv.append(newSpan)

        return newDiv
    }
    document.querySelector("#id_description").value=""
    document.querySelector("#id_expence").value=""
    chat=document.querySelector("#id_chatagorie").value="Select"
    
}



document.querySelector(".list_container").addEventListener('click',(e)=>{
    if(e.target.classList.contains("edit_btn")){
        if(confirm("Do You Wanna Edit This?")==true){

            let targetDesc=e.target.parentElement.parentElement.children[0].children[0].innerText
            let targetExp=e.target.parentElement.parentElement.children[1].children[0].innerText
            let targetChat=e.target.parentElement.parentElement.children[2].children[0].innerText
            
            
            document.querySelector("#id_description").value=targetDesc
            document.querySelector("#id_expence").value=targetExp
            document.querySelector("#id_chatagorie").value=targetChat
            
            if(document.querySelector("#id_chatagorie").value=="Select" || document.querySelector("#id_description").value=="" || document.querySelector("#id_expence").value==""){alert('Fill The Input Areas'); return}

            localStorage.removeItem(targetDesc)
            e.target.parentElement.parentElement.remove()
        }
    }
})



document.querySelector(".list_container").addEventListener('click',(e)=>{
    if(e.target.classList.contains("del_btn")){
        let RemoveItem=e.target.parentElement.parentElement.children[0].children[0].innerText
        localStorage.removeItem(RemoveItem)
        e.target.parentElement.parentElement.remove()
    }
})