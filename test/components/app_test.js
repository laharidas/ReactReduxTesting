import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

let component = renderComponent(App)
//use describe for similar tests
describe('App', () => {
   it('shows correct text content', () => {
       expect(component).to.have.text('React simple starter')
   })
})
