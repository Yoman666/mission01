// 初始化滾動
var s = skrollr.init();
// window.addEventListener('scroll', yourScrollHandler, { passive: false });

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
    event.preventDefault();
  
    var nameValue = document.getElementById('nameInput').value;
    var emailValue = document.getElementById('emailInput').value;
    var commentValue = document.getElementById('commentInput').value;
  
    // 檢查
    if (nameValue && emailValue && commentValue) {
      $('#successModal').modal('show');
  
      // 清空表單
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
    }else if(selectDonationId == 'num04'){
      var singleDonateNum = document.getElementById(selectDonationId).querySelector('.dimput');
      console.log(singleDonateNum);
      var singleIntNum = parseInt(singleDonateNum.value);
      var totalNum = document.getElementById('totalnum');
      var totalIntNum = parseInt(totalNum.textContent.replace(/,/g, ''), 10);
      var addNum = parseInt(totalIntNum + singleIntNum);

      var peoplenum = document.getElementById(selectDonationId).querySelector('.dnum');
      var intpeoplenum = parseInt(peoplenum.textContent) + 1;
      peoplenum.textContent = intpeoplenum ;

      totalNum.textContent = addNum.toLocaleString();
      alert('捐款成功!');

      
    }
    else{
      var singleDonateNum = document.getElementById(selectDonationId).querySelector('.dmoney');
      var singleIntNum = parseInt(singleDonateNum.textContent.replace('NT$','').replace('',''));
      var totalNum = document.getElementById('totalnum');
      var totalIntNum = parseInt(totalNum.textContent.replace(/,/g, ''), 10);
      var addNum = parseInt(totalIntNum + singleIntNum);
      totalNum.textContent = addNum.toLocaleString(); // 使用 toLocaleString 添加千位分隔符

      var peoplenum = document.getElementById(selectDonationId).querySelector('.dnum');
      var intpeoplenum = parseInt(peoplenum.textContent) + 1;
      peoplenum.textContent = intpeoplenum ;

      console.log(intpeoplenum);
      alert('捐款成功!');
    }
    // $('#customModal').modal('show');
  }

  
 
  



