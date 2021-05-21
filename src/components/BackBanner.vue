<!-- 背景图组件调用第三方接口实现刷新改变背景 -->
<template>
    <div class="slide">
        <transition name="fade" mode="out-in">
            <img v-bind:key="img_url" class="wallpaper" :src="img_url"/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "back_banner",
        data() {
            return {
                show: true,
                img_url: require("../assets/img/icon2.png"),
                img_list: [],
                flag: 0
            };
        },
        created() {
            for (let i = 0; i < 10; i++) {
                this.$axios.get("/?lx=dongman&format=json").then(response => {
                    console.log(response)
                    this.img_list.push(response.data.imgurl)
                });
            }

        },
        mounted() {
            console.log(this.img_list)
            console.log(this.img_list[this.flag])

            setInterval(() => {
                this.img_url = this.img_list[this.flag]
                this.flag += 1
                if (this.flag === 10) {
                    this.flag = 0
                }
            }, 5000)

        },
    };
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>