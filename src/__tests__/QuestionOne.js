import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Button from '@material-ui/core/Button'

import QuestionOne from '../pages/questionOne/questionOne'

const expectToMatchSnapshot = component => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('QuestionOne', () => {
  it('should render component', () => {
    expectToMatchSnapshot(<QuestionOne />)
  })

  it('should trigger onClick', () => {
    const onClickSpy = jest.fn()
    const wrapper = shallow(<QuestionOne onClick={onClickSpy} />)

    const button = wrapper.find(Button)

    button.simulate('click')

    expect(onClickSpy).toHaveBeenCalled()
  })
})
