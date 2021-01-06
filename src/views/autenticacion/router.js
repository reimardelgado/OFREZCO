
const login = () => import('@/views/autenticacion/Login')
const recuperar = () => import('@/views/autenticacion/RecuperarClave')
const cambiar = () => import('@/views/autenticacion/CambiarClave')

export const LoginRoute = {
    path: '/authenticate/login',
    component: login
}

export const RecuperarRoute = {
    path: '/authenticate/user/recover',
    component: recuperar
}

export const CambiarRoute = {
    path: '/authenticate/change-pass/:id',
    name: 'cambiarPass',
    component: cambiar
}


