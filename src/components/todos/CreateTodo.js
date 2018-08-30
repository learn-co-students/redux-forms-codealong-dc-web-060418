import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    todo:''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.dispatch({type:'ADD_TODO', todo: this.state})
  }
  handleChange = e =>{
    this.setState({todo: e.target.value})
  }
  render() {
    return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <p>
          <label> add todo</label>
          <input type="text" onChange={this.handleChange}/>
        </p>
          <input type="submit" />
      </form>
    </div>
    )
  }
}

export default connect()(CreateTodo);
