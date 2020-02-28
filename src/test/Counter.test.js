import React from 'react'
import { shallow } from 'enzyme'

import Counter from '../components/Counter'

let wrapper = undefined

describe('Counter tests', () => {
    beforeEach(() => {
        wrapper = shallow(<Counter />)
    })

    it('should increment the counter when the button is clicked', () => {
        const counterButton = wrapper.find('button')
        counterButton.simulate('click')
        const counterState = wrapper.state().counter
        expect(counterState).toBe(1)
    });
})
