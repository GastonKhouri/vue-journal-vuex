const daybookRouter = {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout' ),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "no-entry" */ '@/modules/daybook/views/NoEntrySelected' ),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "entry" */ '@/modules/daybook/views/EntryView' ),
        },
    ]

};

export default daybookRouter;