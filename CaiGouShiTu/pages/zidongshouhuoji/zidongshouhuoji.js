const app = getApp()

Page({
  data: {
    
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }o
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  onLoad: function () {
    var self=this;
    this.mapCtx = wx.createMapContext('myMap');
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        self.setData({
          longitude:120.74038982,  //默认定位经度
    latitude: 31.27211370,  //默认定位纬度
          
    markers: [
   
      {
        id: 1,
        title:"MA104旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27356026,
          longitude: 120.74209034,
        width: 23,  
        height: 23  
      },
      {
        id: 10,
        title:"EB106旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27264785,
          longitude: 120.74245512,
        width: 23,  
        height: 23  
      },
      {
        id: 20,
        title:"EE101",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27223749,
          longitude: 120.74141979,
        width: 23,  
        height: 23  
      },
      {
        id: 19,
        title:"IRG10旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27055248,
          longitude: 120.74004114,
        width: 23,  
        height: 23  
      },
      {
        id: 21,
        title:"南宏愿",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27025674,
          longitude: 120.74043810,
        width: 23,  
        height: 23  
      },
      {
        id: 23,
        title:"BSG41旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.26992661,
          longitude: 120.73931158,
        width: 23,  
        height: 23  
      },
      {
        id: 33,
        title:"ESG大厅",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.26850521,
          longitude: 120.74018061,
        width: 23,  
        height: 23  
      },
      {
        id: 39,
        title:"HSG06旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.26933054,
          longitude: 120.74103355,
        width: 23,  
        height: 23  
      },
      {
        id: 38,
        title:"DBG大厅",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.26888349,
          longitude: 120.74136347,
        width: 23,  
        height: 23  
      },
      {
        id: 37,
        title:"南北通道北端",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27200366,
          longitude: 120.74059904,
        width: 23,  
        height: 23  
      },
      {
        id: 49,
        title:"SA164旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27349607,
          longitude: 120.73945910,
        width: 23,  
        height: 23  
      },
      {
        id: 40,
        title:"SC140旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27260429,
          longitude: 120.74010551,
        width: 23,  
        height: 23  
      },
      {
        id: 50,
        title:"SD154旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27210453,
          longitude: 120.73951811,
        width: 23,  
        height: 23  
      },
      {
        id: 51,
        title:"CB3F大斜坡旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27280718,
          longitude: 120.73776796,
        width: 23,  
        height: 23  
      },
      {
        id: 52,
        title:"FB1F大厅西",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27454602,
          longitude: 120.73785782,
        width: 23,  
        height: 23  
      },
      {
        id: 53,
        title:"CB153旁",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27273955,
          longitude: 120.73810995,
        width: 23,  
        height: 23  
      },
      {
        id: 54,
        title:"文星A03楼下",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27785856,
          longitude: 120.74236929,
        width: 23,  
        height: 23  
      },
      {
        id: 55,
        title:"文星A04楼下",
        iconPath: "/icon/自动售货机icon.png",
          latitude: 31.27831245,
          longitude: 120.74179530,
        width: 23,  
        height: 23  
      },
       ],
        });
      }
    })
  },
})