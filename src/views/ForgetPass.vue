<template>
    <div class="forget-pass">
        <el-row id="forget-header">
            <el-col :span="2">
                <img src="@/assets/img/icon2.png" height="40px" alt="">
            </el-col>

        </el-row>
        <div id="forget-content">
            <h1 class="reset_pass_font">重置密码</h1>
            <div class="forget-pass-content">
                <h2>输入邮箱地址</h2>
                <el-row style="margin-top: 15px">
                    <el-col :span="18" :offset="3">
                        <el-input placeholder="请输入内容"></el-input>
                    </el-col>
                </el-row>

            </div>

        </div>
    </div>


</template>

<script>
    export default {
        name: "ForgetPass"
    }
</script>

<style>
    .el-row {
        width: 100%;
        background-color: #FFFFFF;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 64px;
        padding: 0px 24px;
        box-sizing: border-box;
    }

    .el-input__inner {
        background-color: rgb(245, 245, 245);
    }

    .forget-pass {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(245, 245, 245);
    }

    .reset_pass_font {
        margin-top: 20px;
        margin-bottom: 16px;
        color: rgba(0, 0, 0, 0.64);
        font-size: 20px;
        line-height: 28px;
        font-weight: bold;
        display: flow-root;
    }

    .forget-pass-content {
        padding-top: 40px;
        width: 600px;
        padding-bottom: 104px;
        margin: 0px auto;
        background-color: #FFFFFF;
    }
</style>