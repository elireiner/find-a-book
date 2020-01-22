import React, { Component } from 'react';

export default class Book extends Component {
    
    render() {
        return (
            <li>
                <h1>{this.props.volumeInfo.title}</h1>
                <p>{this.props.volumeInfo.subtitle}</p>
                {//Array.isArray(this.props.volumeInfo.authors) && console.log('hi')
                this.props.volumeInfo.authors.map(author => <p>{author}</p>)
                }
           </li>
        )
    }
}