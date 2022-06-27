<template>
    <div>
        <!-- 这里是标签 -->
        <div class="content_tags">
            <slot name="tags"></slot>
            <div style="clear: both"></div>
        </div>
        <!-- 这里是标题 -->
        <div class="content_title">
            <h2 font-size="20" class="content_title_font">已关注用户的作品</h2>
        </div>
        <!-- 这里是标题下面的内容 -->
        <div style="margin-top:20px">
            <slot name="concern_work"></slot>
            <div style="clear: both"></div>
        </div>

        <div class="content_title">
            <h2 font-size="20" class="content_title_font">推荐作品</h2>
        </div>
        <div style="margin-top:20px">
            <slot name="recommend_work"></slot>
            <div style="clear: both"></div>
        </div>

        <div class="content_title">
            <h2 font-size="20" class="content_title_font">排行榜</h2>
        </div>
        <div style="margin-top:20px">
            <slot name="ranking_list"></slot>
            <div style="clear: both"></div>
        </div>
    </div>
</template>


<style scoped>
    .el-tabs__item {
        font-size: 16px !important;
    }

    .content_title {
        display: flex;
        -webkit-box-align: center;
        align-items: center;

        justify-content: flex-start;
        margin-top: 20px;
    }

    .content_title_font {
        font-size: 20px;
        line-height: 28px;
        color: rgba(0, 0, 0, 0.64);
        font-weight: bold;
        margin: 0px;
    }

    .clearfix:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
</style>

<script>
    export default {};
</script>