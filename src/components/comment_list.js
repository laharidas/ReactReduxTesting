import React from 'react'
import { connect } from 'react-redux'


const CommentList = (props) => {
  const list = props.comments.map((comment) => <li key={comment}>{comment}</li>)
  return(
    <ul className='list-container'>
      {list}
    </ul>
  )
}

function mapStateToProps(state){
  return {comments: state.comments}
}
export default connect(mapStateToProps)(CommentList)
