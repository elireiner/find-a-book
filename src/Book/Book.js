import React, { Component } from 'react';

export default class Book extends Component {

    render() {
        return (
            <li>
                <h1>{this.props.volumeInfo.title}</h1>
                <p>{this.props.volumeInfo.subtitle}</p>
                <ul>
                    {Array.isArray(this.props.volumeInfo.authors) &&
                        this.props.volumeInfo.authors.map(author => <li>{author}</li>)}
                </ul>
            </li>
        )
    }
}