const axios = require( 'axios' );

const journalApi = axios.create( {
    baseURL: 'https://vue-demos-ca7d8-default-rtdb.firebaseio.com',
} );

export default journalApi;