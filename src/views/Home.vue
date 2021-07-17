<template>
  <div class="container-fluid p-0 m-0 h-100">
    <!-- 右邊 -->
    <input type="checkbox" id="toggle_sidebar">
    <Sidebar></Sidebar>
    <!-- 左邊 -->
    <div class="main">
      <div class="main-content-row">
          <!-- header ------------------------------>
          <div class="main-content-col-header">
            <!-- 任務名稱 -->
            <div class="header">
              <div class="header-task-name">My First Task</div>
              <div class="header-tomato-number">
                  <span class="tomato"></span>
                  <span class="tomato"></span>
                  <span class="tomato"></span>
                  <span class="tomato"></span>
              </div>
            </div>
          </div>
          <!-- body ---------------------------------->
          <div class="main-content-col-body">
            <div class="body">
              <div class="body-row">
                <div class="body-col p-py-2">
                  <!-- 計時器 -->
                  <div class="body-timer">
                    <div class="body-clock">
                      <div class="timer">25:00</div>
                    </div>
                  </div>
                </div>
                <div class="body-col p-py-4">
                  <!-- 按鈕 -->
                  <div class="body-btns">
                    <div class="body-btns-row">
                      <div class="body-btns-col">
                        <div class="btn"><font-awesome-icon icon="play" /></div>
                      </div>
                      <div class="body-btns-col">
                        <div class="btn"><font-awesome-icon icon="pause"/></div>
                      </div>
                      <div class="body-btns-col">
                        <div class="btn"><font-awesome-icon icon="redo-alt"/></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="body-col p-py-1">
                  <!-- 完成狀態 -->
                  <div class="body-complete">
                    <label class="body-complete-label">
                      <input type="checkbox" class="body-complete-checkbox">
                      <span class="complete-item-check"></span>
                      <span class="complete-item-text">&nbsp;TASK COMPLETE</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- footer ----------------------------------->
          <div class="main-content-col-footer">
            <!-- PODOMORO -->
            <div class="footer">
              <div class="footer-text">POMODORO</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
  name: 'home',
  components: {
    Sidebar
  }
}
</script>
