function setBookCards(indexBookList, statusLikeClass, statusFavoritClass) {
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
            <p><img class="${statusLikeClass}" onclick=" toggleLikes('${indexBookList}')" id="likes${indexBookList}" src="./assets/icons/herz.svg" alt="Like"><span>${booksLibrary[indexBookList].likes}</span></p>
            <p><img class="${statusFavoritClass}" onclick=" toggleFavorit('${indexBookList}')" id="favorit${indexBookList}" src="./assets/icons/stern2.svg" alt=""></p>
        </div>
    </section>
    <section class="commits">
        <div class="textOutput" id="comment${indexBookList}">
                    ${getComments(indexBookList)}
                </div>
        <section class="readInput">
            <input aria-label="Eingabefeld für Name" id="name_input${indexBookList}" type="text" placeholder="Hier Name schreiben">
            <input aria-label="Eingabefeld für den Kommentar" id="text_input${indexBookList}" type="text" placeholder="Hier Kommentar schreiben">
            <button aria-label="Nachricht senden" onclick="addComment('${indexBookList}')">Senden</button>
        </section>
    </section>
</section>`;
}

function setComments(indexCommentList, indexBookList) {
    return `
            <p>
                <strong>${booksLibrary[indexBookList].comments[indexCommentList].name}</strong>: <br>
                ${booksLibrary[indexBookList].comments[indexCommentList].comment}
            </p> <br>
        `;
}
