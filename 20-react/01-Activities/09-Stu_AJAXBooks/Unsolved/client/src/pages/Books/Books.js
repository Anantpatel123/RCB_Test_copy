import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  handleInputChange = event => {
    event.preventDefault();

    const{name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  //create a new book when click submit button
  handleFormSubmit = event => {
    event.preventDefault();
    // alert("button working");

    const newBook = {
      title:this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis
    };    
    API.saveBook(newBook)
    .then(() => {
      this.loadBooks();
    });
  }

  loadBooks = () => {
    API.getBooks()
      .then(results => {
        this.setState({
          books: results.data,
          title: "",
          author: "",
          synopsis: ""
        });
      })
      .catch(err => console.log("Error*************", err));
  }

  //create a new book when click submit button
  handleDeleteBook = (anything) => {
    // event.preventDefault();// dont need. Only need it when submitting something.
    // alert("button working");   
    
    API.deleteBook(anything)
      .then((results) => {
        this.loadBooks();
    });
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input onChange={this.handleInputChange} name="title" value ={this.state.title} placeholder="Title (required)" />
              <Input onChange={this.handleInputChange} name="author" value ={this.state.author} placeholder="Author (required)" />
              <TextArea onChange={this.handleInputChange} name="synopsis" value ={this.state.synopsis} placeholder="Synopsis (Optional)" />
              <FormBtn onClick={this.handleFormSubmit} >Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.handleDeleteBook(book._id)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
