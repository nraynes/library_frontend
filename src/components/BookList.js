import React from 'react';
import BookListItem from './BookListItem';

function BookList(props) {

    var items = [];

    for(let i in props.books) {
        items.push(<BookListItem key={i} book={props.books[i]} />);
    }

    return (<div className="book_list">{items}</div>);

}

export default BookList;