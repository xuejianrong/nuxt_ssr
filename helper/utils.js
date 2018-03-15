/**
 * 辅助函数
 * @author xuejiarnong
 */
export default {
  isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
  },
  /**
   *@param {Object}|{Array} object 需要遍历处理的对象或数组
   *@param {Function} callback 遍历处理回调函数
   *@param {Array} args callback回调函数的附加参数
   */
  each(object, callback, args) {
    let name;
    let i = 0;
    const length = object.length;
    const isObj = length === undefined || this.isFunction(object);
    if (args) {
      if (isObj) {
        for (name in object) {
          if (callback.apply(object[name], args) === false) {
            break;
          }
        }
      } else {
        for (; i < length;) {
          if (callback.apply(object[i += 1], args) === false) {
            break;
          }
        }
      }
    } else {
      if (isObj) {
        for (name in object) {
          if (callback.call(object[name], name, object[name]) === false) {
            break;
          }
        }
      } else {
        for (let value = object[0]; i < length && callback.call(value, i, value) !== false; value = object[++i]) {
        }
      }
    }
    return object;
  },
  /**
   *@param {Number} type rem需要初始化的h5类型，0 普通全屏、1 悬浮窗
   */
  remInit(type = 0) {
    function init(){
      var docEl = document.documentElement;

      window.addEventListener('resize', function () {
        refreshRem(docEl);
      });

      refreshRem(docEl);
    }
    function refreshRem(docEl){
      var innerW = window.innerWidth
      var getW = document.documentElement.getBoundingClientRect().width
      var clientW = document.documentElement.clientWidth
      var arr = [innerW, getW, clientW]
      var width = arr[0]
      for (var i = 0; i < arr.length; i=i+1) {
        if (arr[i] !== undefined && width > arr[i]) {
          width = arr[i]
        }
      }

      switch (type) {
        case 0:
          if (width > 750) {
            // 最大宽度
            width = 750;
          }
          var rem = width / 20; // 将屏幕宽度分成20份， 1份为1rem
          break
        case 1:
          if (width > 200 || width < 80) {
            width = 135
          }
          var rem = width / 6 ; // 将屏幕宽度分成5份， 1份为1rem
          break
        default:
          if (width > 750) {
            // 最大宽度
            width = 750;
          }
          var rem = width / 20; // 将屏幕宽度分成20份， 1份为1rem
      }

      docEl.style.fontSize = rem + 'px';
    }
    init();
  }
}