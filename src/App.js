import React from 'react';

import Search from './components/Search'

import { PlaylistManager } from './managers/PlaylistManager'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			playlistManager: null
		}
	}

	render() {
		const element = (
			<div>
				<Search playlistManager={ this.state.playlistManager } />				
			</div>
		)
		return element
	}

	componentDidMount() {
        this.setState({
            playlistManager: new PlaylistManager()
        })
    }
}

export default App
