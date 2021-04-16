<template>
    <div id="swiper_tag" class="swiper-container-tag" v-on:mousemove="test">
        <div class="swiper-wrapper">

            <div class="swiper-slide" v-for="i in 20" v-bind:key="i">
                <a href="" class="tag">
                    <div class="tag_size">神奇寶貝</div>
                </a>

            </div>
        </div>
         <!-- 这里是前进后退按钮 -->
        <div>
            <div v-if="progress===0">
                <!-- 前进按钮 -->
                <NextButton @slideNext="slideNext"></NextButton>
            </div>
            <div v-else-if="progress===1">
<!--                后退按钮-->
                <PrevButton @slidePrev="slidePrev"></PrevButton>
            </div>
            <div v-else>
<!--                前进后退按钮-->
                <NextButton @slideNext="slideNext"></NextButton>
                <PrevButton @slidePrev="slidePrev"></PrevButton>
            </div>

        </div>


    </div>

</template>

<script>
    import Swiper from "swiper"
    import PrevButton from "./PrevButton"
    import NextButton from "./NextButton"

    export default {
        name: 'IkonTag',
        data() {
            return {
                progress: 0,
            }
        },
        components: {
            PrevButton,
            NextButton,
        },
        methods: {
            test() {
                this.progress = this.$swiper.progress
            },
            slidePrev() {
                this.$swiper.slidePrev()
                this.progress = this.$swiper.progress

            },
            slideNext() {
                this.$swiper.slideNext()
                this.progress = this.$swiper.progress
            }
        },
        mounted() {
            this.$swiper = new Swiper('.swiper-container-tag', {

                virtual: true,
                // loop: true,
                slidesPerView: 'auto',
                slidesPerGroup: 3,
                watchSlidesProgress: true,

            })
        },


    }
</script>

<style scoped>
    .tag_size {
        font-size: 14px;
        line-height: 22px;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
    }

    .tag {
        display: flex;
        min-height: 54px;
        -webkit-box-align: center;
        align-items: center;
        max-width: 200px;
        padding: 0px 24px;
        box-sizing: border-box;
        border-radius: 4px;
        color: rgb(255, 255, 255);
        text-decoration: none;
        background-color: rgb(126, 200, 143);
        text-align: center;
    }

    .swiper-wrapper {
        width: auto;
    }

    .swiper-slide {
        flex-shrink: 0;
        margin-right: 20px;
        width: auto;
    }



</style>