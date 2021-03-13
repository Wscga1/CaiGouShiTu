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
            //打印机1号
            {
              id: 0,
              title:"MA501",
              iconPath: "/icon/打印机icon.png",
                latitude: 31.27360382,
                longitude: 120.74204743,
              width: 23,  //图片显示宽度
              height: 23  //图片显示高度
            },
          
              {
                id: 1,
                title:"EB367",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27223520,
                longitude: 120.74240148,
                width: 23,
                height: 23
              },
            
              {
                id: 2,
                title:"EB506",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27270287,
                longitude: 120.74251145,
                width: 23,
                height: 23
              },
            
            {
              id: 3,
              title:"AS128",
              iconPath: "/icon/打印机icon.png",
              latitude: 31.27047683,
              longitude: 120.73918819,
              width: 23,
              height: 23
            },
            //打印机5号
              {
                id: 4,
                title:"AS222",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27060521,
                longitude: 120.73901653,
                width: 23,
                height: 23
              },
            //打印机6号 
               {
                id: 5,
                title:"BS448;BS248 ",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.26903251,
                 longitude: 120.74006259,
                width: 23,
                height: 23
              },
            
              {
                id: 6,
                title:"ES103",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.26854877,
                longitude: 120.74022621,
                width: 23,
                height: 23
              },
          
              {
                id: 7,
                title:"BS3115",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.26996788,
                longitude: 120.73937863,
                width: 23,
                height: 23
              },
            
               {
                id: 8,
                title:"DB106A",
                iconPath: "/icon/打印机icon.png",
                 latitude: 31.26886744,
                 longitude: 120.74163437,
                width: 23,
                height: 23
              },
          
              {
                id:9 ,
                title:"DB2F;DB3F",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.26891329,
                longitude: 120.74153518,
                width: 23,
                height: 23
              },
              {
                id: 10,
                title:"GM2F桌球室旁",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27062470,
                longitude: 120.74288964,
                width: 23,
                height: 23
              },
              {
                id: 10,
                title:"GM健身区旁",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.270078,
                longitude: 120.743179,
                width: 23,
                height: 23
              },
              {
                id: 11,
                title:"HS127",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.26952541,
                longitude: 120.74122399,
                width: 23,
                height: 23
              },
              {
                id: 12,
                title:"SD323旁",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27214350,
                longitude: 120.74025840,
                width: 23,
                height: 23
              },
              {
                id: 13,
                title:"SC321",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27255157,
                longitude: 120.74015379,
                width: 23,
                height: 23
              },
              {
                id: 14,
                title:"CB3F;CB4F;CB5F",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27287939,
                longitude: 120.73798120,
                width: 23,
                height: 23
              },
              {
                id:15,
                title:"CB1F",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27274872,
                longitude: 120.73804557,
                width: 23,
                height: 23
              },
              {
                id: 16,
                title:"CB108E旁",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27298026,
                longitude: 120.73801875,
                width: 23,
                height: 23
              },
              {
                id: 17,
                title:"FB323",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27457812,
                longitude: 120.73854715,
                width: 23,
                height: 23
              },
              {
                id: 424,
                title:"SC 5L",
                iconPath: "/icon/打印机icon.png",
                latitude: 31.27259971,
                longitude: 120.74010149,
                width: 23,
                height: 23
              },
            ],
        });
      }
    })
  },
})