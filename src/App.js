import React, { Component } from 'react';
import config from './config';
import BookList from './BookList/BookList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null,
      Filter: null
    };

    // This binding is necessary to make `this` work in the callback
    this.handleOptions = this.handleOptions.bind(this);
  }

  setBooks = books => {
    this.setState({
      books: books
    })
  }
  setFilter = type => {
    this.setState({
      Filter: type
    })
  }
  constructUrl = (term) => {
    let baseUrl = config.API_ENDPOINT + term + '&key=' + config.API_KEY;
    console.log(baseUrl);
    this.state.Filter === 'full' && baseUrl += '&Filter=full';
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
  handleOptions(e) {
    const { value } = e.target
    this.setFilter(value)
    console.log(value)
  }
  render() {
    return (
      <main className='App'>
        <form onSubmit={this.handleSearch}>
          <label htmlFor='term'>Search with a term</label>
          <input name='term' id='term' />

          <label htmlFor='full'>Filter for full text</label>
          <select onChange={this.handleOptions}>
            <option value='all'>any</option>
            <option value='full'>full</option>
          </select>
          <button type='submit'>
            Search
          </button>
        </form>
        <div>
          <BookList books={this.state.books} />
        </div>
      </main>
    );
  }
}

export default App;