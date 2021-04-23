$(function () {
  "use strict";

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $("#gform").validator();

  // when the form is submitted
  $("#gform").on("submit", function (e) {
    // if the validator does not prevent form submit

    if (!e.isDefaultPrevented()) {
      var url =
        "https://script.google.com/macros/s/AKfycbzROSQl2KUVFCXKGRVrnd-r2XfSv6hYNeUCx54nWmKLw70bVMa5GTogdt3_SFjSPAmm/exec";
      swal("Message Send!", "We Get Back You Soon!", "success");
      // POST values in the background the the script URL
      $.ajax({
        type: "POST",
        url: url,
        data: $("#gform").serialize(),
        success: function (data) {
          console.log(data);
          // we recieve the type of the message: success x danger and apply it to the
          var messageAlert = "alert-" + data.type;
          var messageText = data.message;
          // let's compose Bootstrap alert box HTML
          var alertBox =
            '<div class="alert ' +
            messageAlert +
            ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
            messageText +
            "</div>";

          // If we have messageAlert and messageText
          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            $("#gform").find(".messages").html(alertBox);
            // empty the form
            $("#gform")[0].reset();
          }
        },
      });
      return false;
    }
  });
});
