document.onkeydown = function () {
  var e = window.event || arguments[0];
  if (e.keyCode == 123) {
    alert("禁止");
    return false;
  } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    alert("禁止");
    return false;
  } else if (e.ctrlKey && e.keyCode == 85) {
    alert("禁止");
    return false;
  } else if (e.ctrlKey && e.keyCode == 83) {
    alert("禁止");
    return false;
  }
};
document.oncontextmenu = function () {
  alert("禁止打开右键哦，复制请按Ctrl+C");
  // 刷新页面
  // window.location.reload();
  return false;
};
//   (function () {
//     var re = /x/;
//     var i = 0;
//     console.log(re);

//     re.toString = function () {
//       return "第 " + ++i + " 次打开控制台";
//     };
//   })();
!(function () {
  var _0x1cbb = ["tor", "struc", "call", "ger", "con", "bug", "de", "apply"];
  setInterval(check, 2e3);
  function check() {
    function doCheck(_0x1834ff) {
      if (
        ("" + _0x1834ff / _0x1834ff)["length"] !== 0x1 ||
        _0x1834ff % 0x14 === 0x0
      ) {
        (function () {
          return !![];
        }
          [_0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]](
            _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
          )
          [_0x1cbb[0x2]]());
      } else {
        (function () {
          return ![];
        }
          [_0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]](
            _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
          )
          [_0x1cbb[0x7]]());
      }
      doCheck(++_0x1834ff);
    }
    try {
      doCheck(0);
    } catch (err) {}
  }
})();
