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
          longitude:120.74273407,  //默认定位经度
          latitude: 31.27165519,  //默认定位纬度
          markers: [
            {
              id: 1,
              title:"FB142",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27474460,
              longitude: 120.73832452,
              width: 23,
              height: 23
            },
            {
              id: 2,
              title:"FB141",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27453456,
              longitude: 120.73835671,
              width: 23,
              height: 23
            },
            {
              id: 3,
              title:"FB140",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27463543,
              longitude: 120.73842645,
              width: 23,
              height: 23
            },
            {
              id: 4,
              title:"FB137",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27458041,
              longitude: 120.73845327,
              width: 23,
              height: 23
            },
            {
              id: 5,
              title:"FB136",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27464001,
              longitude: 120.73849082,
              width: 23,
              height: 23
            },
            {
              id: 6,
              title:"FB132",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27461709,
              longitude: 120.73850691,
              width: 23,
              height: 23
            },
            {
              id: 7,
              title:"FB125",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27461709,
              longitude: 120.73858738,
              width: 23,
              height: 23
            },
            {
              id: 8,
              title:"FB116",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27464918,
              longitude: 120.73865175,
              width: 23,
              height: 23
            },
            {
              id: 9,
              title:"FB115",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27460792,
              longitude: 120.73868394,
              width: 23,
              height: 23
            },
            {
              id: 10,
              title:"FB114",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27470420,
              longitude: 120.73862493,
              width: 23,
              height: 23
            },
            {
              id: 11,
              title:"FB109",
              iconPath: "/icon/教室icon.png",
              latitude: 31.27480507,
              longitude: 120.73872685,
              width: 23,
              height: 23
            },
            {
              id: 12,
              title:"BSG56",
              iconPath: "/icon/教室icon.png",
              latitude: 31.26998622,
              longitude: 120.73922038,
              width: 23,
              height: 23
            },
            {
              id: 13,
              title:"BSG54",
              iconPath: "/icon/教室icon.png",
              latitude: 31.26992203,
              longitude: 120.73926330,
              width: 23,
              height: 23
            },
            {
              id: 14,
              title:"BSG40",
              iconPath: "/icon/教室icon.png",
              latitude: 31.26968360,
              longitude: 120.73924184,
              width: 23,
              height: 23
            },
            {
              id: 15,
              title:"BSG38",
              iconPath: "/icon/教室icon.png",
              latitude: 31.26950936,
              longitude: 120.73928475,
              width: 23,
              height: 23
            },
            {
              id: 16,
              title:"BSG33",
              iconPath: "/icon/教室icon.png",
              latitude: 31.26934430,
              longitude: 120.73932767,
              width: 23,
              height: 23
            },
            {
              id: 17,
              title:"BSG21",
              iconPath: "/icon/教室icon.png",
              latitude: 31.26912421,
              longitude: 120.73967099,
              width: 23,
              height: 23
            },
            {
              id: 90,
              title:"文星A04北",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27892222,
              longitude: 120.74179530,
              width: 23,
              height: 23
            },
            {
              id: 18,
              title:"文星A04北",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27714793,
              longitude: 120.74091017,
              width: 23,
              height: 23
            },
            {
              id: 19,
              title:"文星MBA西",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27714793,
              longitude: 120.74091017,
              width: 23,
              height: 23
            },
            {
              id: 20,
              title:"99酒吧旁（不是广告）",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27454373,
              longitude: 120.73943496,
              width: 23,
              height: 23
            },
            {
              id: 21,
              title:"西浦国际会议中心东（不是广告）",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27478215,
              longitude: 120.74155390,
              width: 23,
              height: 23
            },
            {
              id: 22,
              title:"EE-1F",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27216872,
              longitude: 120.74110866,
              width: 23,
              height: 23
            },
            {
              id: 23,
              title:"SC-1F",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27255844,
              longitude: 120.73986411,
              width: 23,
              height: 23
            },
            {
              id: 24,
              title:"CB东",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27296651,
              longitude: 120.73878050,
              width: 23,
              height: 23
            },
            {
              id: 25,
              title:"FB对面麦瑞克旁(不是广告)",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27601548,
              longitude: 120.73834598,
              width: 23,
              height: 23
            },
            {
              id: 26,
              title:"翰林曾氏姜撞奶向南走约50米（不是广告）",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27539881,
              longitude: 120.74655622,
              width: 23,
              height: 23
            },
            {
              id: 27,
              title:"HS-1F",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.26946351,
              longitude: 120.74111938,
              width: 23,
              height: 23
            },
            {
              id: 28,
              title:"文荟B6楼下",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.26861067,
              longitude: 120.75094700,
              width: 23,
              height: 23
            },
            {
              id: 29,
              title:"文萃南",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.26310827,
              longitude: 120.74751377,
              width: 23,
              height: 23
            }, 
            {
              id: 30,
              title:"GM-1F",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27033240,
              longitude: 120.74323028,
              width: 23,
              height: 23
            },
            {
              id: 31,
              title:"PB-1F",
              iconPath: "/icon/充电桩icon.png",
              latitude: 31.27355912,
              longitude: 120.74104965,
              width: 23,
              height: 23
            },
          ],
        });
      }
    })
  },
})