import React, {useState, useEffect, useRef} from 'react';
import BookListItem from './BookListItem';

function Checkout (props) {

    const [book, setBook] = useState({})
    const strISBN = useRef()
    function getBook(bookId) {
        fetch(`http://localhost:1000/api/books/${bookId}`)
            .then(data => data.json())
            .then((data) => {
                if (data[0]) {
                    setBook(data[0]);
                }
            })
    }
        
    return (
        <div style={{margin: '18px 0px'}}>
            <p>Book ISBN: </p>
            <input ref={strISBN}></input><br></br><br></br>
            <button onClick={() => {
                getBook(strISBN.current.value)
            }}>Search</button>
            {book === {} ? <p>No Book Selected</p> : <BookListItem user_id={props.user_id} book={book} setBooks={props.setBooks}/>}
        </div>
    );
}

export default Checkout;