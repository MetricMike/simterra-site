$(document).ready(function() {

  var options = {
    placement: function (context, source) {
        var position = $(source).position();

        if (position.left > 515) {
            return "left";
        }

        if (position.left < 515) {
            return "right";
        }

        if (position.top < 110){
            return "bottom";
        }

        return "top";
    }
    , trigger: "hover focus"
  };

  $('[data-toggle="popover"]').popover(options);
});
