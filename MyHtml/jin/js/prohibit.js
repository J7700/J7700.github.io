document.onkeydown = function () {
  var e = window.event || arguments[0];
  if (e.keyCode == 123) { //F12
    alert("禁止");
    return false;
  } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl+Shift+I
    alert("禁止");
    return false;
  } else if (e.ctrlKey && e.keyCode == 85) { // Ctrl + U
    alert("禁止");
    return false;
  } else if (e.ctrlKey && e.keyCode == 83) { // Ctrl + S
    alert("禁止");
    return false;
  }
};
document.oncontextmenu = function () { //右键
  alert("禁止打开右键哦，复制请按Ctrl+C");
  return false;
};
