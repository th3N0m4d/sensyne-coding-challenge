import React from 'react'
import renderer from 'react-test-renderer'
import Profile from '../pages/questionThree/Profile'
import Android from '@material-ui/icons/Android'

const expectToMatchSnapshot = component => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('Profile', () => {
  it('should render component', () => {
    expectToMatchSnapshot(<Profile />)
  })

  it('should render name', () => {
    expectToMatchSnapshot(<Profile name='Sponge Bob' />)
  })

  it('should render description', () => {
    expectToMatchSnapshot(<Profile description='Lives in Bikini Bottom' />)
  })

  it('should render Icon', () => {
    expectToMatchSnapshot(<Profile Icon={Android} />)
  })

  it('should render id', () => {
    expectToMatchSnapshot(<Profile id='1234' />)
  })

  it('should render species', () => {
    expectToMatchSnapshot(<Profile species='Cartoon character' />)
  })
})
