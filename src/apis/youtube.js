import axios from 'axios';

const KEY = 'AIzaSyA9hOoDNLIbG5e86Mm_GHdbTGJjlKVcx-A';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})