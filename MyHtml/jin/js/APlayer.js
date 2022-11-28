!(function () {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById("aplayer"),
      fixed: true, //是否附着页面底部，否为false
      autoplay: false, //是否自动播放，否为false,移动端不能生效
      volume: 0.6, //初始音量（0~1）
      lrcType: 3, //歌词模式（1、HTML模式 2、js模式 3、lrc文件模式）
      mutex: true, //互斥模式：阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
      order: "random", //音频循环顺序（'list'：顺序, 'random'：随机）
      preload: "none", //预加载（'none'：不预加载, 'metadata'：元数据, 'auto'：自动）
      listFolded: true, //列表默认折叠，开启为true
      theme: "#ee8243", //主题颜色
      audio: [
        // {
        //   name: "name", //歌曲名称
        //   artist: "artist", //歌曲作者
        //   url: "url.mp3", //歌曲源文件地址
        //   cover: "cover.jpg", //歌曲封面地址
        //   lrc: "lrc.lrc", //歌曲的歌词文件
        //   theme: "#eeeeee", //主题颜色（优先）
        // },
        // {
        //   name: "あの夢をなぞって", //歌曲名称
        //   artist: "yoasobi", //歌曲作者
        //   url: "https://music.163.com/song/media/outer/url?id=1417236632", //歌曲源文件地址
        //   cover:
        //     "https://p2.music.126.net/lX06lnoMCH8x18XqC4j5yg==/109951164632728541.jpg?param=130y130", //歌曲封面地址
        //   lrc: "https://cdn.back2me.cn/lrc/%E3%81%82%E3%81%AE%E5%A4%A2%E3%82%92%E3%81%AA%E3%81%9E%E3%81%A3%E3%81%A6.lrc", //歌曲的歌词文件
        //   theme: "#eeeeee", //主题颜色（优先）
        // },
        // {
        //   title: "半岛铁盒",
        //   author: "周杰伦",
        //   url: "https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒.mp3",
        //   pic: "https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒-mp3-image.png",
        // },
        {
          name: "半岛铁盒",
          artist: "周杰伦",
          url: "https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒.mp3",
          cover:
            "https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒-mp3-image.png",
          lrc: "https://ipfs-gateway.cloud/ipfs/QmNubz8HVnJLkAMvFX1PW52BrFoDXeYZgVAWtyCkYUJ78f?filename=半岛铁盒_歌词.lrc",
          theme: "#eeeeee", //主题颜色（优先）
        },
      ],
    });
  };
})();
