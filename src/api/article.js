import request from '@/utils/request.js'
//导入@/stores/token.js
import { useTokenStore } from '@/stores/token'
//文章分类列表查询
export const articleCategoryListService = ()=>{
    //获取token状态
     const tokenStore = useTokenStore()
    //通过请求头Authorization携带token
    return request.get('/category',{headers:{Authorization:tokenStore.token}} )
}
export const articleCategoryAddService = (categoryModel) => {
    return request.post('/category', categoryModel)
}
//修改分类
export const articleCategoryUpdateService = (categoryModel)=>{
    return request.put('/category',categoryModel)
}
//删除分类
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id='+id)
}
//文章列表查询
export const articleListService = (params) => {
    return request.get('/article', { params: params })
}
//添加文章
export const articleAddService = (articleModel)=>{
    return request.post('/article',articleModel)
}
