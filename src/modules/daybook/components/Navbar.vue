<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img
                class="d-inline-block align-text-top mx-2"
                alt="Vue Logo"
                height="24"
                src="@/assets/logo.png"
            >
            {{ username }}
        </a>
        <div class="d-flex">
            <button 
				@click="onLogout"
				class="btn btn-outline-info mx-2"
			>
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
	import { useRouter } from 'vue-router';
	import { useAuth } from '../../auth/composables/useAuth';

	export default {
		setup() {

			const router = useRouter();
			const { username, logout } = useAuth();

			return {
				username,
				onLogout() {
					logout();
					router.push( { name: 'login' } );
				}
			};

		},
	}
</script>