// Get and show the book details
function getBookDetails(book) {
    fetch(`http://localhost:3000/books/${book}`)
    .then(response => response.json())
    .then(book => {
        const showPanel = document.getElementById("show-panel");
        showPanel.innerHTML = "";
        
        // Show the basic data for the book
        const h1 = document.createElement("h1");
        h1.textContent = book.title;
        const h21 = document.createElement("h2");
        h21.textContent = book.subtitle;
        const h22 = document.createElement("h2");
        h22.textContent = book.author;
        const img = document.createElement("img");
        img.src = book.img_url;

        // Create a list with the user names who have liked the book
        const likesList = document.createElement("ul");
        for (user of book.users) {
            const li = document.createElement("li");
            li.textContent = user.username;
            likesList.appendChild(li);
        }

        showPanel.appendChild(h1);
        showPanel.appendChild(h21);
        showPanel.appendChild(h22);
        showPanel.appendChild(img);
        showPanel.appendChild(likesList);

        // Button to like the book
        btn = document.createElement("button");
        btn.textContent = "Like";
        btn.addEventListener("click", () => {alert("Ooops! I do not work yet, sorry! :(")});
        showPanel.appendChild(btn);
    });
}

const init = () => {
    const list = document.getElementById("list");

    // Get the book list
    fetch("http://localhost:3000/books")
        .then(response => response.json())
        .then(bookList => {
            for (book of bookList) {
                const li = document.createElement("li");
                li.classList.add("book-on-list");
                li.textContent = book.title;
                li.dataset.id = book.id;
                li.addEventListener("click", (e) => getBookDetails(e.target.dataset.id));
                list.appendChild(li);
            }
        });
}

document.addEventListener("DOMContentLoaded", init);
