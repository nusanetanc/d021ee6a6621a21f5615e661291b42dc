$("#formdistrics").hide();
$("#formvillages").hide();
$("#formstreets").hide();
$("#formstreetnos").hide();
$("#notcoverage").hide();

  $("#coverage-tab").hide();
  $("#customer-data-tab").hide();
  $("#summary-tab").hide();
  $("#customer-prev-tab").hide();
  $("#registerBroadbandFo").hide();
  
  $("#customer-data-tab").click(function(){
    $("#coverage-tab").show();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
  });
  
  $("#coverage-tab").click(function(){
    $("#coverage-tab").hide();
    $("#customer-data-tab").show();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
  });
  
  $("#summary-tab").click(function(){
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").show();
    $("#registerBroadbandFo").show();
  });
  
  $("#customer-prev-tab").click(function(){
    $("#coverage-tab").show();
    $("#customer-data-tab").hide();
    $("#summary-tab").show();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
  });
  
$('#fullname').bind('input', function() {
  var fullname = document.getElementById("fullname").value;
  var mobilephone = document.getElementById("mobilephone").value;
  var email = document.getElementById("email").value;
  if (fullname == "" || fullname == null || mobilephone == "" || mobilephone == null || email == "" || email == null){
     $("#summary-tab").hide();
  } else {
    $("#summary-tab").show();
  }
});

$('#mobilephone').bind('input', function() {
  var fullname = document.getElementById("fullname").value;
  var mobilephone = document.getElementById("mobilephone").value;
  var email = document.getElementById("email").value;
  if (fullname == "" || fullname == null || mobilephone == "" || mobilephone == null || email == "" || email == null){
     $("#summary-tab").hide();
  } else {
    $("#summary-tab").show();
  }
});

$('#email').bind('input', function() {
  var fullname = document.getElementById("fullname").value;
  var mobilephone = document.getElementById("mobilephone").value;
  var email = document.getElementById("email").value;
  if (fullname == "" || fullname == null || mobilephone == "" || mobilephone == null || email == "" || email == null){
     $("#summary-tab").hide();
  } else {
    $("#summary-tab").show();
  }
});