<template>
    <div> 
        <van-cell-group>
            <van-field v-model="goodsName" placeholder="请输入商品名称" class="myTopSearch" clearable>
                <van-button slot="button" size="small" type="primary" color="#1989fa" @click="serchClick">查询</van-button>
            </van-field>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsName:''
        }
    },
    methods: {
        serchClick() {
            this.$emit('search-goods',this.goodsName)
        },
    }
}
</script>

<style lang="scss" scope>
    .myTopSearch > .van-cell__value--alone{
        margin-top: 10px;
        background: #F9FAFB;
        padding-left: 3px;
        border-radius: 5px;
    }
</style>