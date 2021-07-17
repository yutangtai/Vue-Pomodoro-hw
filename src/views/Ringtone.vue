<template>
<div class="nav-content">
  <div class="content-title">RING TONE</div>
    <hr>
    <div class="content" style="padding-top: 30px">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="WORK" active>
            <ul class="list-group accordion" role="tablist">
              <li class="list-item d-flex p-0" v-for="(item, index) in workMusic" :key="index">
                <div class="toggle-title-all d-flex">
                  <div class="toggle-title-orange">
                    <label for="tab-header__label">
                      <input type="radio" name="doing" class="tab-header__input" value="1">
                      <a href="#" v-if='sound === item.src'><i class="pi pi-circle-on" style="fontSize: 13px; color: #EA5548"></i></a>
                      <a href="#" v-else><i class="pi pi-circle-off" style="fontSize: 13px; color: #EA5548"></i></a>
                    </label>
                  </div>
                  <div class="toggle-title d-flex align-items-center">
                    <div class="toggle-title-name">{{ item.title }}</div>
                  </div>
                </div>
                <div class="toggle-btn d-flex ml-auto">
                  <b-button @click.prevent="playWorkAudio(item.src)"><font-awesome-icon icon="play-circle" style="color: #ACACAC" /></b-button>
                </div>
              </li>
            </ul>
          </b-tab>
          <b-tab title="BREAK">
            <ul class="list-group accordion" role="tablist">
              <li class="list-item d-flex p-0" v-for="(item, index) in breakMusic" :key="index">
                <div class="toggle-title-all d-flex">
                  <div class="toggle-title-orange">
                    <label for="tab-header__label">
                      <input type="radio" name="doing" class="tab-header__input" value="1">
                      <a href="#" v-if='sound1 === item.src'><i class="pi pi-circle-on" style="fontSize: 13px; color: #EA5548"></i></a>
                      <a href="#" v-else><i class="pi pi-circle-off" style="fontSize: 13px; color: #EA5548"></i></a>
                    </label>
                  </div>
                  <div class="toggle-title d-flex align-items-center">
                    <div class="toggle-title-name">{{ item.title }}</div>
                  </div>
                </div>
                <div class="toggle-btn d-flex ml-auto" >
                  <b-button @click.prevent="playBreakAudio(item.src)"><font-awesome-icon icon="play-circle" style="color: #ACACAC" /></b-button>
                </div>
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
  name: 'ringtone',
  data () {
    return {
      workMusic: [
        {
          title: 'Freedom',
          src: 'Freedom.mp3',
          selected: true,
          isPlay: false
        },
        {
          title: 'Morning Lights',
          src: 'MorningLights.mp3',
          selected: false,
          isPlay: false
        },
        {
          title: 'Solo Acoustic Guitar',
          src: 'SoloAcousticGuitar.mp3',
          selected: false,
          isPlay: false
        },
        {
          title: 'Pick Up The Phone',
          src: 'PickUpThePhone.mp3',
          selected: false,
          isPlay: false
        }
      ],
      breakMusic: [
        {
          title: 'Attention',
          src: 'Attention.mp3',
          selected: true,
          isPlay: false
        },
        {
          title: 'Careless Whisper',
          src: 'CarelessWhisper.mp3',
          selected: false,
          isPlay: false
        },
        {
          title: 'See You Again',
          src: 'SeeYouAgain.mp3',
          selected: true,
          isPlay: false
        }
      ]
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
    },
    sound1 () {
      return this.$store.state.sound1
    }
  },
  methods: {
    playWorkAudio (item) {
      if (item === 'none') {
        if (this.audio) this.audio.pause()
        this.audio = null
      } else {
        if (this.audio) this.audio.pause()
        this.audio = new Audio(require('../assets/audio/' + item))
        this.audio.play()
      }
      this.$store.commit('playWorkSound', item)
    },
    playBreakAudio (item) {
      if (item === 'none') {
        if (this.audio) this.audio.pause()
        this.audio = null
      } else {
        if (this.audio) this.audio.pause()
        this.audio = new Audio(require('../assets/audio/' + item))
        this.audio.play()
      }
      this.$store.commit('playBreakSound', item)
    }
  }
}
</script>
