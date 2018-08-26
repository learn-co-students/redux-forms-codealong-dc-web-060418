import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  state = {text: ''}

  handleOnChange = (e) =>{ this.setState({text: e.target.value})}
  handleOnSubmit = (e) =>{
    e.preventDefault();
    this.props.addToDo(this.state)

  }
  render() {
    return(
      <div>
       <form onSubmit={this.handleOnSubmit}>
         <p>
           <label>add todo</label>
           <input type="text" value={this.state.text} onChange={this.handleOnChange} />
          </p>
          
          <input type="submit" />
           </form>

      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
return {addToDo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})}
}
export default connect(null, mapDispatchToProps)(CreateTodo);
