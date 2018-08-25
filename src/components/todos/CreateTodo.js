import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => {
      dispatch({type: "ADD_TODO", payload: todo})
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
