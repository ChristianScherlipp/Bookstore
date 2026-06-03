let indexBookList;
function init() {
    renderBookCards()
    getCommentsIds()
}


function renderBookCards() {
    let bookCardRef = document.getElementById('bookCards');
    
    bookCardRef.innerHTML = "";
    const bookLibraryComments = booksLibrary[0];

    for ( indexBookList = 0; indexBookList < booksLibrary.length; indexBookList++) {
        bookCardRef.innerHTML += setBookCards(indexBookList);
    }
    
    
}


function getComments(indexBookList) {
    let commentsRef = "";
    const comments = booksLibrary[indexBookList].comments;
    if (comments.length === 0) {
        return "<p>Noch keine Kommentare vorhanden.</p>";
    }
    for (let i = 0; i < comments.length; i++) {
        commentsRef += `
            <p>
                <strong>${comments[i].name}</strong>: <br>
                ${comments[i].comment}
            </p> <br>
        `;
    }
    return commentsRef;
}


