import React from 'react';
import { shallow } from 'enzyme'

import NavigationBar from '../components/NavigationBar'

let navBarComponent = null
let wrapper = null

beforeEach(() => {
    // Arrange - create props and locate elements
    navBarComponent = (<NavigationBar />)
    wrapper = shallow(navBarComponent)
})

describe('Navigation Bar DOM tests', () => {
    it('Should render 4 options in the navigation bar', () => {
		// Act - simulate changes to elements
		// Not apply
		// Assert - check whether the desired functions were called
        const numberListElements = wrapper.find('li').length
        expect(numberListElements).toBe(4)
    })

    it('Should render 2 anchors', () => {
		// Act - simulate changes to elements
		// Not apply
		// Assert - check whether the desired functions were called
        const numberAnchors = wrapper.find('a').length
        expect(numberAnchors).toBe(2)
    })

    it('Should render "Nav Item #1" in the first anchor', () => {
        // Act - simulate changes to elements
		// Not apply
		// Assert - check whether the desired functions were called
        const firstAnchor = wrapper.find('a').first()
        const anchorText = firstAnchor.text()
        expect(anchorText).toBe('Nav Item #1')
    })

    it('Should render "Nav Item #2" in the second anchor', () => {
        // Act - simulate changes to elements
		// Not apply
		// Assert - check whether the desired functions were called
        const secondAnchor = wrapper.find('a').last()
        const anchorText = secondAnchor.text()
        expect(anchorText).toBe('Nav Item #2')
    })

    it('Should render two buttons', () => {
		// Act - simulate changes to elements
		// Not apply
		// Assert - check whether the desired functions were called
        const buttonNumber = wrapper.find('button').length
        expect(buttonNumber).toBe(2)
    })

    it('Should render label "Nav Button #1" for the first button', () => {
        // Act - simulate changes to elements
		// Not apply
        // Assert - check whether the desired functions were called
        const firstButton = wrapper.find('button').first()
        const buttonText = firstButton.text()
        expect(buttonText).toBe('Nav Button #1')
    })

    it('Should render label "Nav Button #2" for the second button', () => {
        // Act - simulate changes to elements
		// Not apply
        // Assert - check whether the desired functions were called
        const secondButton = wrapper.find('button').last()
        const buttonText = secondButton.text()
        expect(buttonText).toBe('Nav Button #2')
    })

    it('Should have background color as #2F2D46', () => {
        // Act - simulate changes to elements
		// Not apply
        // Assert - check whether the desired functions were called
        const navBarContainer = wrapper.get(0)
        const navBarContainerStyle = navBarContainer.props.style
        expect(navBarContainerStyle).toHaveProperty('backgroundColor', '#2F2D46')
    })

    it('Should have the small shadow Bootstrap class in the frame', () => {
        const navBarContainer = wrapper.find('div')
        const hasShadowClass = navBarContainer.hasClass('shadow-sm')
        expect(hasShadowClass).toEqual(true)
    })

    it('Should render white text for all anchors ', () => {
        const anchors = wrapper.find('a')
        anchors.forEach((anchor) => {
            const hasWhiteText = anchor.hasClass('text-white')
            expect(hasWhiteText).toEqual(true)
        })
    })
})
