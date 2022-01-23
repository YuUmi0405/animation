<template>
    <div>
        <div>
            <div class="header"></div>

            <div class="content">
                <div class="signup-form">
                    <div class="signup-form__title">注册账号</div>
                    <div class="inp">
                        <el-input name="username" v-model="username" placeholder="用户名/邮箱" clearable></el-input>
                    </div>
                    <br>
                    <div class="inp">
                        <el-input name="passwd" v-model="passwd" placeholder="密码" show-password></el-input>
                    </div>
                    <br>
                    <div class="inp">
                        <el-input name="ck_passwd" v-model="ck_passwd" placeholder="确认密码" show-password></el-input>
                    </div>

                    <br>
                    <button name="register" class="signup_button" @click="register_func">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>
                    <br>
                    <router-link to="login"><button class="back_button">返&nbsp;&nbsp;&nbsp;&nbsp;回</button></router-link>
                    <br>
                    <div class="terms">@posted sadnesspineapple</div>
                </div>
            </div>
            <BackBanner></BackBanner>
            <div class="footer"></div>
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
        methods: {
            register_func() {
                if (!this.username || !this.passwd) {
                    this.$message({
                        message: "请输入用户名或密码",
                        type: "warning",
                        duration: 1000,
                    });
                } else if (!this.ck_passwd) {
                    this.$message({
                        message: "请再次输入密码",
                        type: "warning",
                        duration: 1000,
                    });
                } else if (this.passwd !== this.ck_passwd) {
                    this.$message({
                        message: "两次密码不一致",
                        type: "warning",
                        duration: 1000,
                    });
                } else {
                    let data = {
                        username: this.username,
                        password: this.password
                    }
                    this.$axios.post(this.$api.register_api,data).then(res=>{
                        console.log(res);
                    })
                }
            }
        }
    }

</script>

<style>

</style>
