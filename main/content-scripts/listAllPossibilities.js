var $;
var reg = new RegExp("(.*ul.us.edu.pl/course.php[?])(.*)");
$.each($('a'), function(i,e){
      var match = reg.exec(e.href);
      if(match){
        e.href = match[1] + "full=1&" + match[2];
      }
    });
