<template>
    <div>
        <div>
            <div class="header"></div>

            <div class="content">
                <div class="signup-form">
                    <div class="signup-form__title">注册账号</div>
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
                        <el-row>
                          <el-col :span="20" :offset="2">
                                <el-input v-model="ck_passwd" placeholder="确认密码" show-password></el-input>
                            </el-col>
                        </el-row>
                    </div>

                    <br>
                    <button class="signup_button">下一步</button>
                    <br>
                    <div class="signup-sns">
                        
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
        name: "register",
        components:{
            BackBanner
        },
        data() {
            return {
                username: "",
                passwd: "",
                ck_passwd: ""
            }
        },
    }

</script>

<style>

</style>
