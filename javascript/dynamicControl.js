

window.onload=function(){
    /*图片切换*/

    //获取img属性
    var join1=document.getElementById("join")
    var img=join1.getElementsByTagName("img")[0]
    console.log(img)
    //创建一个数组用于存储图片的地址
    var imgArr=["photo/1.jpg" , "photo/2.jpg" , "photo/3.jpg" , "photo/4.jpg" , "photo/5.jpg" , "photo/6.jpg" ];
    var index=0;//index也不能再用了
    
    //按钮控制
    var prev=document.getElementById("prev");
    prev.onclick=function(){
        index--;
        if(index<0){
            index=imgArr.length-1;

        };
        img.src=imgArr[index];
        
      var imsw=document.getElementById("imsw");
      imsw.innerHTML="一共有"+imgArr.length+"张图片，"+"这是第"+(index+1)+"张";
    };

    var next=document.getElementById("next");
    next.onclick=function(){
        index++;
        if(index>imgArr.length-1){
            index=0;
        };
        
        img.src=imgArr[index];
    
        
       
        imsw.innerHTML="一共有"+imgArr.length+"张图片，"+"这是第"+(index+1)+"张";
        
    };



    /*调查表*/

    var items=document.getElementsByName("items");
    //用for循环给四个多选框绑定点击响应函数

    for(var g=0;g<items.length;g++){
        items[g].onclick=function(){
             checkedAllBox.checked=true;
            for(var h=0;h<items.length;h++){
                if(!items[h].checked){
                    //千万别写成=，那样就成了赋值了
                    checkedAllBox.checked=false;
                    break;
                };
            };  
        };
    };
   //注意：g已经定义到全局作用域里了，千万别再用了
        

    //全选/全不选
    var checkedAllBox=document.getElementById("checkedAllBox");
    checkedAllBox.onclick=function(){
        for(var i=0;i<items.length;i++){
            items[i].checked=true;
        };
    };
    //全选
    var checkAllBtn=document.getElementById("checkAllBtn");
    checkAllBtn.onclick=function(){
        checkedAllBox.checked=true;
        for(var i=0 ; i<items.length;i++){
            items[i].checked=true;
        };
    };
    //全不选
    var checkNoBtn=document.getElementById("checkNoBtn");
    checkNoBtn.onclick=function(){
        checkedAllBox.checked=false;
        for(var i=0 ; i<items.length;i++){
            items[i].checked=false;
        };
    };
    //反选
    var checkRevBtn=document.getElementById("checkRevBtn");
    checkRevBtn.onclick=function(){
        checkedAllBox.checked=true
        for(var i=0 ; i<items.length ; i++){
            items[i].checked=!items[i].checked;//checked的值是布尔值
            if(!items[i].checked){
                checkedAllBox.checked=false
            }
        };       
    }
    //提交
    var sendBtn=document.getElementById("sendBtn");
    sendBtn.onclick=function(){
        for(var i=0 ; i<items.length ; i++){
            if(items[i].checked){
                alert(items[i].value)

            }
        };  
    };




    //使内容与导航条同步

    //将到航条与内容绑定(不被火狐支持)
    var card=document.getElementsByClassName("card")
    var nav=document.getElementsByClassName("e")[0]
    var navC=nav.getElementsByTagName("a")
    console.log(navC)
    console.log(card)


    
    function setNav(i) {
        for(j=0;j<card.length;j++){
            navC[j].style.color="red"
        }
        navC[i].style.color="green"
        
    }
    for(i=0;i<card.length;i++){
        card[i].num=i
        card[i].onmouseenter=function(){
            setNav(this.num)
        
        }
    }
    //虽然用循环给card[i]绑定了事件，但是事件还未执行。i变成了5。所以报错style is undefined

   
    



};