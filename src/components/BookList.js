import React from 'react';
import BookListItem from './BookListItem';

function BookList() {

    var items = [];
    items.push(<BookListItem />);
    items.push(<BookListItem />);
    items.push(<BookListItem />);

    return (<div className="book_list">{items}</div>);

}

export default BookList;