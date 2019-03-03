import React, { Component } from 'react';
import Hotelcard from "../Hotelcard";
import Store from "../../store";

const data = Store.getState();
console.log({ data });

class Search extends Component {
  state = {
    query: '',
    results: data
  }



  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
        //   this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
        <div>
      <form>
        <input
          className="mt-4 w-50 p-2"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
      <Hotelcard data={this.state.results} />
      </div>
    )
  }
}

export default Search
