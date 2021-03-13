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
        id: 1,
        title:"MA501;MA401;MA301;MA201",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27359006,
          longitude: 120.74204743,
        width: 23,  
        height: 23  
      },
      {
        id: 2,
        title:"MA104旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27356026,
          longitude: 120.74209034,
        width: 23,  
        height: 23  
      },
      {
        id: 3,
        title:"MA139旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27309260,
          longitude: 120.74213326,
        width: 23,  
        height: 23  
      },
      {
        id: 4,
        title:"MB241旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27310406,
          longitude: 120.74196428,
        width: 23,  
        height: 23  
      },
      {
        id: 5,
        title:"PB001（-1F）",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27346398,
          longitude: 120.74121863,
        width: 23,  
        height: 23  
      },
      {
        id: 6,
        title:"P215旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27346856,
          longitude: 120.74095845,
        width: 23,  
        height: 23  
      },
      {
        id: 7,
        title:"P306",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27348232,
          longitude: 120.74129909,
        width: 23,  
        height: 23  
      },
      {
        id: 8,
        title:"P408旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27350754,
          longitude: 120.74102283,
        width: 23,  
        height: 23  
      },
      {
        id: 9,
        title:"PB001（-1F）",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27346398,
          longitude: 120.74121863,
        width: 23,  
        height: 23  
      },
      {
        id: 10,
        title:"EB106旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27264785,
          longitude: 120.74245512,
        width: 23,  
        height: 23  
      },
      {
        id: 11,
        title:"EB517",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27264785,
          longitude: 120.74200183,
        width: 23,  
        height: 23  
      },
      {
        id: 12,
        title:"EB482",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27214808,
          longitude: 120.74183553,
        width: 23,  
        height: 23  
      },
      {
        id: 14,
        title:"EB311旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27271892,
          longitude: 120.74232370,
        width: 23,  
        height: 23  
      },
      {
        id: 15,
        title:"EB376旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27220769,
          longitude: 120.74201256,
        width: 23,  
        height: 23  
      },
      {
        id: 16,
        title:"EB281旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27214808,
          longitude: 120.74195892,
        width: 23,  
        height: 23  
      },
      {
        id: 17,
        title:"EB211旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27262722,
          longitude: 120.74239343,
        width: 23,  
        height: 23  
      },
      {
        id: 18,
        title:"EE418旁;EE318旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27215995,
          longitude: 120.74108183,
        width: 23,  
        height: 23  
      },
      {
        id: 19,
        title:"EE209",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27224208,
          longitude: 120.74122131,
        width: 23,  
        height: 23  
      },
      {
        id: 20,
        title:"EE101",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27223749,
          longitude: 120.74141979,
        width: 23,  
        height: 23  
      },
      {
        id: 21,
        title:"IRG11旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27066023,
          longitude: 120.73999822,
        width: 23,  
        height: 23  
      },
      {
        id: 22,
        title:"ASG18",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27073359,
          longitude: 120.73918819,
        width: 23,  
        height: 23  
      },
      {
        id: 23,
        title:"BSG41旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26992661,
          longitude: 120.73931158,
        width: 23,  
        height: 23  
      },
      {
        id: 25,
        title:"BSG13旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26900958,
          longitude: 120.73995531,
        width: 23,  
        height: 23  
      },
      {
        id: 24,
        title:"BS513旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26897978,
          longitude: 120.74010283,
        width: 23,  
        height: 23  
      },
      {
        id: 26,
        title:"BS528旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26926635,
          longitude: 120.73968709,
        width: 23,  
        height: 23  
      },
      {
        id: 27,
        title:"BS574旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26978676,
          longitude: 120.73926866,
        width: 23,  
        height: 23  
      },
      {
        id: 28,
        title:"BS4114旁;BS3114旁;BS2114旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26980511,
          longitude: 120.73924184,
        width: 23,  
        height: 23  
      },
      {
        id: 29,
        title:"BS477旁;BS377旁（有冰箱&微波炉）",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26905085,
          longitude: 120.73973268,
        width: 23,  
        height: 23  
      },
      {
        id: 30,
        title:"BS448;BS348;BS248",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26903251,
          longitude: 120.74006259,
        width: 23,  
        height: 23  
      },
      {
        id: 31,
        title:"BS134A旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26916318,
          longitude: 120.73963344,
        width: 23,  
        height: 23  
      },
      {
        id: 32,
        title:"ESG116旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26840433,
          longitude: 120.73981583,
        width: 23,  
        height: 23  
      },
      {
        id: 33,
        title:"ES117旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26847082,
          longitude: 120.74003845,
        width: 23,  
        height: 23  
      },
      {
        id: 34,
        title:"DB大厅",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26888349,
          longitude: 120.74136347,
        width: 23,  
        height: 23  
      },
      {
        id: 35,
        title:"DB201旁;DB301旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26893851,
          longitude: 120.74158341,
        width: 23,  
        height: 23  
      },
      {
        id: 34,
        title:"DB324A",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26879866,
          longitude: 120.74107915,
        width: 23,  
        height: 23  
      },
      {
        id: 35,
        title:"GMG04旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27024757,
          longitude: 120.74291378,
        width: 23,  
        height: 23  
      },
      {
        id: 36,
        title:"GM304瑜伽房旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27062813,
          longitude: 120.74291378,
        width: 23,  
        height: 23  
      },
      {
        id: 37,
        title:"GM316;GM216;GM1F羽毛球旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27072213,
          longitude: 120.74291512,
        width: 23,  
        height: 23  
      },
      {
        id: 38,
        title:"GM2F桌球旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27069576,
          longitude: 120.74287489,
        width: 23,  
        height: 23  
      },
      {
        id: 39,
        title:"HSG06旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26933054,
          longitude: 120.74103355,
        width: 23,  
        height: 23  
      },
      {
        id: 40,
        title:"HS126",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26952541,
          longitude: 120.74122398,
        width: 23,  
        height: 23  
      },
      {
        id: 41,
        title:"IAG25(有冰箱)",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27047453,
          longitude: 120.74102283,
        width: 23,  
        height: 23  
      },
      {
        id: 42,
        title:"IA110",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.26933054,
          longitude: 120.74103355,
        width: 23,  
        height: 23  
      },
      {
        id: 43,
        title:"SB214旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27304675,
          longitude: 120.73992848,
        width: 23,  
        height: 23  
      },
      {
        id: 44,
        title:"SA254旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27348003,
          longitude: 120.73978096,
        width: 23,  
        height: 23  
      },
      {
        id: 45,
        title:"SA336旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.273590,
          longitude: 120.740116,
        width: 23,  
        height: 23  
      },
      {
        id: 46,
        title:"SB350旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27297568,
          longitude: 120.73981851,
        width: 23,  
        height: 23  
      },
      {
        id: 47,
        title:"SC252旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27259512,
          longitude: 120.73971123,
        width: 23,  
        height: 23  
      },
      {
        id: 48,
        title:"SD240A",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27215496,
          longitude: 120.74006259,
        width: 23,  
        height: 23  
      },
      {
        id: 49,
        title:"SD352旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27214350,
          longitude: 120.73981315,
        width: 23,  
        height: 23  
      },
      {
        id: 50,
        title:"SC340旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27260659,
          longitude: 120.73991507,
        width: 23,  
        height: 23  
      },
      {
        id: 51,
        title:"SC160旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27259971,
          longitude: 120.73953956,
        width: 23,  
        height: 23  
      }, 
       {
        id: 52,
        title:"CB3F;CB4F;CB5F",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27274184,
          longitude: 120.73788598,
        width: 23,  
        height: 23  
      },
      {
        id: 53,
        title:"CB918;CB818;CB718;CB618",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27275674,
          longitude: 120.73794097,
        width: 23,  
        height: 23  
      },
      {
        id: 54,
        title:"CB119E",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27298943,
          longitude: 120.73806167,
        width: 23,  
        height: 23  
      },
      {
        id: 55,
        title:"CBG13W旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27305821,
          longitude: 120.73778003,
        width: 23,  
        height: 23  
      },
      {
        id: 56,
        title:"FB180;FB280;FB380;FB480;FB580;FB680",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27465606,
          longitude: 120.73758423,
        width: 23,  
        height: 23  
      },
      {
        id: 57,
        title:"FB124;FB224;;FB324;FB424;FB524;FB624",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27465606,
          longitude: 120.73852837,
        width: 23,  
        height: 23  
      },
      {
        id: 58,
        title:"FB704旁;FB804旁",
        iconPath: "/icon/饮水机icon.png",
          latitude: 31.27459187,
          longitude: 120.73821723,
        width: 23,  
        height: 23  
      },
        ],
        });
      }
    })
  },
})