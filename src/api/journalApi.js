const axios = require( 'axios' );

const journalApi = axios.create( {
	baseURL: '',
} );

journalApi.interceptors.request.use( config => {

	config.params = {
		auth: localStorage.getItem( 'idToken' ),
	};

	return config;
} );

export default journalApi;