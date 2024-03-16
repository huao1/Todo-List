import "./index.css"
import check from "./image/check.png"
import trash from "./image/trash.png"
import edit from "./image/edit.png"
import emptyBox from "./image/blank-check-box.png"

const logo = document.querySelector("#logo")
logo.setAttribute('src', check)

const trashIcon = document.querySelector(".trash")
trashIcon.setAttribute('src', trash)

const editIcon = document.querySelector(".edit")
editIcon.setAttribute('src', edit)

const empty = document.querySelector(".empty")
empty.setAttribute('src', emptyBox) 

console.log("This works")