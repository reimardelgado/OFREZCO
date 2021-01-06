const productos = () => import('@/views/producto/producto')
const productoNueva = () => import('@/views//producto/productoNew')
const productoEditar = () => import('@/views//producto/productoEdit')

export const ProductoRoute = {
    path: '/admin/products',
    component: productos
}

export const ProductoNuevaRoute = {
    path: '/admin/product_new',
    component: productoNueva
}
export const ProductoEditarRoute = {
    path: '/admin/product_edit/:id',
    component: productoEditar
}