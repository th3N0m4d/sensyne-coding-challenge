import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

const expectToMatchSnapshot = component => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('App', () => {
  it('should render component', () => {
    expectToMatchSnapshot(<App />)
  })
})
