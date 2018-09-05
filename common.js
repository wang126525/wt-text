/**
 * Created by jameswatt2008 on 2017/6/5.
 */

function getStyle(ele) {
    if(ele.currentStyle){
        return ele.currentStyle;
    }else{
        return getComputedStyle(ele,null);
    }
}