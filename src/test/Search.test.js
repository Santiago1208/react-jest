import React from 'react'
import { shallow } from 'enzyme'

import Search from '../components/Search'

let wrapper = undefined

describe('Search unit testing', () => {
    beforeEach(() => {
        // First, tell JEST which module mock. In this case is a JS class
        jest.mock('../managers/PlaylistManager')
        wrapper = shallow(<Search playlistManager={ undefined }/>)
    })

    it('should render a JSON object in the <p> element', async () => {
        // Then, import the module to be mocked
        const MockPlaylistManager = require('../managers/PlaylistManager')

        // Then, define the behavior of the module as a black box.
        // In this case I am going to mock the fetchPlaylist(playlistId) method.
        const mockFetchPlaylist = jest.fn(playlistId => {
            let playlist = { // The business element to be returned
                status: undefined,
                info: {}
            }
            if (playlistId && playlistId !== null && playlistId !== '') {
                playlist.status = 200
                playlist.info.id = playlistId
                playlist.info.title = 'Playlist title goes here'
                playlist.info.description = 'Playlist description goes here'
                playlist.info.nb_tracks = 45
            } else {
                playlist.status = 400
                playlist.info = 'An error occurred while fetching the playlist'
            }
            return playlist
        })
        
        // Then, tell to the class which methods will be mocked using the black box behavior defined above. 
        // Remember Jest already know that the module (class) PlaylistManager is being mocked, so mockImplementation() method make sense here.
        MockPlaylistManager.PlaylistManager.mockImplementation(() => {
            let mockedFunctionList = {
                fetchPlaylist: mockFetchPlaylist
            }
            return mockedFunctionList
        })

        // Ok, we are ready to use the mocked module in our test
        const playlistManager = new MockPlaylistManager.PlaylistManager()
        
        wrapper.setProps({
            playlistManager: playlistManager
        })
        wrapper.setState({
            textValue: '908622995'
        })

        // Making sure the module is defined
        expect(wrapper.instance().props.playlistManager).toBeDefined()
        expect(wrapper.state().textValue).not.toBe('')
        
        const button = wrapper.find('#searchPlaylistButton')
        await button.simulate('click')
 
        const playlistInComponent = wrapper.state().response
        expect(playlistInComponent).not.toEqual({})

         const playlistId = playlistInComponent.info.id
         expect(playlistId).toBeDefined()
         expect(playlistId).toBe('908622995')
    })

    it('should render an error span when there are 4 characters in the text field', () => {
        const textField = wrapper.find('input')
        textField.simulate('change', {target: {value: 'bad value'}})
    
        // To make sure it works, if the string 'bad value' is in the text field, 
        // then that string must be in the component's state (This expectation could be unnecessary)
        const textValueState = wrapper.state().textValue
        expect(textValueState).toBe('bad value')
    
        const span = wrapper.find('span')
        const spanExists = span.exists()
        expect(spanExists).toBe(true)
    })
    
    it('should not render an error span when there are 3 characters in the text field', () => {
        const textField = wrapper.find('input')
        textField.simulate('change', {target: {value: 'bad'}})
    
        // We omit the trivial expectation about making sure the state of the component is
        // updated when the input also is.
    
        const span = wrapper.find('span')
        const spanExists = span.exists()
        expect(spanExists).toBe(false)
    })
    

})
