import React from 'react';
import BookListItem from './BookListItem';

function BookList(props) {

    var items = [];
    /*
    items.push(<BookListItem />);
    items.push(<BookListItem />);
    items.push(<BookListItem />);
    */

    for(let i in props.books) {
        items.push(<BookListItem book={props.books[i]} />);
    }

    return (<div className="book_list">{items}</div>);

}

export default BookList;