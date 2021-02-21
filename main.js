var i=0;
var lightBulbImgSrcStrs=['images/light_bulb_turned_on.png', 'images/light_bulb_turned_off.png'];
var lightBulbImgAltStrs=['Light Bulb Turned On', 'Light Bulb Turned Off'];
var lightBulbImg=document.querySelector('.light_bulb');
var button=document.querySelector('input');

function switchLightBulbImg(){
    i=i+1;

    if(i>1){
        i=0;
    }

    lightBulbImg.src=lightBulbImgSrcStrs[i];
    lightBulbImg.alt=lightBulbImgAltStrs[i];

    if(i==1){
        button.value='Turn On';
    }else{
        button.value='Turn Off';
    }
}
