<template>
  <div @click="slideNext">

    <button type="button" class="button_next_prev" style="right: 0; padding-right: 16px; padding-bottom: 0;">
      <div class="common_svg_div"><svg viewBox="0 0 24 24" size="24" class="sc-11csm01-0 prev_next_svg">
          <path
            d="M8.08579 16.5858C7.30474 17.3668 7.30474 18.6332 8.08579 19.4142C8.86684 20.1953 10.1332 20.1953 10.9142 19.4142L18.3284 12L10.9142 4.58579C10.1332 3.80474 8.86684 3.80474 8.08579 4.58579C7.30474 5.36684 7.30474 6.63317 8.08579 7.41421L12.6716 12L8.08579 16.5858Z">
          </path>
        </svg></div>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    slideNext () {
      this.$emit('slideNext')
    }
  }
}
</script>

<style scoped>
.button_next_prev {
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
  z-index: 1;
  opacity: 0;
  height: 54px;
}
#swiper_tag:hover div button {
  opacity: 1;
}
.prev_next_svg {
  stroke: none;
  fill: currentcolor;
  width: 24px;
  height: 24px;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
}
.button_next_prev:hover .common_svg_div {
  background-color: rgba(0, 0, 0, 0.373);
  color: rgb(235, 235, 235);
}
.common_svg_div {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.32);
  transition: visibility 0.4s ease 0s, opacity 0.4s ease 0s,
    background-color 0.2s ease 0s, color 0.2s ease 0s;
  color: rgb(255, 255, 255);
}
</style>