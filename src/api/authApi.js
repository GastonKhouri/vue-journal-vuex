const axios = require( 'axios' );

const authApi = axios.create( {
	baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
	params: {
		key: ''
	}
} );

export default authApi;