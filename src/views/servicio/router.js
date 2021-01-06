const servicios = () => import('@/views/servicio/servicio')
const servicioNuevo = () => import('@/views/servicio/servicioNew')
const servicioEditar = () => import('@/views/servicio/servicioEdit')

export const ServicioRoute = {
    path: '/admin/services',
    component: servicios
}

export const ServicioNuevaRoute = {
    path: '/admin/service_new',
    component: servicioNuevo
}
export const ServicioEditarRoute = {
    path: '/admin/service_edit/:id',
    component: servicioEditar
}