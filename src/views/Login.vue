<template>
    <div>
        <div>
            <div class="header"></div>
            <div class="content">
                <div class="signup-form">
                    <div class="signup-form__title">登录账号</div>
                    <div class="inp">
                        <el-input name="username" v-model="username" placeholder="用户名/邮箱" clearable></el-input>
                    </div>
                    <br>
                    <div class="inp">
                        <el-input name="passwd" v-model="passwd" placeholder="密码" show-password></el-input>
                    </div>
                    <br>
                    <button name="login" class="signup_button">登录</button>
                    <div class="signup-form-nav">
                        <span class="signup-form-nav-left">新用户?
                            <router-link to="/register"><span style="color:#409EFF">注册</span></router-link>
                        </span>
                        <router-link to="/forget"><span class="signup-form-nav-right">忘记密码</span></router-link>
                    </div>
                    <br>
                    <div class="signup-sns">
                        <!--第三方登录-->
                    </div>
                    <br>
                    <div class="terms">@posted sadnesspineapple</div>
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
