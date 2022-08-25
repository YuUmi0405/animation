<template>

  <div class="evaGFr cFrVDg">
    <div v-if="slot_type==='image_tag'" :class="slot_type">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in 20" v-bind:key="i">
          <a href="" class="tag">
            <div class="tag_size">神奇寶貝</div>
          </a>
        </div>
      </div>
    </div>


    <div v-else :id="slot_type" :class="slot_type" v-on:mousemove="mouse_move">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in image_info_list" v-bind:key="item.url">
          <div class="concern_work_img" @click="go_to_image_detail(item.id,$event)">
            <el-image style="width: 100%;height: 100%" :src="item.url" :fit="'cover'"></el-image>
            <svg v-if="!item.love" t="1656314860240" @click="collect_or_cancel(item.id,$event)"
                 class="icon love"
                 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2371"
                 width="200" height="200">
              <path
                  d="M739.584 70.592c-92.224 0-177.792 63.04-228.224 109.568C460.864 133.632 375.36 70.592 283.008 70.592 108.48 70.592 0 176.96 0 348.16 0 492.8 130.688 608.256 131.2 608.64l340.544 328.512c10.432 10.432 24.448 16.256 39.552 16.256s29.056-5.824 39.296-16l341.248-328.64c30.656-29.376 130.752-134.848 130.752-260.544C1022.656 176.96 914.176 70.592 739.584 70.592z"
                  p-id="2372" fill="#ffffff"></path>
            </svg>

            <svg v-else @click="collect_or_cancel(item.id,$event)" t="1656385846990" class="icon love"
                 viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2373" width="200" height="200">
              <path
                  d="M739.584 70.592c-92.224 0-177.792 63.04-228.224 109.568C460.864 133.632 375.36 70.592 283.008 70.592 108.48 70.592 0 176.96 0 348.16 0 492.8 130.688 608.256 131.2 608.64l340.544 328.512c10.432 10.432 24.448 16.256 39.552 16.256s29.056-5.824 39.296-16l341.248-328.64c30.656-29.376 130.752-134.848 130.752-260.544C1022.656 176.96 914.176 70.592 739.584 70.592z"
                  p-id="2374" fill="#d81e06"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- 这里是前进后退按钮 -->
    <div id="concern_button" class="concern_button_main_div">
      <div v-if="progress===0">
        <!-- 前进按钮 -->
        <button type="button" class="concern_button"
                style="right: 0; padding-right: 16px; padding-bottom: 0;"
                @click="slideNext"
        >
          <div class="concern_button_div">
            <svg viewBox="0 0 24 24" size="24" class="concern_button_svg">
              <path
                  d="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z"></path>
            </svg>
          </div>
        </button>
      </div>
      <div v-else-if="progress===1">
        <!--                后退按钮-->
        <button type="button" class="concern_button"
                style="left: 0; padding-right: 16px; padding-bottom: 0;"
                @click="slidePrev"
        >
          <div class="concern_button_div">
            <svg viewBox="0 0 24 24" size="24" class="concern_button_svg">
              <path
                  d="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z"
                  transform="rotate(180 12 12)">
              </path>
            </svg>
          </div>
        </button>
      </div>
      <div v-else>
        <!--前进后退按钮-->
        <button type="button" class="concern_button" style="right: 0; padding-right: 16px; padding-bottom: 0;"
                @click="slideNext">
          <div class="concern_button_div">
            <svg viewBox="0 0 24 24" size="24" class="concern_button_svg">
              <path
                  d="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z"></path>
            </svg>
          </div>
        </button>
        <button type="button" class="concern_button" style="left: 0; padding-right: 16px; padding-bottom: 0;"
                @click="slidePrev">
          <div class="concern_button_div">
            <svg viewBox="0 0 24 24" size="24" class="concern_button_svg">
              <path
                  d="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z"
                  transform="rotate(180 12 12)">
              </path>
            </svg>

          </div>
        </button>
      </div>


    </div>


  </div>

</template>

<script>
import Swiper from "swiper"
import {valid_status} from "../../../../assets/js/utils";
// import '@/assets/css/next_pre_button.css'

export default {
  name: 'ImageSlide',
  props: {
    slot_type: String,
  },
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      image_info_list: [],
      count: 0,
      progress: 0,
      is_love: 0

    }
  },

  methods: {
    mouse_move() {
      this.progress = this.$swiper.progress

    },
    slidePrev() {
      this.$swiper.slidePrev()
      this.progress = this.$swiper.progress

    },
    slideNext() {
      this.$swiper.slideNext()
      this.progress = this.$swiper.progress
    },
    push_url(res) {
      res.data.data.forEach(item => {
        item.url = this.$api.base_url + item.url
      })
      this.image_info_list = res.data.data
    },
    load_swiper() {
      this.$swiper = new Swiper("." + this.slot_type, {
        virtual: true,
        // loop: true,
        // observer:true,
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        watchSlidesProgress: true
      })

    },
    get_concern_work_image_info() {
      let res_data
      res_data = this.$api.get_image_info(1, 10)
      res_data.then(res => {
        let flag = valid_status(res)
        if (flag) {
          //先推url到数组，swiper长度根据数组长度来
          this.push_url(res)
        }

      }).then(() => {
        this.load_swiper()
      })
    },
    collect_or_cancel(id) {
      let res_data = this.$api.collect_or_cancel({"id": id})
      res_data.then(res => {
        let flag = valid_status(res)
        if (flag) {
          this.image_info_list.forEach(item => {
            if (item.id === id) {
              item.love = !item.love
            }
          })
        }
      })
    },
    go_to_image_detail(id) {
      this.$router.push('/image_detail/' + id)
    }
  },
  mounted() {
    if (this.slot_type === "concern_work") {
      this.get_concern_work_image_info()
    } else {
      this.load_swiper()
    }
  },


}
</script>
<style scoped>

.cFrVDg {
  -webkit-mask-image: linear-gradient(to right, transparent, rgb(0, 0, 0) 72px, rgb(0, 0, 0) calc(100% - 72px), transparent);
}

.love {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16%;
  height: 16%;
}

.evaGFr {
  position: relative;
}

.concern_button_main_div {

  transition: opacity 0.4s ease 0s;
}

#concern_button:hover button {
  opacity: 1;
}

.love:hover {
  width: 18%;
  height: 18%;
  cursor: pointer;
}

.concern_button {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0;
  min-width: 40px;
  border: none;
  outline: 0;
  background: transparent;
  cursor: pointer;
  transition: visibility 0.4s ease 0s, opacity 0.4s ease 0s;
  z-index: 10;
  opacity: 0;
}

.concern_button_svg {
  stroke: none;
  fill: currentcolor;
  width: 24px;
  height: 24px;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
}

.concern_button_div {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.32);
  transition: visibility 0.4s ease 0s, opacity 0.4s ease 0s, background-color 0.2s ease 0s, color 0.2s ease 0s;
  color: rgb(255, 255, 255);
}

.concern_work_img {
  height: 184px;
  width: 184px;
}

.swiper-wrapper {
  width: auto;
}

.swiper-slide {
  flex-shrink: 0;
  margin-right: 20px;
  width: auto;
}

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

/deep/ .el-image__inner {
  height: 184px;
  width: 184px;
}


</style>