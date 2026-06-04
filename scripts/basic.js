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

function toggleLikes(id) {
    document.getElementById(id).classList.toggle("aktivLikes");
}

function toggleLiked(id) {
    document.getElementById(id).classList.toggle("aktivLiked");
}


