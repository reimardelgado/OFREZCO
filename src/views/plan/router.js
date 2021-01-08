//const planes = () => import('@/views/plan/plan')
const planes = () => import('@/views/plan/plan')
const planNuevo = () => import('@/views/plan/planNew')
const planEditar = () => import('@/views/plan/planEdit')


export const PlanListRoute = {
    path: '/admin/plans',
    name: 'planes',
    component: planes,
    meta: {
        requiresAuth: true
    },
}
export const PlanNuevoRoute = {
    path: '/admin/plan_new',
    name: 'nuevoPlan',
    component: planNuevo,
    meta: {
        requiresAuth: true
    },
}
export const PlanEditarRoute = {
    path: '/admin/plan_edit/:id',
    name: 'editarPlan',
    component: planEditar,
    meta: {
        //requiresAuth: true
    },
}

// export const PlanRoute = {
//     path: '/admin/plans',
//     name: 'planes',
//     component: planes,
//     redirect: '/plans',
//     children: [
//         PlanListRoute,
//         PlanNuevoRoute,
//         PlanEditarRoute
//     ],
// }