// 商品管理>品牌管理接口
import request from '@/utils/request'
import type { TradeMarkResponseData } from './type'
enum API {
    TRADEMARK_URL = "/admin/product/baseTrademark",
}
// 获取品牌的接口方法
// 携带两个参数 page 第几页 limit每页多少个
export const reqHasTrademark = (page: number, limit: number) => request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `/${page}/${limit}`)