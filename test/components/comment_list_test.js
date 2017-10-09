import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {
  let component
  const props = {
    comments: [
      'First Line',
      'Second Line'
    ]
  }
  beforeEach(() => {
    component = renderComponent(CommentList, null, props)
  })

  it('has list display area', () => {
  expect(component).to.have.class('list-container')
  })

  it('has expected number of elements', () => {
    expect(component.find('li').length).to.equal(2)
  })

  it('has expected number of elements', () => {
  expect(component).to.contain('First Line')
  expect(component).to.contain('Second Line')
  })
})
