import { closeCancelBtn, escapeKey } from "./general.js";

export const inputNotesModal = {
    outputNotes: "",
    render: () => {
        if (document.querySelector(".notes-modal") !== null){
            document.querySelector(".notes-modal").classList.remove("inactive")
        } else {
            inputNotesModal.outputNotes = "";
            let modal = document.querySelector(".modal");
            let template = document.getElementById("notes-modal-template")
            let div = template.content.cloneNode(true);
            div.querySelector(".add-notes-btn").addEventListener("click", inputNotesModal.notesAdded)
            modal.appendChild(div);
            closeCancelBtn();
        }
        
    },
    notesAdded: ev => {
        ev.preventDefault();
        ev.stopPropagation();
        let notes = document.querySelector("textarea").value
        inputNotesModal.outputNotes = notes;
        let notesModal = document.querySelector(".notes-modal");
        notesModal.classList.add("inactive");
    }
}