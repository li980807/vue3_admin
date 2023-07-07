// 接口返回的共有的数据
export interface ResponseData {
    code: number,
    message: string,
    ok: boolean
}
// 品牌的每条数据ts类型
export interface TradeMark {
    id?: number,
    tmName: string,
    logoUrl: string
}
// 包含全部数据的ts类型 数组里放的TradeMark对象
export type Records = TradeMark[]

// 接口返回的全部数据的ts类型
export interface TradeMarkResponseData extends ResponseData {
    data: {
        records: Records,
        total: number,
        size: number,
        current: number,
        searchCount: boolean,
        pages: number
    },
}