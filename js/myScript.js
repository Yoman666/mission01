// 初始化滾動
var s = skrollr.init();

document.addEventListener('click', function(event) {
    var clickedElement = event.target;
    var isSingledonate = clickedElement.closest('.singledonate');
  
    if (isSingledonate) {
      selectDonation(isSingledonate);
    } else {
      var allElements = document.querySelectorAll('.singledonate');
      allElements.forEach(function(el) {
        el.classList.remove('selected');
      });
    }
  });
  
  // --------
  function selectDonation(element) {
    var allElements = document.querySelectorAll('.singledonate');
    allElements.forEach(function(el) {
      el.classList.remove('selected');
    });
    element.classList.add('selected');
  }
  
  function donationSuccess() {
    alert('捐款成功！');
  }
  // ----------
  
  function submitForm(event) {
    event.preventDefault(); // 防止表单默认提交行为
  
    // 获取表单字段的值
    var nameValue = document.getElementById('nameInput').value;
    var emailValue = document.getElementById('emailInput').value;
    var commentValue = document.getElementById('commentInput').value;
  
    // 检查是否所有字段都已填写
    if (nameValue && emailValue && commentValue) {
      // 显示 Bootstrap Modal
      $('#successModal').modal('show');
  
      // 清空表单字段
      document.getElementById('nameInput').value = '';
      document.getElementById('emailInput').value = '';
      document.getElementById('commentInput').value = '';
    } else {
      alert('請填寫所有欄位！');
    }
  }


//   mose 
// $(window).mousemove(function (evt) {
//     var x = evt.pageX;
//     var y = evt.pageY;
//     console.log(x);
  
//     $("#cross").css("left", x + "px");
//     $("#cross").css("top", y + "px");
  
//     if (x < $(window).width() / 2 - 50) {
//       $("#cat").attr("src", "https://awiclass.monoame.com/catpic/cat_left.png");
//     } else if (x > $(window).width() / 2 + 50) {
//       $("#cat").attr("src", "https://awiclass.monoame.com/catpic/cat_right.png");
//     } else {
//       $("#cat").attr("src", "https://awiclass.monoame.com/catpic/cat_top.png");
//     }
//     if (x < $(window).width() / 2 - 50 && y < $(window).height() / 2) {
//       $("#cat").attr(
//         "src",
//         "https://awiclass.monoame.com/catpic/cat_lefttop.png"
//       );
//     }
//     if (x > $(window).width() / 2 + 50 && y < $(window).height() / 2) {
//       $("#cat").attr(
//         "src",
//         "https://awiclass.monoame.com/catpic/cat_righttop.png"
//       );
//     }
//   });
  
  
  // donationnum
  document.addEventListener('click', function(event) {
    // 检查点击的元素是否是捐款选项
    if (!event.target.closest('.singledonate')) {
      selectDonationId = '';
    }
  });
  
  var selectDonationId="";
  function slectId (id){
    selectDonationId = id;
    console.log(id);
  }

  function donate(){
    if(!selectDonationId){
      alert("請選擇一項");
      return;
    }
    var singleDonateNum = document.getElementById(selectDonationId).querySelector('.dmoney');
    var singleIntNum = parseInt(singleDonateNum.textContent.replace('NT$','').replace('',''));
    var totalNum = document.getElementById('totalnum');
    var totalIntNum = parseInt(totalNum.textContent.replace(/,/g, ''), 10);
    var addNum = parseInt(totalIntNum + singleIntNum);
    totalNum.textContent = addNum.toLocaleString(); // 使用 toLocaleString 添加千位分隔符
    console.log('new', totalNum.textContent);
    alert('捐款成功!');
    // $('#customModal').modal('show');
  }
