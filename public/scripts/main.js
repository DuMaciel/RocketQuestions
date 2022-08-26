import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll(".actions a.check")
checkButtons.forEach(button =>{
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()

    const form = document.querySelector(".modal form")

    const roomId = document.querySelector("#room-id").dataset.id
    const slug = check ? "check" : "delete"

    const questionId = event.target.dataset.id

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = check ? "Marcar como lido": "Excluir"
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida esta pergunta?" : "Tem certeza que deseja excluir esta pergunta?"
    modalButton.innerHTML = check ? "Sim, marcar" : "Sim, excluir"
    check ? modalButton.classList.remove("red") :  modalButton.classList.add("red") 
    modal.open()
}