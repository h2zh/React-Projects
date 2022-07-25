import axios from 'axios'

// create our own axios server which we can send request to
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID c5gZ2gFMLpswgWbBEPejxQlOMcXfjKQOGqjOjjB_tQA',

    }
})