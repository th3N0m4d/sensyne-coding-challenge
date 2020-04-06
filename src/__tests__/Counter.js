import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Button from '@material-ui/core/Button'

import Counter from '../pages/questionOne/Counter'

const expectToMatchSnapshot = component => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('Counter', () => {
  it('should render component', () => {
    expectToMatchSnapshot(<Counter />)
  })

  it('should render component with initial count of 7', () => {
    expectToMatchSnapshot(<Counter count={7} />)
  })

  it('should trigger onClick', () => {
    const onClickSpy = jest.fn()
    const wrapper = shallow(<Counter onClick={onClickSpy} />)

    const button = wrapper.find(Button)

    button.simulate('click')

    expect(onClickSpy).toHaveBeenCalled()
  })
})
