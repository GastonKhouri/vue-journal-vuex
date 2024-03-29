// export const myAction = ( state, val ) => {

// }

export const loginUser = ( state, { user, idToken, refreshToken } ) => {

	if ( idToken ) {
		localStorage.setItem( 'idToken', idToken );
		state.idToken = idToken;
	}

	if ( refreshToken ) {
		localStorage.setItem( 'refreshToken', refreshToken );
		state.refreshToken = refreshToken;
	}

	state.user = user;

	state.status = 'authenticated';

};

export const logout = ( state ) => {

	localStorage.removeItem( 'idToken' );
	localStorage.removeItem( 'refreshToken' );

	state.idToken = null;
	state.refreshToken = null;
	state.user = null;
	state.status = 'not-authenticated';

};