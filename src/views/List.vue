<template>
<div class="nav-content">
  <div class="content-title">TASK LISTS</div>
    <hr>
    <div class="content" style="padding-top: 30px">
      <b-card no-body>
        <b-tabs card>
          <!-- TODO -->
          <b-tab title="TODO" active>
            <ul class="list-group accordion" role="tablist">
              <li class="list-item d-flex flex-wrap p-0" v-for='(item, index) in list' :key='index'>
                <div class="toggle-title-all d-flex col-6 pl-0">
                  <div class="toggle-title-orange">
                    <label for="tab-header__label">
                      <input type="radio" name="doing" class="tab-header__input" value="1">
                      <img src="../../public/img/icons/apple-touch-icon-76x76.png">
                    </label>
                  </div>
                  <div class="toggle-title">
                    <div class="toggle-title-name">{{ item.name }}</div>
                    <div class="toggle-title-time d-flex">
                      <div class="toggle-title-time-circle"></div>
                      <div class="toggle-title-time-circle"></div>
                      <div class="toggle-title-time-circle"></div>
                      <div class="toggle-title-time-circle"></div>
                    </div>
                  </div>
                </div>
                <div class="toggle-btn d-flex col-6 justify-content-end">
                  <b-button @click="openSidebar(index)" ><i class="pi pi-ellipsis-h"></i></b-button>
                </div>
                <!-- 按下按鈕顯示的內容 -->
                <b-collapse v-bind:id="item.collapseindex" class="hideContent col-12" role="tabpanel" accordion="my-accordion" style="z-index: 999">
                  <b-card title="TASK TITLE">
                    <div class="form-item-wrap-small">
                      <label class="form-item-label">
                        <input type="text" class="form-item-input" v-model='list.model' trim>
                      </label>
                    </div>
                  </b-card>
                  <b-card title="ESTIMATED TOMATO">
                    <div class="form-item-wrap-small">
                      <label class="form-item-label" v-for="(item, index) in labelLength" :key='index'>
                        <input type="radio" class="form-item-input">
                        <img src="../../public/img/icons/apple-touch-icon-60x60.png">
                      </label>
                    </div>
                  </b-card>
                  <div class="form-item">
                    <div class="form-item-wrap-small">
                      <input type="button" class="form-item-input" value="DELETE">
                      <input type="button" class="form-item-input" value="SAVE" @click="saveNewEdit()" style="margin-left: 8px; background: #ea5548">
                    </div>
                </div>
                </b-collapse>
              </li>
            </ul>
          </b-tab>
          <!-- DONE -->
          <b-tab title="DONE">
            <ul class="list-group accordion" role="tablist">
              <li class="list-item d-flex flex-wrap p-0">
                <div class="toggle-title-all d-flex col-6 pl-0">
                  <div class="toggle-title-orange">
                    <label for="tab-header__label">
                      <input type="radio" name="doing" class="tab-header__input" value="1">
                      <img src="../../public/img/icons/apple-touch-icon-60x60.png">
                    </label>
                  </div>
                  <div class="toggle-title">
                    <div class="toggle-title-name">Original Task</div>
                    <div class="toggle-title-time d-flex">
                      <div class="toggle-title-time-circle"></div>
                      <div class="toggle-title-time-circle"></div>
                      <div class="toggle-title-time-circle"></div>
                      <div class="toggle-title-time-circle"></div>
                    </div>
                  </div>
                </div>
                <div class="toggle-btn d-flex col-6 justify-content-end" >
                  <b-button v-b-toggle.collapse-a><i class="pi pi-ellipsis-h"></i></b-button>
                </div>
                <!-- 按下按鈕顯示的內容 -->
                <b-collapse id="collapse-a" class="hideContent col-12" role="tabpanel" accordion="my-accordion" style="z-index: 999">
                  <div class="form-item">
                    <div class="form-item-wrap-small">
                      <input type="button" class="form-item-input" value="ARCHIVE">
                      <input type="button" class="form-item-input" value="REDO" style="margin-left: 8px; background: #ea5548">
                    </div>
                  </div>
                </b-collapse>
              </li>
            </ul>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      editedItem: '',
      labelLength: 10
    }
  },
  computed: {
    list () {
      console.log(this.$store.getters.list)
      return this.$store.getters.list
    },
    list2 () {
      return this.$store.state.list
    }
  },
  methods: {
    saveNewEdit () {
      this.$store.commit('newEdit', this.editedItem)
    },
    openSidebar (idx) {
      console.log(this.list2[idx].collapseindex)
      this.$root.$emit('bv::toggle::collapse', this.list2[idx].collapseindex)
    }
  }
}
</script>
