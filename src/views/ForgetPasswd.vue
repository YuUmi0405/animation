<template>
  <div>
    <div>
      <div class="header"></div>
      <div class="content">
        <div class="signup-form">
          <div class="signup-form__title">忘记密码</div>
          <!--邮箱验证-->
          <div v-if="is_show">
            <div class="inp">
              <el-input
                name="email"
                v-model="email"
                placeholder="邮箱"
                clearable
              ></el-input>
            </div>
            <br />
            <div class="inp">
              <el-input placeholder="验证码" v-model="code" clearable>
                <template slot="append">
                  <span @click="send_code">{{ code_interval }}</span>
                </template>
              </el-input>
            </div>
            <br />
            <button class="signup_button" @click="next">
              下&nbsp;&nbsp;一&nbsp;&nbsp;步
            </button>
            <br />
            <router-link to="login">
              <button class="back_button">返&nbsp;&nbsp;&nbsp;&nbsp;回</button>
            </router-link>
          </div>
          <!--修改密码-->
          <div v-else>
            <div class="inp">
              <el-input
                name="passwd"
                v-model="passwd"
                placeholder="新密码"
                show-password
              ></el-input>
            </div>
            <br />
            <div class="inp">
              <el-input
                name="ck_passwd"
                v-model="ck_passwd"
                placeholder="确认密码"
                show-password
              ></el-input>
            </div>
            <br />
            <button class="signup_button">修改密码</button>
            <br />
            <button class="back_button" @click="back">
              返&nbsp;&nbsp;&nbsp;&nbsp;回
            </button>
          </div>
          <br />
          <div class="terms">@posted sadnesspineapple</div>
        </div>
      </div>
      <BackBanner></BackBanner>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/register.css";
import BackBanner from "../components/BackBanner";
export default {
  name: "forgetpasswd",
  components: {
    BackBanner,
  },
  data() {
    return {
      email: "",
      code_interval: "获取验证码",
      is_send: true,
      is_show: true,
      passwd: "",
      ck_passwd: "",
    };
  },
  methods: {
    back() {
      this.is_show = true;
    },
    next() {
        // 请求校验验证码是否正确，再进入密码修改页面
      this.is_show = false;
    },
    send_code() {
      if (!this.email) {
        this.$message({
          message: "请输入邮箱",
          type: "warning",
          duration: 1000,
        });
      } else {
        if (!this.is_send) return;
        this.is_send = false;
        this.$axios
          .post(this.$settings.base_url + "/user/email/", {
            email: this.email,
          })
          .then((response) => {
            if (response.data === 0) {
              this.$message({
                message: "邮箱已存在",
                type: "warning",
                duration: 1000,
              });
              this.is_send = true;
            } else if (response.data === 3) {
              this.$message({
                message: "邮箱格式错误",
                type: "warning",
                duration: 1000,
              });
              this.is_send = true;
            } else {
              this.$message({
                message: "验证码已发送",
                type: "success",
                duration: 1000,
              });
              let smtp_interval_time = 60;
              let timer = setInterval(() => {
                if (smtp_interval_time <= 1) {
                  clearInterval(timer);
                  this.smtp_interval = "获取验证码";
                  this.is_send = true; // 重新回复点击发送功能的条件
                } else {
                  smtp_interval_time -= 1;
                  this.smtp_interval = `${smtp_interval_time}秒后再发`;
                }
              }, 1000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>
