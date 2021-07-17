<template>
  <div class="nav-content">
    <!-- 選單標題 -->
    <div class="content-title">ADD NEW TASK</div>
    <hr>
    <div class="content">
      <form class="form">
        <!-- 任務標題 -->
        <div class="form-item">
          <div class="form-item-task-title">TASK TITLE</div>
          <div class="form-item-wrap">
            <label class="form-item-label" invalid-feedback='Please enter task title.' :state='state'>
            <input type="text" class="form-item-input" v-model='newitem' :state='state' trim @keyup.enter='additem'>
            </label>
          </div>
        </div>
        <!-- 番茄數量 -->
        <div class="form-item">
          <div class="form-item-task-title">ESTIMATE TOMATO</div>
          <div class="form-item-wrap">
            <label class="form-item-label" v-for="(item, index) in 10" :key="index">
              <input type="radio" class="form-item-input">
              <img src="../../public/img/icons/apple-touch-icon-60x60.png">
            </label>
          </div>
        </div>
        <!-- 增加清單按鈕 -->
        <div class="form-item">
          <div class="form-item-wrap">
            <input type="button" class="form-item-input" value="ADD TASK" @click='additem'>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      newitem: ''
    }
  },
  computed: {
    state () {
      if (this.newitem.length === 0) {
        return null
      } else if (this.newitem.length < 1) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    additem () {
      if (this.state) {
        this.$store.commit('addList', this.newitem)
        this.newitem = ''
      } else {
        this.$swal({
          icon: 'error',
          title: 'Error',
          text: 'Please enter task title.'
        })
      }
    }
  }
}
</script>
