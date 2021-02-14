"use.strict"
{
  new Vue({
    el: "#app",
    methods: {
      increment: function(){
        this.counter++;
      },
      clickdog: function(){
        this.imagepath = "https://tk.ismcdn.jp/mwimgs/e/b/1140/img_eb31afc9c1fb914d68a7c73b657c7ebe183087.jpg";
      },
      clickcat: function(){
        this.imagepath = "https://dol.ismcdn.jp/mwimgs/a/f/-/img_afa0fad37e6c4d5ce34c01faf54f9e79108563.jpg";
      },
      wideimage: function(){
        this.width = "600px"; 
      },
      devide: function(){
        // boolean値をひっくり返す「!」
        this.styleObject.warning = !this.styleObject.warning;
      },
      change: function() {
        this.formDisplay = !this.formDisplay
      }
    },
    data: {
      selected: null,
      friends: [
        {
          id: 1,
          name: "吉田",
        },
        {
          id: 2,
          name: "山田",
        },
        {
          id: 3,
          name: "木村",
        },
        {
          id: 4,
          name: "鈴木",
        },
        {
          id: 5,
          name: "青木",
        }
      ],
      agree: [],
      article: "",
      formDisplay: "false",
      warningClass: "warning1",
      styleObject: {
        warning: false,
      },
      url: "https://jp.vuejs.org/v2/guide/",
      counter: 0,
      imagepath: "",
      width: "300px",
      persons: [
        {
        name : "吉田",
        age : 24,
        address: {
          prefecture: "埼玉県",
          city: "所沢市",
          town: "上新井",
        }
      },
        {
        name : "佐藤",
        age : 24,
        address: {
          prefecture: "埼玉県",
          city: "所沢市",
          town: "上新井",
        }
      },
        {
        name : "鈴木",
        age : 24,
        address: {
          prefecture: "埼玉県",
          city: "所沢市",
          town: "上新井",
        }
      },
    ]
    }
  })
}