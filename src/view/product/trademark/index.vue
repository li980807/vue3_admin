<!-- 品牌管理 -->
<template>
  <el-card class="box-card">
    <el-button type="primary" size="default" icon="plus">添加品牌</el-button>
    <el-table :data="trademarkArr" max-height="460" style="margin: 10px 0;" border>
      <!-- el-table-column 默认div展示内容 -->
      <el-table-column type="index" label="序号" width="80" align="center" />
      <el-table-column label="品牌名称">
        <!-- 使用 #default 的语法来定义插槽名称，这是 Vue 2 中使用 slot-scope 的替代语法 -->
        <template #default="{ row }">
          <pre style="font-size: 16px;">{{ row.tmName }}</pre>
        </template>
      </el-table-column>
      <el-table-column label="品牌LOGO">
        <template #default="{ row }">
          <img :src="row.logoUrl" alt="无图片" style="width: 100px;">
        </template>
      </el-table-column>>
      <el-table-column prop="addrsess" label="品牌操作">
        <template>
          <el-button type="primary" size="small" icon="Edit"></el-button>
          <el-button type="danger" size="small" icon="Delete"></el-button>
        </template>
      </el-table-column>>
    </el-table>
    <div class="demo-pagination-block">
      <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[10, 20, 30, 40, 50]"
        :background="true" layout="prev, pager, next, jumper, ->, sizes,total" :total="total"
        @current-change="getHasTrademark" @size-change="sizechange" />
    </div>
  </el-card>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
// 引入请求方法
import { reqHasTrademark } from '@/api/product/trademark'
// 引入接口返回得数据类型
import type { Records, TradeMarkResponseData } from '@/api/product/trademark/type'
// 当前页码
const pageNo = ref<number>(1)
// 每页展示条数
const limit = ref<number>(10)
// 存储数据的总数total
const total = ref<number>(0)
// 存储品牌的渲染数据
const trademarkArr = ref<Records>([])
// 封装接口请求函数
const getHasTrademark = async (page = 1) => {
  // 当前页码 没有注入参数默认第一页 
  pageNo.value = page
  const result: TradeMarkResponseData = await reqHasTrademark(pageNo.value, limit.value)
  if (result.code === 200) {
    total.value = result.data.total
    trademarkArr.value = result.data.records
  }

}
onMounted(() => {
  getHasTrademark()
})
// 分页器页码发生变化时 触发 自定义事件 组件pagination会回传数据（当前页码）
// const changePageNo = ()=>{
//   getHasTrademark()
// }
// 分页下拉大小切换触发
const sizechange = () => {
  // 没有注入参数
  getHasTrademark()
}
</script>

<style lang='scss' scoped></style>