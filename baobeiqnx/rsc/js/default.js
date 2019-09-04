/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 * @author yanis.wang
 * @see http://yaniswang.com/frontend/2013/02/16/dateformat-performance/
 */
function dateFormat(date, format) {
    date = new Date(date);
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        console.log('hello');
        return all;
    });
    return format;
};

function changeURL(url, arg, arg_val) {
	        var pattern = arg + '=([^&]*)';
	        var replaceText = arg + '=' + arg_val;
	        if (url.match(pattern)) {
	            var tmp = '/(' + arg + '=)([^&]*)/gi';
	            tmp = url.replace(eval(tmp), replaceText);
	            return tmp;
	        } else {
	            if (url.match('[\?]')) {
	                return url + '&' + replaceText;
	            } else {
	                return url + '?' + replaceText;
	            }
	        }
	        return url + '\n' + arg + '\n' + arg_val;
	    }


function onBridgeReady(){
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId":_appId,     //公众号名称，由商户传入     
            "timeStamp":_timeStamp,         //时间戳，自1970年以来的秒数     
            "nonceStr":_nonceStr, //随机串     
            "package":_packgetStr,     
            "signType":"MD5",         //微信签名方式：     
            "paySign":_paySign //微信签名 
        },
        function(res){
            if(res.err_msg == "get_brand_wcpay_request:ok" ){
                // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                alert('支付成功');
            }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
                alert('支付取消.');
            }else if(res.err_msg == "get_brand_wcpay_request:fail" ){
                alert('支付失败.');
            } 
    }); 
}


function callPay(){
    if (typeof WeixinJSBridge == "undefined"){
        console.log('WeixinJSBridge undefined');
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    }else{
        console.log('WeixinJSBridge not undefined');
        onBridgeReady();
    }
}