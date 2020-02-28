import React, { Component } from 'react'

class Search extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            textValue: '',
            error: false,
            fetching: false,
            response: {}
        }
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this)
        
    }
    
    render() {
        const haveError = this.state.error
        const haveResponse = this.state.response
        const button = this.state.fetching ? <button type="button" className="btn btn-primary" disabled>Search playlist</button> : <button id="searchPlaylistButton" type="button" className="btn btn-primary" onClick={ this.handleSearchButtonClick }>Search playlist</button>
        const element = (
            <div>
                <input type="text" value={ this.state.textValue } onChange={ this.handleTextFieldChange }/>
                { haveError ? (<span className="text-danger">Only 3 characters are allowed</span>) : null }
                <br/>
                { button }
                <br/>
                <p>{ haveResponse ? JSON.stringify(this.state.response.info) : '' }</p>
            </div>
        )
        return element
    }

    handleTextFieldChange(event) {
        const textValue = event.target.value
        if (textValue.length > 3) {
            this.setState({
                textValue: textValue,
                error: true
            })
        } else {
            this.setState({
                textValue: textValue,
                error: false
            })
        }
        
    }

    async handleSearchButtonClick() {
        const playlistId = this.state.textValue
        let playlistManager = this.props.playlistManager
        this.setState({
            fetching: true
        })
        const playlist = await playlistManager.fetchPlaylist(playlistId)
        this.onFetchCompleted(playlist)
        
    }

    onFetchCompleted(playlist) {
        
        this.setState({
            response: playlist,
            fetching: false
        })
    }
}

export default Search
