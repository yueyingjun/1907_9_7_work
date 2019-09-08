window.onload = function() {
    // 淡入淡出轮播图实现思路
    // 1.获取到所有轮播图（所有轮播图默认都为隐藏状态）
    // 2.将图片中的第一张显示（下标炜0的图片）
    // 3 声明变量index表示当前显示的图片的下标，默认为0；
    // 4.声明变量timer用来存储时间函数方便清除
    // 5.通过setINterval函数每过1000毫秒将index的值自增炜1，再将index相对应的图片的opacity设置为1
    // 6. 在时间函数中判断index的值， 如果在index大于或等于最大下标， 需要将index变为0
    // 7. 轮播结束后后续的图片都已经显示， 按照正常的排列顺序， 轮播失效， 需要将所有的图片再次隐藏才可以， 在每一次函数开始的时候使用for循环
    // 将每一张图片都隐藏（ 将opacity设为0）;
    // 8. opacity属性只是将元素的透明度改为i0， 但是元素还是存在， 所谓i无论点击哪个图片， 解决方法将当前的显示图片的层级调高， 其他的图片层级调低
    // 9。 根据当前的图篇， 给对应的轮播点与图片的下标一一对应， 所以可以使用index来表示当前选中轮播点的下标
    //    10.因为用户在鼠标移入图片按钮，轮播点都需要将自动轮播停止，需要清除时间函数用clearInterval,移入大盒子清除就可以
    // 11.点击右侧的按钮显示下一张图片，所以图片下标index需要自增，这个过程与自动轮播的过程相同
    // 12. 点击左侧按钮， 显上一张图片需要将下标index--
    // 13. 点击轮播点显示对应的下标， 每一个轮播点的下标一一对应， 所以轮播点的下标可以显示图片index 将index的值改为轮播点的下标

    var imgList = document.querySelectorAll(".tupian");
    var dotList = document.querySelectorAll(".diandian");

    imgList[0].style.opacity = 1;
    var index = 0;
    var timer = null;
    timer = setInterval(function() {
        for (var i = 0; i < 5; i++) {
            imgList[i].style.opacity = 0;
            imgList[i].style.zIndex = 0;
            dotList[i].classList.remove("active");

        }
        index++;
        if (index > 4) {
            index = 0;
        }
        imgList[index].style.opacity = 1;
        imgList[index].style.zIndex = 5;
        dotList[index].classList.add("active");
    }, 2000)

    var dtnList = document.querySelector(".btn-right");

    dtnList.onclick = function() {
        for (var i = 0; i <= 4; i++) {
            imgList[i].style.opacity = 0;
            imgList[i].style.zIndex = 0;
            dotList[i].classList.remove("active");
        }
        index++;
        if (index > 4) {
            index = 0;
        }
        imgList[index].style.opacity = 1;
        imgList[index].style.zIndex = 5;
        dotList[index].classList.add("active");
    }
    var dtrList = document.querySelector(".btn-left");

    dtrList.onclick = function() {
            for (var i = 0; i <= 4; i++) {
                imgList[i].style.opacity = 0;
                imgList[i].style.zIndex = 0;
                dotList[i].classList.remove("active");
            }
            index--;
            if (index < 0) {
                index = 4;
            }
            imgList[index].style.opacity = 1;
            imgList[index].style.zIndex = 5;
            dotList[index].classList.add("active");

        }
        // 移入
    var qweList = document.querySelector(".banner")
    qweList.onmouseover = function() {
            clearInterval(timer);
        }
        //移除    
    qweList.onmouseout = function() {
            timer = setInterval(function() {
                for (var i = 0; i < 5; i++) {
                    imgList[i].style.opacity = 0;
                    imgList[i].style.zIndex = 0;
                    dotList[i].classList.remove("active");

                }
                index++;
                if (index > 4) {
                    index = 0;
                }
                imgList[index].style.opacity = 1;
                imgList[index].style.zIndex = 5;
                dotList[index].classList.add("active");
            }, 2000)
        }
        //轮播点点击
    for (let i = 0; i < 5; i++) {
        dotList[i].onclick = function() {
            for (var b = 0; b < 5; b++) {
                imgList[b].style.opacity = 0;
                imgList[b].style.zIndex = 0;
                dotList[b].classList.remove("active");
            }
            index = i;
            imgList[index].style.opacity = 1;
            imgList[index].style.zIndex = 5;
            dotList[index].classList.add("active");
        }
    }
}