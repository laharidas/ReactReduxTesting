import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'


describe('App', () => {
   it('shows CommentBox component', () => {
      const component = renderComponent(App)
    expect(component).to.have.class('comment-container')
   })
})
