
function init() {
    getDataFromLocalstorage();
    renderBookCards();
}

function renderBookCards() {
    const bookCardRef = document.getElementById('bookCards');

    bookCardRef.innerHTML = "";
    for ( indexBookList = 0; indexBookList < booksLibrary.length; indexBookList++) {
        bookCardRef.innerHTML += setBookCards(indexBookList);
    }
}

function getComments(indexBookList) {
    let commentsRef = "";
    const commentsList = booksLibrary[indexBookList].comments;
    
    if (commentsList.length === 0) {
        return "<p>Noch keine Kommentare vorhanden.</p>";
    }
    for (let indexCommentList = 0; indexCommentList < commentsList.length; indexCommentList++) {
        commentsRef += setComments(indexCommentList);
    }
    return commentsRef;
}

function showFavorit() {
    const bookCardRef = document.getElementById('bookCards');
    bookCardRef.innerHTML = "";

    for (let indexBookList = 0; indexBookList < booksLibrary.length; indexBookList++) {
        if (booksLibrary[indexBookList].favorit) {
            bookCardRef.innerHTML += setBookCards(indexBookList);
        }
    }
}

function showNotFavorit() {
    const bookCardRef = document.getElementById('bookCards');
    bookCardRef.innerHTML = "";

    for (let indexBookList = 0; indexBookList < booksLibrary.length; indexBookList++) {
        if (!booksLibrary[indexBookList].favorit) {
            bookCardRef.innerHTML += setBookCards(indexBookList);
        }
    }
}

function toggleLikes(i) {
    if (booksLibrary[i].liked) {
        booksLibrary[i].likes--;
        booksLibrary[i].liked = false;
    } else {
        booksLibrary[i].likes++;
        booksLibrary[i].liked = true;
    }
    saveDataToLocalStorage();
    renderBookCards();
}

function toggleFavorit(i) {
    if (booksLibrary[i].favorit) {
        booksLibrary[i].favorit = false;
    } else {
        booksLibrary[i].favorit = true;
    }
    saveDataToLocalStorage();
    renderBookCards();
}

function addComment(i) {
    let commentNameRef = document.getElementById(`name_input${i}`);
    let commentTextRef = document.getElementById(`text_input${i}`);
    let nameInput = commentNameRef.value;
    let textInput = commentTextRef.value;
    if (nameInput != "" && textInput != "") {
        booksLibrary[i].comments.push({
            "name" : nameInput,
            "comment" : textInput
        });
        commentNameRef.value = "";
        commentTextRef.value = "";
    }
    saveDataToLocalStorage();
    renderBookCards();
}

function saveDataToLocalStorage() {
    localStorage.setItem("bookData", JSON.stringify(booksLibrary));
}

function getDataFromLocalstorage() {
    let booksLibraryData = localStorage.getItem("bookData");
    if (booksLibraryData === null) {
        return booksLibrary;
    }else {
        booksLibrary = JSON.parse(booksLibraryData);
    }
}
