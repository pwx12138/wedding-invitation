function showDetails() {
    alert("婚礼将于 2025 年 2 月 19 日举行，敬请期待！");
}

// 随机生成爱心桃的函数
function generateHeartPeach() {
    // 创建一个新的 div 元素
    var heart = document.createElement('div');
    heart.classList.add('heart'); // 给它添加 'heart' 类来应用样式

    // 随机设置爱心桃图片出现的起始位置
    var randomX = Math.random() * (window.innerWidth - 100) + 10; // 随机X坐标
    var randomY = Math.random() * (window.innerHeight - 100) + 10; // 随机Y坐标
    // 设置绝对定位来显示在随机位置
    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';

    // 将新创建的元素添加到页面中
    document.querySelector('.container').appendChild(heart);
    heart.addEventListener('animationend', function() {
        heart.remove()
    })
    setTimeout(generateHeartPeach, 250); // 每500毫秒再生成一个新的爱心桃
}

function startHeart() {
    // 创建一个新的 div 元素
    var heart1 = document.createElement('div');
    heart1.classList.add('heart1'); // 给它添加 'heart' 类来应用样式

    // 设置爱心桃图片出现的起始位置
    var randomX = window.innerWidth/2 - 25; 
    var randomY = window.innerHeight/2 - 25 ; 

    heart1.style.left = randomX + 'px';
    heart1.style.top = randomY + 'px';

    // 将新创建的元素添加到页面中
    document.querySelector('.container').appendChild(heart1);
    heart1.addEventListener('animationend', function() {
        heart1.remove()
        musicElement.muted = false;  // 解除静音
        musicElement.play();
        generateHeartPeach()
    })
}

var musicElement = document.getElementById('background-music');

startHeart()