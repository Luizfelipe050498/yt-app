import axios from 'axios';

const KEY = 'AIzaSyBx7aHGrMHmF1fu5nuPRZLjm0ybEhyJu68';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});