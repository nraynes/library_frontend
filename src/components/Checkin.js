import React, {useState, useEffect } from 'react';
import BookListItem from './BookListItem';

function Checkin () {
    const [book, setBook] = useState({})
    
    return (
        <div>
            <p>Book ISBN: </p>
            <input value={this.state.isbn} onChange={(event)=>{this.setState({book: this.state.book, isbn: event.target.value, title: this.state.title})}}></input>
            <p>Or Book Title: </p>
            <input value={this.state.title} onChange={(event)=>{this.setState({book: this.state.book, isbn: this.state.isbn, title: event.target.value})}}></input><br></br><br></br>
            <button onClick={() => {
                this.handleClick(this.state, this.setState)
            }}>Search</button>
            {this.state.book.selection === 'No Selection' ? <p>No Book Selected</p> : <BookListItem book={this.state.book}/>}
        </div>
    );

}

export default Checkin;