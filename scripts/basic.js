let indexBookList;

function init() {
    renderBookCards()
}

function renderBookCards() {
    let bookCardRef = document.getElementById('bookCards');

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

function toggleLikes(i) {
    if (booksLibrary[i].liked) {
        booksLibrary[i].likes--;
        booksLibrary[i].liked = false;
    } else {
        booksLibrary[i].likes++;
        booksLibrary[i].liked = true;
    }
    renderBookCards();
}

function togglefavorit(id) {
    document.getElementById(`favorit${id}`).classList.toggle("aktivFavorit");
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
    renderBookCards()
}


