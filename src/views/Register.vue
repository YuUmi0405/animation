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
                        <el-input name="password" v-model="password" placeholder="密码" show-password></el-input>
                    </div>
                    <br>
                    <div class="inp">
                        <el-input name="ck_password" v-model="ck_password" placeholder="确认密码" show-password></el-input>
                    </div>

                    <br>
                    <button name="register" class="signup_button" @click="register_func">注&nbsp;&nbsp;&nbsp;&nbsp;册
                    </button>
                    <br>
                    <router-link to="login">
                        <button class="back_button">返&nbsp;&nbsp;&nbsp;&nbsp;回</button>
                    </router-link>
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
        components: {
            BackBanner
        },
        data() {
            return {
                username: "",
                password: "",
                ck_password: ""
            }
        },
        methods: {
            register_func() {

                if (!this.username || !this.password) {
                    // 校验密码是否输入
                    this.$message({
                        message: "请输入用户名或密码",
                        type: "warning",
                        duration: 1000,
                    });
                } else if (!this.ck_password) {
                    this.$message({
                        message: "请再次输入密码",
                        type: "warning",
                        duration: 1000,
                    });
                } else if (this.password !== this.ck_password) {
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
                    let res_data = this.$api.register(data)
                    res_data.then(res => {
                        if (res.data.code === 200) {
                            this.$router.push('/login')
                        }else {
                            this.$message({
                                message:res.data.message,
                                type:"error",
                                duration:1000
                            })
                        }
                    })

                }
            }
        }
    }

</script>

<style>

</style>
