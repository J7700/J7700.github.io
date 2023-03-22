!(function () {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById("aplayer"),
      fixed: true, //是否附着页面底部，否为false
      autoplay: true, //是否自动播放，否为false,移动端不能生效
      volume: 1, //初始音量（0~1）
    //   lrcType: 3, //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
      mutex: true, //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
      order: "random", //音频循环顺序（'list'：顺序, 'random'：随机）
      preload: "none", //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
      listFolded: true, //列表默认折叠，开启为true
      theme: "#ee8243", //主题颜色
      //关闭歌词
      lrcType: 0,
      audio: [
        {
          name: "我记得",
          artist: "赵雷",
          url: "https://angeljin.oss-cn-shenzhen.aliyuncs.com/images/202303131149020.mp3",
          cover:
            "https://angeljin.oss-cn-shenzhen.aliyuncs.com/images/202303121419253.jpg",
          lrc: "https://test.quanjian.com.cn/m/api/lyric/id/m4eedd78464c21ce789dea6928415b323-3f23ee1aa352fd2dcd0500ade8a545a4-9e41f91f2cfc413a90a058cea36a6559/name/%E6%88%91%E8%AE%B0%E5%BE%97%20-%20%E8%B5%B5%E9%9B%B7",
          theme: "#eeeeee", //主题颜色（优先）
        },
        {
          name: "半岛铁盒",
          artist: "周杰伦",
          url: "https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒.mp3",
          cover:
            "https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒-mp3-image.png",
          lrc: "https://ipfs-gateway.cloud/ipfs/QmNubz8HVnJLkAMvFX1PW52BrFoDXeYZgVAWtyCkYUJ78f?filename=半岛铁盒_歌词.lrc",
        //   theme: "#eeeeee", //主题颜色（优先）
        },
      ],
    });
  };
})();
