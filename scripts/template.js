

function setBookCards(indexBookList) {
    return `
    <section class="bookCard">
    <section class="titles_authors">
        <img src="${booksLibrary[indexBookList].path}" alt="Buchcover Harry Potter">
        <h2 class="bookTitles">${booksLibrary[indexBookList].name}</h2>
        <p class="bookAuthors">${booksLibrary[indexBookList].author} (Author)</p>
        <div>
            <p class="bookYear">${booksLibrary[indexBookList].publishedYear}</p>
            <p class="bookGenre">${booksLibrary[indexBookList].genre}</p>
        </div>
    </section>
    <section class="price_react">
        <h3 class="price">${booksLibrary[indexBookList].price} €</h3>
        <div class="react">
            <p><img onclick=" toggleLikes()" id="likes${indexBookList}" src="./assets/icons/herz.svg" alt="">${booksLibrary[indexBookList].likes}</p>
            <p><img onclick="" id="favorit${indexBookList}" src="./assets/icons/stern2.svg" alt=""></p>
        </div>
    </section>
    <section class="commits">
        <div class="textOutput" id="comment${indexBookList}">
                    ${getComments(indexBookList)}
                </div>
        <section class="readInput">
            <input type="text" placeholder="Hier Kommentar schreiben">
            <button onclick="SendComment">Senden</button>
        </section>
    </section>
</section>`;
}
