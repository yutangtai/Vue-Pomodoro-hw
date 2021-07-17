<template>
<div class="sidebar" v-bind="close">
  <div class="sidebar-content">
    <!-- 選單按鈕 -->
    <label class="toggle" for="toggle_sidebar" @click="close = !close">
      <img src="../../public/img/icons/apple-touch-icon-76x76.png">
      <i v-if="close === false" class="pi pi-arrow-left"></i>
      <i v-else class="pi pi-arrow-right"></i>
    </label>
    <!-- 選單 -->
    <div class="nav-bar">
      <ul class="nav-item-group">
        <li><a href="#" v-bind:class="{ active: addIsActive }" @click="addBoolean()"><i class="pi pi-plus-circle" style="font-size: 1.5rem"></i></a></li>
        <li><a href="#" v-bind:class="{ active: listIsActive }" @click="listBoolean()"><i class="pi pi-bars" style="font-size: 1.5rem"></i></a></li>
        <li><a href="#" v-bind:class="{ active: analyticIsActive }" @click="analyticBoolean()"><i class="pi pi-chart-bar" style="font-size: 1.5rem"></i></a></li>
        <li><a href="#" v-bind:class="{ active: ringtoneIsActive }" @click="ringtoneBoolean()"><i class="pi pi-bell" style="font-size: 1.5rem"></i></a></li>
      </ul>
    </div>
    <!-- 選單內容 -->
    <div class="create">
      <Add v-if="addIsShow" :style="[addIsShowStyle]"></Add>
      <List v-if="listIsShow" :style="[listIsShowStyle]"></List>
      <Analytic v-if="analyticIsShow" :style="[analyticIsShowStyle]"></Analytic>
      <Ringtone v-if="ringIsShow" :style="[ringIsShowStyle]"></Ringtone>
    </div>
  </div>
</div>
</template>

<script>
import Add from './Add.vue'
import List from './List.vue'
import Analytic from './Analytic.vue'
import Ringtone from './Ringtone.vue'

export default {
  name: 'sidebar',
  components: {
    Add,
    List,
    Analytic,
    Ringtone
  },
  data () {
    return {
      close: true,
      addIsShow: true,
      listIsShow: false,
      analyticIsShow: false,
      ringIsShow: false,

      addIsActive: true,
      listIsActive: false,
      analyticIsActive: false,
      ringtoneIsActive: false,

      addIsShowStyle: {
        display: 'block'
      },
      listIsShowStyle: {
        display: 'none'
      },
      analyticIsShowStyle: {
        display: 'none'
      },
      ringIsShowStyle: {
        display: 'none'
      }
    }
  },
  methods: {
    addBoolean () {
      this.addIsShow = true
      if (this.addIsShow) {
        this.listIsShow = false
        this.analyticIsShow = false
        this.ringIsShow = false

        this.addIsActive = true
        this.listIsActive = false
        this.analyticIsActive = false
        this.ringtoneIsActive = false

        this.addIsShowStyle.display = 'block'
        this.listIsShowStyle.display = 'none'
        this.analyticIsShowStyle.display = 'none'
        this.ringIsShowStyle.display = 'none'
      }
    },
    listBoolean () {
      this.listIsShow = true
      if (this.listIsShow) {
        this.addIsShow = false
        this.analyticIsShow = false
        this.ringIsShow = false

        this.addIsActive = false
        this.listIsActive = true
        this.analyticIsActive = false
        this.ringtoneIsActive = false

        this.addIsShowStyle.display = 'none'
        this.listIsShowStyle.display = 'block'
        this.analyticIsShowStyle.display = 'none'
        this.ringIsShowStyle.display = 'none'
      }
    },
    analyticBoolean () {
      this.analyticIsShow = true
      if (this.analyticIsShow) {
        this.addIsShow = false
        this.listIsShow = false
        this.ringIsShow = false

        this.addIsActive = false
        this.listIsActive = false
        this.analyticIsActive = true
        this.ringtoneIsActive = false

        this.addIsShowStyle.display = 'none'
        this.listIsShowStyle.display = 'none'
        this.analyticIsShowStyle.display = 'block'
        this.ringIsShowStyle.display = 'none'
      }
    },
    ringtoneBoolean () {
      this.ringIsShow = true
      if (this.ringIsShow) {
        this.addIsShow = false
        this.listIsShow = false
        this.analyticIsShow = false

        this.addIsActive = false
        this.listIsActive = false
        this.analyticIsActive = false
        this.ringtoneIsActive = true

        this.addIsShowStyle.display = 'none'
        this.listIsShowStyle.display = 'none'
        this.analyticIsShowStyle.display = 'none'
        this.ringIsShowStyle.display = 'block'
      }
    },
    handleClick () {

    }

  }
}
</script>

<style>
.fadeInRight{
  display: block;
  transform-origin: right;
  animation: fadeIn 1s;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {
    /* margin-right: -520px; */
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    /* margin-right: 0; */
    transform: translateX(-520px);
    opacity: 1;
  }
}
.fadeOutRight{
  display: block;
  transform-origin: 520px center;
  animation: fadeOut 1s;
  animation-fill-mode: forwards;
}
@keyframes fadeOut {
  0% {
    /* margin-right: 0; */
    transform: translateX(520px);
    opacity: 1;
  }
  100% {
    /* margin-right: -520px; */
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
