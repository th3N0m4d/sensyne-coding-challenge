import React from 'react'
import renderer from 'react-test-renderer'
import ProfileList from '../pages/questionThree/ProfileList'

const expectToMatchSnapshot = component => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('ProfileList', () => {
  it('should render component', () => {
    expectToMatchSnapshot(<ProfileList />)
  })

  it('should render two items', () => {
    const items = [
      { id: '1', name: 'Sponge Bob' },
      { id: '2', name: 'Patryk Star' }
    ]
    expectToMatchSnapshot(<ProfileList items={items} />)
  })
})
