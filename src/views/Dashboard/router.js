const principal = () => import('@/views/Dashboard/Dashboard')

export const PrincipalRoute = {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: principal,
    meta: {
        requiresAuth: true
    },
}