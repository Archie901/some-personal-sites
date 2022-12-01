/*Article switch and display*/

$(document).ready(function(){
  $("#armArticle1").hide();
  $("#armArticleItem1").click(function(){
    $("#armArticle1").fadeIn(300);
    $("#armArticle2").hide();
    $("#tankArticle1").hide();
    $("#tankArticle2").hide();
  });
});

$(document).ready(function(){
  $("#armArticle2").hide();
  $("#armArticleItem2").click(function(){
    $("#armArticle2").fadeIn(300);
    $("#armArticle1").hide();
    $("#tankArticle1").hide();
    $("#tankArticle2").hide();
  });
});

$(document).ready(function(){
  $("#tankArticle1").hide();
  $("#tankArticleItem1").click(function(){
    $("#tankArticle1").fadeIn(300);
    $("#armArticle1").hide();
    $("#armArticle2").hide();
    $("#tankArticle2").hide();
  });
});

$(document).ready(function(){
  $("#tankArticle2").hide();
  $("#tankArticleItem2").click(function(){
    $("#tankArticle2").fadeIn(300);
    $("#armArticle1").hide();
    $("#armArticle2").hide();
    $("#tankArticle1").hide();
  });
});

/*Light and dark themes switch*/

$(document).ready(function(){
  $("#themeSwitcher").click(function(){
    $(".listElement").toggleClass("listElementDark");
    $(".top-panel").toggleClass("darkTopPanel");
    $(".top-buttons").toggleClass("darkTopButtons")
    $(".main-panel").toggleClass("darkMainPanel");
    $("body").toggleClass("darkGlobalBackground");
  });
});

/*Registration page: input forms validation*/

function validateForm1() {
  let element1 = document.getElementById("inputForm1");
  let el_value1 = document.getElementById("inputForm1").value;
    if (el_value1 === "") {
      element1.placeholder = "Это поле обязательно для заполнения";
    } else {
      element1.placeholder = "";
    }
  }

function validateForm2() {
  let element2 = document.getElementById("inputForm2");
  let el_value2 = document.getElementById("inputForm2").value;
    if (el_value2 === "") {
      element2.placeholder = "Это поле обязательно для заполнения";
    } else {
      element2.placeholder = "";
    }
  }

function validateForm3() {
  let element3 = document.getElementById("inputForm3");
  let el_value3 = document.getElementById("inputForm3").value;
    if (el_value3 === "") {
      element3.placeholder = "Это поле обязательно для заполнения";
    } else {
      element3.placeholder = "";
    }
  }

function validateForm4() {
  let element4 = document.getElementById("inputForm4");
  let el_value4 = document.getElementById("inputForm4").value;
    if (el_value4 === "") {
      element4.placeholder = "Это поле обязательно для заполнения";
    } else {
      element4.placeholder = "";
    }
  }

function validateAllForms() {
  let el_value1 = document.getElementById("inputForm1").value;
  let el_value2 = document.getElementById("inputForm2").value;
  let el_value3 = document.getElementById("inputForm3").value;
  let el_value4 = document.getElementById("inputForm4").value;
    if (el_value1 !== "" && el_value2 !== "" && el_value3 !== "" && el_value4 !== "") {
      alert("ВЫ ЗАРЕГИСТРИРОВАНЫ");
      return false;
    }
  }