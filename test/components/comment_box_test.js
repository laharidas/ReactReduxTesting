import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let component
  beforeEach(() => {
    component = renderComponent(CommentBox)
  })

  it('has right class', () => {
    expect(component).to.have.class('comment-box')
  })

  it('has right text area class', () => {
    expect(component.find('textarea')).to.have.class('comment-area')
  })

  it('has text area', () => {
    expect(component.find('textarea')).to.exist
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist
  })

  describe('entering some text', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'Comment One')
    })

    it('has shows text entered', () => {
      expect(component.find('textarea')).to.have.value('Comment One')
    })

    it('has clears when submit button pressed', () => {
      component.simulate('submit')
      expect(component.find('textarea')).to.have.value('')
    })
  })

})
