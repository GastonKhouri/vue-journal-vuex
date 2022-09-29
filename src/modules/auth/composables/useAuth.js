import { computed } from 'vue';
import { useStore } from 'vuex';

export const useAuth = () => {

	const store = useStore();

	const createUser = async ( user ) => {

		try {

			const response = await store.dispatch( 'auth/createUser', user );

			return response;

		} catch ( error ) {

			console.log( error );

		}

	};

	const loginUser = async ( user ) => {

		try {

			const response = await store.dispatch( 'auth/signInUser', user );

			return response;

		} catch ( error ) {

			console.log( error );

		}

	};

	const checkAuthStatus = async () => {

		try {

			const response = await store.dispatch( 'auth/checkAuthentication' );

			return response;

		} catch ( error ) {

			console.log( error );

		}

	};

	const logout = async () => {

		store.commit( 'auth/logout' );
		store.commit( 'journal/clearEntries' );

	};

	return {
		createUser,
		loginUser,
		checkAuthStatus,
		logout,

		authStatus: computed( () => store.getters[ 'auth/authStatus' ] ),
		username: computed( () => store.getters[ 'auth/username' ] ),
	};

};
