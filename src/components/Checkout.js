import React from 'react';
import { useState, useEffect } from 'react';
import BookListItem from './BookListItem';

class Checkout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: this.props.books,
            book: undefined,
            isbn: '',
            title: ''
        }
    }
    handleClick(state, setState){
        console.log(state)
        let newBook;
        if (Array.isArray(state.books)) {
            newBook = state.books.filter(item=>{
                return item.isbn === state.isbn || item.title === state.title
            })
            console.log(newBook)
            setState({
                books: state.books,
                book: newBook,
                isbn: state.isbn,
                title: state.title
            })
        }
        
    }
    render(){
        return (
            <div>
                <p>Book ISBN: </p>
                <input value={this.state.isbn} onChange={(event)=>{this.setState({book: this.state.book, isbn: event.target.value, title: this.state.title})}}></input>
                <p>Or Book Title: </p>
                <input value={this.state.title} onChange={(event)=>{this.setState({book: this.state.book, isbn: this.state.isbn, title: event.target.value})}}></input><br></br><br></br>
                <button onClick={() => {
                    this.handleClick(this.state, this.setState)
                }}>Search</button>
                {this.state.book === undefined ? <p>No Book Selected</p> : <BookListItem book={this.state.book}/>}
            </div>
        );
    }
}

export default Checkout;