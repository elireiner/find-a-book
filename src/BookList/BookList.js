import React, { Component } from 'react';
import Book from '../Book/Book'

export default class BookList extends Component {
    render() {
        const bookList = this.props.books.map(book => <Book volumeInfo={book.volumeInfo} />)
        return (
            <ul>
                {bookList}
            </ul>


        )
    }
}