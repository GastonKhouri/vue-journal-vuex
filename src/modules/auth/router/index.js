const authRouter = {

	name: 'auth',
	component: () => import(/* webpackChunkName: "auth" */ '@/modules/auth/layouts/AuthLayout' ),
	children: [
		{
			path: '',
			name: 'login',
			component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/views/Login' ),
		},
		{
			path: 'register',
			name: 'register',
			component: () => import(/* webpackChunkName: "Register" */ '@/modules/auth/views/Register' ),
		},
	]

};

export default authRouter;