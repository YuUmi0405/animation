<template>
    <div>
        <div>
            <div class="header"></div>
            <div class="content">
                <div class="signup-form">
                    <!-- <el-card class="box-card"> -->
                    <div class="signup-form__title">登录账号</div>
                    <div>
                        <el-row>
                            <el-col :span="20" :offset="2">
                                <el-input v-model="username" placeholder="用户名" clearable></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="20" :offset="2">
                                <el-input v-model="passwd" placeholder="密码" show-password></el-input>
                            </el-col>
                        </el-row>
                    </div>

                    <br>
                    <button class="signup_button">登录</button>

                    <div class="signup-form-nav"><router-link to="/home">忘记密码</router-link></div>
                    <br>
                    <div class="signup-sns">
                        <el-row>
                            <el-col :span="20" :offset="2">
                                
                            </el-col>
                        </el-row>
                    </div>
                    <br>
                    <div class="terms">@posted sadnesspineapple</div>
                    <!-- </el-card> -->
                </div>

            </div>
            <BackBanner></BackBanner>

            <div class="footer"></div>
        </div>
        <div>


        </div>

    </div>

</template>

<script>
    import '@/assets/css/register.css'
    import BackBanner from "../components/BackBanner";
    export default {
        name: "Login",
        components:{
            BackBanner
        },
        data() {
            return {
                username: '',
                passwd: ''
            }
        },
    }

</script>

<style>

</style>
