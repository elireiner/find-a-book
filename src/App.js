import React, { Component } from 'react';
import config from './config';
import BookList from './BookList/BookList'

class App extends Component {
  state = {
    books: [],
    error: null
  }
  setBooks = books => {
    this.setState({
      books: books
    })
  }
  constructUrl = (term) => {
    const baseUrl = config.API_ENDPOINT + term + '&key=' + config.API_KEY;
    console.log(baseUrl)
    return baseUrl

  }
  handleSearch = e => {
    e.preventDefault()
    const { term } = e.target
    fetch(this.constructUrl(term.value), {
      method: 'GET'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(resJson => this.setBooks(resJson.items))
      .catch(error => console.log(error))

  }
  render() {
    return (
      <main className='App'>
        <form
          onSubmit={this.handleSearch}
        >
          <input
            name='term' />
          <button
            type='submit'
          >Search</button>
        </form>
        <div>
          <BookList books={this.state.books} />
        </div>
      </main>
    );
  }
}

export default App;