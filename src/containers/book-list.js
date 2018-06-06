import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned here will show up
    // as PROPS inside BookList
    return {
      books: state.books
    };
  }
  
// this promotes the BookList to a container by using the 
// redux "connect" function   
export default connect(mapStateToProps)(BookList);