const width = 500; // 树的宽度
const height = 600; // 树的高度
const quantity = 150; // 元素数量
const types = ['text', 'select', 'progress', 'meter', 'button', 'radio', 'checkbox']; // 元素类型
const greetings = ['社心', '刘福源', '策划部', '管理部', '宣传部', '联络部', '刘若曦.', '解洪佳', '朱贵学', '杨博淳', '刘畅', '刘鉴德', '孙梓涵', '王程林', '陶宇生', '兰晶雯', '张梦诗', '张元睿', '陈煊鹏','韩宇辰','郑天翔','李小艺','梁粟','杨艳丽','袁雅妮','黄洁','史雪琪','王彤宇','刘梁栋','李泽曦','布格拉','陈右安','申禹翔','王郅','曾佳佳','马婧莹','古再努']; // 问候语数组
let tree = document.querySelector('.tree'), // 树容器
  treeRotation = 0;
 
tree.style.width = width + 'px'; // 设置树的宽度
tree.style.height = height + 'px'; // 设置树的高度
 
window.addEventListener('resize', resize, false); // 监听窗口大小变化
 
// 树的元素
for (var i = 0; i < quantity; i++) {
  let element = null,
    type = types[Math.floor(Math.random() * types.length)], // 随机选择元素类型
    greeting = greetings[Math.floor(Math.random() * greetings.length)]; // 随机选择问候语
 
  let x = width / 2, // 元素初始位置的 x 坐标
    y = Math.round(Math.random() * height); // 元素初始位置的 y 坐标
 
  let rx = 0, // 元素初始旋转角度
    ry = Math.random() * 360,
    rz = -Math.random() * 15;
 
  let elemenWidth = 5 + ((y / height) * width / 2), // 元素宽度根据位置调整
    elemenHeight = 26; // 元素高度固定
 
  switch (type) {
    case 'button':
      element = document.createElement('button');
      element.textContent = greeting; // 设置按钮文本为问候语
      element.style.width = elemenWidth + 'px';
      element.style.height = elemenHeight + 'px';
      break;
    case 'progress':
      element = document.createElement('progress');
      element.style.width = elemenWidth + 'px';
      element.style.height = elemenHeight + 'px';
      if (Math.random() > 0.5) {
        element.setAttribute('max', '100'); // 设置进度条的最大值为 100
        element.setAttribute('value', Math.round(Math.random() * 100)); // 设置进度条的当前值为随机数
      }
      break;
    case 'select':
      element = document.createElement('select');
      element.setAttribute('selected', greeting); // 设置选中项为随机选择的问候语
      element.innerHTML = '<option>' + greetings.join('</option><option>') + '</option>'; // 生成选项列表
      element.style.width = elemenWidth + 'px';
      element.style.height = elemenHeight + 'px';
      break;
    case 'meter':
      element = document.createElement('meter');
      element.setAttribute('min', '0'); // 设置表尺的最小值为 0
      element.setAttribute('max', '100'); // 设置表尺的最大值为 100
      element.setAttribute('value', Math.round(Math.random() * 100)); // 设置表尺的当前值为随机数
      element.style.width = elemenWidth + 'px';
      element.style.height = elemenHeight + 'px';
      break;
    case 'text':
    default:
      element = document.createElement('input');
      element.setAttribute('type', 'text');
      element.setAttribute('value', greeting); // 设置输入框的初始值为问候语
      element.style.width = elemenWidth + 'px';
      element.style.height = elemenHeight + 'px';
  }
 
  element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`; // 设置元素的初始位置和旋转角度
 
  tree.appendChild(element); // 添加元素到树中
}
 
// 下雪效果
for (var i = 0; i < 200; i++) {
  let element = document.createElement('input');
  element.setAttribute('type', 'radio');
 
  let spread = window.innerWidth / 2;
 
  let x = Math.round(Math.random() * spread) - (spread / 4),
    y = Math.round(Math.random() * height),
    z = Math.round(Math.random() * spread) - (spread / 2);
 
  let rx = 0,
    ry = Math.random() * 360,
    rz = 0;
 
  if (Math.random() > 0.5) element.setAttribute('checked', '');
 
  element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`; // 设置元素的初始位置和旋转角度
 
  tree.appendChild(element); // 添加元素到树中
}
 
function resize() {
  tree.style.top = ((window.innerHeight - height - 100) / 2) + 'px'; // 调整树的位置
}
 
resize(); // 页面加载时初始化树的位置