// If you like this demo visit: 
// https://github.com/zircleUI/zircleUI
// http://zircle.io

var demo = {angle: 0}

var demo1 = {angle1: 0}

const store = {
  debug: true,
  state: {
    ang: 0,
    ang1: 0,
    dist: 0,
    mov: TweenLite.to(demo, 700, {angle:365, repeat: -1, onUpdate: function () {
      store.state.ang = demo.angle
    }}),
    mov1: TweenLite.to(demo1, 700, {angle1:365, repeat: -1, onUpdate: function () {
      store.state.ang1 = demo1.angle1
    }}),
    ecosystem: [
      {name: 'Help', icon: 'fa-question', viewName: 'help',elements: [
        {name: 'Where will be ?', url: 'http://sdu.edu.kz/ru/', icon: 'fa-map-marker'},
        {name: 'Ask question', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com', icon: 'fa-comment'}
        ]},
      {name: 'Syllabus', icon: 'fa-book', viewName: 'tooling', elements: [
        {name: 'PDF Format', url: 'https://www.unl.edu/gradstudies/current/teaching/Syllabus_Sample.pdf', icon: 'fa-th-list'},
        {name: 'Download Excel format', url: 'https://www.unl.edu/gradstudies/current/teaching/Syllabus_Sample.pdf', icon: 'fa-table'},
        {name: 'Ask question', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com', icon: 'fa-question'}]
      },
      {name: 'What you need to know', icon: 'fa-star', viewName: 'core',elements: [
        {name: 'Statistics', icon: 'fa-pencil'},
        {name: 'Calculus', icon: 'fa-exchange'},
        {name: 'Python', icon: 'fa-code'}
        ]},
      {name: 'About teachers', icon: 'fa-user', viewName: 'news', elements: [
        {name: 'Merarslan Meraliev', url: 'https://www.linkedin.com/', icon: 'fa-linkedin'},
        {name: 'Contact with us', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com', icon: 'fa-comment'},
        {name: 'Temir Yerlan', url: 'https://www.linkedin.com/', icon: 'fab fa-linkedin'},
        {name: 'Our works', url: 'https://vuejobs.com/?ref=vuejs', icon: 'fa-tasks'}
        ]}
    ]
  }
}

const ecosystem_template = `
<z-view class="main">

  <span><strong>{{ ecosystem.name }}</strong></span><br>

  <section slot="extension">

        <z-spot
          v-for="(element, index) in ecosystem.elements"
          class="inactive"
          :angle="(360 / ecosystem.elements.length * index) - sharedState.ang1 * 11"
          :distance="130"
          size="medium"
          @mouseover.native="active"
          @touchstart.native="active"
          @mouseout.native="inactive"
          @touchend.native="inactive"
          @click.native.prevent="this.window.open(element.url, '_blank')"
          :label="element.name"
          :key= "index">

          <i class="fa" :class="element.icon"></i>

        </z-spot>

    </section>

</z-view>`

const resources = {
  name: 'resources',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[4]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const news = {
  name: 'news',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[3]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const core = {
  name: 'core',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[2]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const tooling = {
  name: 'tooling',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[1]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const help = {
  name: 'help',
  template: ecosystem_template,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem[0]
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov1.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov1.play()
      }
    }
  },
  destroyed () {
    this.sharedState.mov.play()
  }
}

const home = {
  template: `<z-view class="main">

  <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png" width="50%" height="30%" /></span><br>
  <span><strong> Machine learning </strong></span>
  <br>


  <section slot="extension">

    <z-spot
      v-for="(element, index) in ecosystem"
      class="inactive"
      :angle="(360 / ecosystem.length * index) + sharedState.ang * 5"
      :distance="135"
      size="medium"
      :to-view="element.viewName"
      @mouseover.native="active"
      @touchstart.native="active"
      @mouseout.native="inactive"
      @touchend.native="inactive"
      :label="element.name"
      :key="index">

      <i class="fa" :class="element.icon"></i>

      <section slot="extension">

        <z-spot
          v-for="(subelement, index) in element.elements"
          style="background-color: #982934; border: none; "
          :angle="(360 / element.elements.length * index) - sharedState.ang1 * 11"
          :distance="132"
          size="xxs"
          :key="index">
        </z-spot>

      </section>

    </z-spot>

  </section>

</z-view>`,
  data () {
    return {
      sharedState: store.state,
      ecosystem: store.state.ecosystem
    }
  },
  methods: {
    active (event) {
      var target = event.target.parentElement
      if (target.classList.contains('inactive')) {
        target.classList.remove('inactive')
        target.classList.add('active')
        this.sharedState.mov.pause()
      }
    },
    inactive (event) {
      var target = event.target.parentElement
      if (target.classList.contains('active')) {
        target.classList.remove('active')
        target.classList.add('inactive')
        this.sharedState.mov.play()
      }
    }
  },
  updated () {
    var vm = this
    this.$nextTick(function () {
      if (vm.$el.classList.contains('is-previous-view') || vm.$el.classList.contains('is-past-view')) {
        vm.sharedState.mov.pause()
      }
    })
  }
}

new Vue({
  el: '#app',
  components: {
    home,
    help,
    tooling,
    resources,
    core,
    news

  },
  mounted () {
    this.$zircle.setView('home')
  }
})
