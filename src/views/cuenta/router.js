const cuentas = () => import('@/views/cuenta/cuenta')
const cuentaNueva = () => import('@/views/cuenta/cuentaNew')
const cuentaEditar = () => import('@/views/cuenta/cuentaEdit')
const userProfile = () => import('@/views/cuenta/UserProfile')

export const CuentaRoute = {
    path: '/admin/accounts',
    name: 'cuentas',
    component: cuentas
}

export const CuentaNuevaRoute = {
    path: '/admin/account_new',
    name: 'nuevaCuenta',
    component: cuentaNueva
}
export const CuentaEditarRoute = {
    path: '/admin/account_edit/:id',
    name: 'editarCuenta',
    component: cuentaEditar
}

export const CuentaProfileRoute = {
    path: '/admin/account/profile',
    name: 'verPerfil',
    component: userProfile
}
