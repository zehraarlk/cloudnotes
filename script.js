const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quote");

const noteInput = document.getElementById("noteInput");
const saveNoteBtn = document.getElementById("saveNote");
const noteList = document.getElementById("noteList");

// STATELESS – API KEY KULLANIMI
quoteBtn.addEventListener("click", () => {
    fetch("https://quotes.rest/qod", {
        headers: {
            "X-Api-Key: 5Ff9ZkXw4Y8Lh9DemoKey123"
        }
    })
    .then(res => res.json())
    .then(data => {
        quoteText.innerText = data.contents.quotes[0].quote;
    })
    .catch(() => {
        quoteText.innerText = "Motivasyon alınamadı.";
    });
});

// STATEFUL – LOCALSTORAGE
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    noteList.innerHTML = "";
    notes.forEach(note => {
        const li = document.createElement("li");
        li.innerText = note;
        noteList.appendChild(li);
    });
}

saveNoteBtn.addEventListener("click", () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    loadNotes();
});

window.onload = loadNotes;
