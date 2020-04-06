import React from 'react'
import renderer from 'react-test-renderer'

import AnimalBio from '../pages/questionTwo/AnimalBio'

const expectToMatchSnapshot = component => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('AnimalBio', () => {
  it('should render component', () => {
    expectToMatchSnapshot(<AnimalBio />)
  })

  it('should render component with title', () => {
    expectToMatchSnapshot(<AnimalBio title='Hello there!' />)
  })

  it('should render component with body', () => {
    const body = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.      
      `

    expectToMatchSnapshot(<AnimalBio body={body} />)
  })

  it('should render image', () => {
    const imgSrc = 'data:image/png;base64'

    expectToMatchSnapshot(<AnimalBio imgSrc={imgSrc} />)
  })
})
