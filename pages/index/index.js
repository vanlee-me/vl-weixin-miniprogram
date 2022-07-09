// index.js
Page({
  data:{
    cur:0,
    arrow:false,
    number:true,
    info: [
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

    ],
 
  },
  onLoad(){
    
  },
  handleToogle({detail}){
    console.log('detail',detail)
    const { index} = detail
    let { cur  } =  this.data
    this.setData({
      cur:index
    })
  }
})
