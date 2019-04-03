import React from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
	state = { videos: [], selectedVideo: null };
	onSearchSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		this.setState({ videos: response.data.items});
		console.log(this.state.videos);
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video })
	}
	render() {
		return (
			<div>
				<SearchBar onSubmit= {this.onSearchSubmit}/>
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />				
			</div>
			);
	}
}

export default App;