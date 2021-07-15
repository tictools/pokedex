import * as React from 'react'
import { shallow } from 'enzyme'
import { createEnzymeAdapter } from '../../../test/enzyme-adapter'
import { App } from '../App'

createEnzymeAdapter()

describe('App', () => {
  test('should work', () => {
    const element = shallow(<App />)
    expect(element).toBeDefined()
  })
})
