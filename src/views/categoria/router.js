const categorias = () => import('@/views/categoria/categoria')
const categoriaNuevo = () => import('@/views/categoria/categoriaNew')
const categoriaEditar = () => import('@/views/categoria/categoriaEdit')


export const CategoriaRoute = {
    path: '/admin/categories',
    name: 'categorias',
    component: categorias,
    // meta: {
    //     requiresAuth: true
    // }
}
export const CategoriaNuevaRoute = {
    path: '/admin/category_new',
    name: 'nuevaCategoria',
    component: categoriaNuevo
}
export const CategoriaEditarRoute = {
    path: '/admin/categoria_edit/:id',
    name: 'editarCategoria',
    component: categoriaEditar
}