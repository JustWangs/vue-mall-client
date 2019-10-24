
/**
 * 工具类
 * @return {[type]} [description]
 */
var util = {
    version: '1.0.0'
}
  
  /**
   * 隐藏手机和身份证中间数字，只显示前3和后4位数字，中间星号
   * @param  {[String]}  value 待处理的号码
   * @return {[String]}  处理好的号码
   */
  util.doHide = function (value) {
    var v = value.replace(/\s+/g, '').replace(/\r\n/g, '').replace(/\n/g, '')
    var reg = /^(\d{3})(\d+)(\d{4}|\d{3}(x|X))$/
    return v.replace(reg, '$1****$3')
  }
  
  /**
   * 判断密码试试符合要求,对应的验证规则是：密码中必须包含字母、数字、特称字符，至少8个字符，最多20个字符
   * @param  {[String]}  value 待验证的参数
   * @return {[String]}  ture-符合，false-不符合
   */
  util.isGoodPassword = function (value) {
    var reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }
  
  /**
   * 判断参数是否为空
   * @param  {[String]}  value 待验证的参数
   * @return {Boolean}   ture-空，false-不为空
   */
  util.isEmpty = function (value) {
    if (typeof (value) === 'undefined' || value === null || value === '') {
      return true
    } else {
      return false
    }
  }
  
  /**
   * 时间戳转日期
   *
   */
  function add0(m) { return m < 10 ? '0' + m : m }
  util.transTime = function (str) {
    if (!str) return
    const time = new Date(str)
    const y = time.getFullYear()
    const m = time.getMonth() + 1
    const d = time.getDate()
    const h = time.getHours()
    const mm = time.getMinutes()
    const s = time.getSeconds()
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
    // return y + '年' + add0(m) + '月' + add0(d) + '日'
  }
  
  /**
   * 时间戳转日期（不带时分秒）
   * 
   *  */
  util.transData = function (str) {
    if (!str) return
    const time = new Date(str)
    const y = time.getFullYear()
    const m = time.getMonth() + 1
    const d = time.getDate()
    return y + '-' + add0(m) + '-' + add0(d) + ' '
    // return y + '年' + add0(m) + '月' + add0(d) + '日'
  }
  
  /**
   * 获取当前时间
   */
  util.getNowFormatDate = function () {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var currentdate = date.getFullYear() + seperator1 + add0(date.getMonth() + 1) + seperator1 + add0(date.getDate())
      + " " + add0(date.getHours()) + seperator2 + add0(date.getMinutes())
      + seperator2 + add0(date.getSeconds());
    return currentdate;
  }
  
  /**
   * 判断手机号码格式
   * @param  {[String]}  value 待验证的参数
   * @return {Boolean}   ture-正确，false-不正确
   */
  util.isMobile = function (value) {
    var reg = /^(1+\d{10})$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }
  
  /**
   * 判断是否是数字
   * @param  {[String]}  value 待验证的参数
   * @return {Boolean}   ture-正确，false-不正确
   */
  util.isNum = function (value) {
    var reg = /^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }
  
  /**
   * 判断是否是汉字和字母
   * @param  {[String]}  value 待验证的参数
   * @return {Boolean}   ture-正确，false-不正确
   */
  util.isCharacter = function (value) {
    var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }
  
  //判断纯汉字
  util.isOnlyCharacter = function (value) {
    var reg = /^[\u4e00-\u9fa5]{0,}$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }
  //判断是否是字母或者字母
  util.isNumOrLetter = function (value) {
    var reg = /^[A-Za-z0-9]+$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }
  
  
  /**
   * 判断身份证格式
   * @param  {[String]}  value 待验证的参数
   * @return {Boolean}   ture-符合规范，false-不符合规范
   */
  util.isIdentityCard = function (value) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }
  
  /**
   * 判断邮箱格式
   * @param  {[String]}  value 待验证的参数
   * @return {Boolean}   ture-符合规范，false-不符合规范
   */
  util.isEmail = function (value) {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
  }
  
  /**
   * 根据文件名获取文件后缀。例：'xxxxx.jpg.EXE' 返回 'exe'
   * @param  {String} fileName 文件名
   * @return {String}          小写形式的后缀名
   */
  util.getFileSuffix = function (fileName) {
    var suffix = ''
    var index = fileName.lastIndexOf('.')
    if (index > -1) {
      suffix = fileName.substring(index + 1).toLowerCase()
    }
    return suffix
  }
  
  /**
   * 时间格式化
   * @param  {[Date]} date   要格式化的时间对象
   * @param  {[String]} format 格式，例如"yyyy-MM-dd HH:mm:ss"
   * @return {[String]}        格式化后的时间字符串
   */
  util.dateFormat = function (date, format) {
    var zeroPadding = function (i) {
      return (i < 10 ? '0' : '') + i
    }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (item) {
      switch (item) {
        case 'yyyy':
          return zeroPadding(date.getFullYear())
        case 'MM':
          return zeroPadding(date.getMonth() + 1)
        case 'dd':
          return zeroPadding(date.getDate())
        case 'HH':
          return zeroPadding(date.getHours())
        case 'mm':
          return zeroPadding(date.getMinutes())
        case 'ss':
          return zeroPadding(date.getSeconds())
      }
    })
  }
  
  /**
   * 获取两个日期之间的间隔天数。两个日期的格式为：yyyy-MM-dd
   * @param  {[String]} beginDate 开始日期。例：2016-01-01
   * @param  {[String]} endDate   结束日期。例：2016-07-23
   * @return {[int]}           间隔天数
   */
  util.getIntervalDays = function (beginDate, endDate) {
    var beginArr = beginDate.split('-')
    var endArr = endDate.split('-')
    var begin = new Date(beginArr[0], beginArr[1] - 1, beginArr[2]).getTime()
    var end = new Date(endArr[0], endArr[1] - 1, endArr[2]).getTime()
    var temp = (end - begin) / (1000 * 60 * 60 * 24)
    return temp
    /* if (temp < 0) {
      return temp === temp - 1
    } else {
      return temp === temp + 1
    }*/
  }
  
  /**
   * 获取URL中参数的的值
   * @param  {[String]} key 参数名称
   * @return {[String]}     参数值
   */
  util.getParameter = function (key) {
    var url = location.href
    var paraString = url.substring(url.indexOf('?') + 1, url.length).split('&')
    var paraObj = {}
    for (var i = 0, len = paraString.length; i < len; i++) {
      var j = paraString[i]
      paraObj[j.substring(0, j.indexOf('=')).toLowerCase()] = j.substring(j.indexOf('=') + 1, j.length)
    }
    var returnValue = paraObj[key.toLowerCase()]
    if (typeof (returnValue) === 'undefined') {
      return ''
    } else {
      return returnValue
    }
  }
  
  /**
   * 设置cookie值
   * @param  {[String]} key 参数名称
   * @param  {[String]} value 参数值
   * @param  {[int]} sec 是小时间。单位：秒
   * @return {[String]}
   */
  util.setCookie = function (key, value, sec) {
    var cookieStr = key + '=' + escape(value)
    if (!util.isEmpty(sec)) {
      var exp = new Date()
      exp.setTime(exp.getTime() + sec * 1000)
      cookieStr += ';expires=' + exp.toGMTString()
    }
    cookieStr += ';path=/'
    document.cookie = cookieStr
  }
  
  /**
   * 获取cookie中参数的的值
   * @param  {[String]} key 参数名称
   * @return {[String]}     参数值
   */
  util.getCookie = function (key) {
    var arr = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'))
    if (arr === null || arr === '') {
      return ''
    } else {
      return unescape(arr[2])
    }
  }
  
  /**
   * 清除cookie中的值
   * @param  {[String]} key 参数名称
   * @return
   */
  util.clearCookie = function (key) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var value = util.getCookie(key)
    if (!util.isEmpty(value)) {
      document.cookie = key + '=' + value + ';expires=' + exp.toGMTString()
    }
  }
  
  /**
   * 秒格式化。转换成：时分秒。例：4230秒 转换成 1小时10分30秒
   * @param   int seconds
   * @return  String
   */
  util.secondFormat = function (seconds) {
    var theTime = parseInt(seconds) // 秒
    var theTime1 = 0 // 分
    var theTime2 = 0 // 小时
    if (theTime > 60) {
      theTime1 = parseInt(theTime / 60)
      theTime = parseInt(theTime % 60)
      if (theTime1 > 60) {
        theTime2 = parseInt(theTime1 / 60)
        theTime1 = parseInt(theTime1 % 60)
      }
    }
    var result = '' + parseInt(theTime) + '秒'
    if (theTime1 > 0) {
      result = '' + parseInt(theTime1) + '分' + result
    }
    if (theTime2 > 0) {
      result = '' + parseInt(theTime2) + '小时' + result
    }
    return result
  }
  
  /**
   * base 64位加密解密
   */
  util.base64 = function (dir, input) {
    const publ = {}
    const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    // http://phpjs.org/functions/base64_encode/
    publ.encode = function (data) {
      data = unescape(encodeURIComponent(data))
      if (data === '') return
      let o1
      let o2
      let o3
      let h1
      let h2
      let h3
      let h4
      let bits
      let i = 0
      let ac = 0
      let enc = ''
      const tmpArr = []
      if (!data) return data
      do {
        o1 = data.charCodeAt(i++)
        o2 = data.charCodeAt(i++)
        o3 = data.charCodeAt(i++)
        bits = o1 << 16 | o2 << 8 | o3
        h1 = bits >> 18 & 0x3f
        h2 = bits >> 12 & 0x3f
        h3 = bits >> 6 & 0x3f
        h4 = bits & 0x3f
        tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4)
      } while (i < data.length)
      enc = tmpArr.join('')
      var r = data.length % 3
      return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3)
    }
    // http://phpjs.org/functions/base64_decode/
    publ.decode = function (data) {
      let o1
      let o2
      let o3
      let h1
      let h2
      let h3
      let h4
      let bits
      let i = 0
      let ac = 0
      let dec = ''
      const tmpArr = []
      if (!data) return data
      data += ''
      do { // unpack four hexets into three octets using index points in b64
        h1 = b64.indexOf(data.charAt(i++))
        h2 = b64.indexOf(data.charAt(i++))
        h3 = b64.indexOf(data.charAt(i++))
        h4 = b64.indexOf(data.charAt(i++))
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4
        o1 = bits >> 16 & 0xff
        o2 = bits >> 8 & 0xff
        o3 = bits & 0xff
        if (h3 === 64) {
          tmpArr[ac++] = String.fromCharCode(o1)
        } else if (h4 === 64) {
          tmpArr[ac++] = String.fromCharCode(o1, o2)
        } else {
          tmpArr[ac++] = String.fromCharCode(o1, o2, o3)
        }
      } while (i < data.length)
      dec = tmpArr.join('')
      return decodeURIComponent(escape(dec))
    }
    return input ? publ[dir](input) : dir ? null : publ
  }
  
  /**
   * 对内容加密
   * @param {[String]} mingwen 加密明文
   * @param {[int]} times 加密次数
   */
  util.encodeBase64 = function (mingwen, times) {
    var code = ''
    var num = 1
    if (typeof times === 'undefined' || times === null || times === '') {
      num = 1
    } else {
      var vt = times + ''
      num = parseInt(vt)
    }
    // eslint-disable-next-line no-empty
    if (typeof mingwen === 'undefined' || mingwen === null || mingwen === '') {
    } else {
      util.base64.utf8encode = true
      code = mingwen
      for (var i = 0; i < num; i++) {
        code = util.base64('encode', code)
      }
    }
    return code
  }
  
  /**
   * 获取协议+域名
   */
  util.baseUrl = function () {
    const url = location.protocol + '//' + location.host + '/'
    return url
  }
  
  /**
   * 截取字符串长度
   */
  util.cutStr = function (text, num) {
    const arr = text.split('')
    let str = text
    if (arr.length > parseInt(num)) {
      str = arr.slice(0, num).join('') + '...'
    }
    return str
  }
  
  /**
   * URL中有一些参数（例如常用的authToken）带有特殊符号，浏览器会做转码，转码之后获取会有问题，本次遇到的是+变成了空格（%20）
   * 在对URL参数赋值之前对特殊字符做处理
   */
  util.URLencode = function (value) {
    return value.replace(/\+/g, '%2B').replace(/"/g, '%22').replace(/'/g, '%27').replace(/\//g, '%2F')
  }
  
  /* 验证中文、英文、数字字符 */
  util.validateChart = function (value) {
    const reg = /[^%&^'*#@"~;=?$\x22]+/
    return reg.test(value)
  }
  /* 验证正整数 >0 */
  util.validateIsIntGt = function (str) {
    const reg = /^([1-9]\d*)$/
    return reg.test(str)
  }
  /* 验证英文、数字字符 */
  util.validateAZ09Chart = function (value) {
    const reg = /^[A-Za-z0-9]+$/
    return reg.test(value)
  }
  
  /* 判断传入参数的类型，以字符串的形式返回 */
  util.dataType = function (obj) {
    if (obj === null) return 'Null'
    if (obj === undefined) return 'Undefined'
    return Object.prototype.toString.call(obj).slice(8, -1)
  }
  
  /** 传入数组 返回字符串并以逗号隔开 */
  util.array2str = function (obj) {
    let arr = obj
    let str = ''
    arr.map(res => {
      str += res + ','
    })
    if (str.length > 1) {
      str = str.substr(0, str.length - 1)
    }
    return str
  }
  
  /**
   * 比较开始时间和结束时间， 开始时间不能小于结束时间 两个日期的格式为：yyyy-MM-dd
   * @param  {[String]} startDate 开始日期。例：2016-01-01
   * @param  {[String]} endDate   结束日期。例：2016-07-23
   * @return {[boolean]}
   */
  util.compare2Days = function (startDate, endDate) {
    let beginTime = startDate || ''
    let endTime = endDate || ''
    beginTime = new Date(beginTime).getTime()
    endTime = new Date(endTime).getTime()
    if (!beginTime || !endTime) { // 如果不填
      return true
    } else if (endTime >= beginTime) {
      return true
    } else {
      return false
    }
  }
  
  
  
  export {
    util
  }
  