import axios from 'axios';

export default axios.create({
  baseURL:'https://developers.zomato.com/api/v2.1',
  headers:{
    // 'user-key':
    'user-key':'6bac3bc1759750803e1c198f36a99336'
  }
})
