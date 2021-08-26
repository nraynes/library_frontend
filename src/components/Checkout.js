import React from 'react';
import BookListItem from './BookListItem';

class Checkout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: undefined,
            book: undefined,
            isbn: '',
            title: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        console.log(this.props.books)
        this.setState({
            books: this.props.books,
            book: undefined,
            isbn: '',
            title: ''
        })
        console.log(this.state)
    }
    handleClick(){
        let newBook = this.state.books.filter(item=>{
            return item.isbn === this.state.isbn || item.title === this.state.title;
        })
        this.setState({
            books: this.state.books,
            book: newBook,
            isbn: this.state.isbn,
            title: this.state.title
        })
        console.log(this.state)
    }
    render(){
        return (
            <div>
                <p>Book ISBN: </p>
                <input value={this.state.isbn} onChange={(event)=>{this.setState({book: this.state.book, isbn: event.target.value, title: this.state.title})}}></input>
                <p>Or Book Title: </p>
                <input value={this.state.title} onChange={(event)=>{this.setState({book: this.state.book, isbn: this.state.isbn, title: event.target.value})}}></input><br></br><br></br>
                <button onClick={this.handleClick}>Search</button>
                {this.state.book === undefined ? <p>No Book Found</p> : <BookListItem book={this.state.book}/>}
            </div>
        );
    }
}

export default Checkout;