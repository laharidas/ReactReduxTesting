import React, { Component } from 'react'

export default class CommentBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({comment: event.target.value})
  }

  handleSubmit(event) {
   event.preventDefault
   this.setState({comment: ''})
  }

  render(){
    return(
      <form className='comment-box' onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange}
          className='comment-area'
          value={this.state.comment}>
        </textarea>
        <button>Submit</button>
      </form>
    )
  }
}
