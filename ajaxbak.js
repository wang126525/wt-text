/**
 * Created by jameswatt2008 on 2017/6/13.
 */

//请求头
//method,url,parms,callback,header
//{method:'post',url:'sdfsdfsdf',success:function(){},failure:functtion(){},
// parms:


function ajax(obj) {
    //?lastCursor=6610&pageSize=10
//            var url = 'reg.php';
    var xhr = null;
    if(window.ActiveXObject){
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }else{
        xhr = new XMLHttpRequest();
    }
//        $username = $_REQUEST['username'];
//        $password = $_REQUEST['password'];

    //打开与服务器的连接
    if(obj.method){
        xhr.open(obj.method,obj.url,true);
    }else{
        xhr.open('get',obj.url,true);
    }
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // {username:'zhangsa',password:123123}
//        sendData = encodeURIComponent(sendData);


    // 发送请求
    //console.log(res);
    //回调函数
    xhr.onreadystatechange = function () {
//                console.log(xhr.readyState)
        if(xhr.readyState == 4){
            //数据接收完毕
            if(xhr.status == 200){
//                        console.log('请求成功',xhr.responseText)
                if(obj.success){
                    obj.success(xhr.responseText)
                }

            }else{
//                        console.log(xhr.status,'请求出错')
                if(obj.failure){
                    obj.failure('请求失败')
                }
            }
        }
    }
//            var sendData = 'username=zhangsan&password=123456';
    if( obj.method == undefined ||obj.method.toLowerCase() =='get'){
        xhr.send(null);//
    }else{
        xhr.send(obj.params);//

    }
}