Component({
  options: {
      addGlobalClass: true
  },
  properties: {
      direction: {
          type: String,
          value: 'row'
      },
      ui: {
          type: String,
          value: ''
      },
      arrow: {
          type: Boolean,
          value: false
      },
      number: {
          type: Boolean,
          value: true
      },
      column: {
          type: Boolean,
          value: false
      },
      cur: {
          type: Number,
          value: 0
      },
      curStyle: {
          type: String,
          value: 'ui-TC-Main'
      },
      err: {
          type: Number,
          value: 0
      },
      info: {
          type: Array,
          value: [
            {
              title: '跳槽',
              icon: '_icon-check-round',
          },
          {
              title: '涨薪',
              icon: '_icon-check-round',
          },
          {
              title: '宜居',
          },
          {
              title: '购房',
              icon: '_icon-waiting',
          },
          {
            title: '就业',
            icon: '_icon-waiting',
          },
          {
            title: '定居',
            icon: '_icon-waiting',
          },
          ]
      }
  },
  methods:{
    emitNow(e){
      console.log('e',e.currentTarget.dataset)
      const { currentTarget:{ dataset:{item}}} = e
      this.triggerEvent('toggle', item)
    }
  }
})