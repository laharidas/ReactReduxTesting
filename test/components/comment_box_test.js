import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  beforeEach
    let component
    component = renderComponent(CommentBox)

  it('has right class', () => {
    expect(component).to.have.class('comment-box')
  })

  it('has text area', () => {
    expect(component.find('textarea')).to.exists
  })

  it('has a button', () => {
    expect(component.find('button')).to.exists
  })

})
