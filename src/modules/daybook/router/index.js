


export default {
    name:'dayBook',
    component: () => import(/* webpackChunkName: "dayBook" */ '@/modules/layouts/DayBookLayout.vue'),
    children:[{
        path:'',
        name:'no-entry',
        component:() => import(/* webpackChunkName: "dayBook-no-entry" */ '@/modules/views/NoEntrySelected.vue')
    },
    {
        path:':id',
        name:'entry',
        component:() => import(/* webpackChunkName: "dayBook-entry" */ '@/modules/views/EntryView.vue')
    }
]

    
}