var a = [];
$(window).load(function() {
  $('#calc').css("opacity", '0');
  $('#calc').animate({
    opacity: '1'
  }, 300, function() {
    a.push(0);
    $("span").text(a.join(""));
  });

});

$(".bttn").click(function(e) {
  $(this).animate({
    opacity: 0.8
  }, 60);
  $(this).animate({
    opacity: 1
  });

  e.preventDefault();
});
document.getElementById("ce").disabled = true;
$(".numb").click(function() {
  if (a[0] == 0 && a.length == 1) {
    a.pop(0);
    $("span").text(a.join(""));
  }
  $("span").append($(this).text());
  a.push($(this).text());
  if (a.length > 1) {
    var x = $("span").css('left');
    x = x.replace("px", "");
    parseInt(x);
    $("span").css('left', (x - 30) + 'px');
  }

});
$("#ac").click(function() {
  $("span").animate({
    bottom: '20px',
    opacity: '0'
  }, 300, function() {
    $("span").empty();
    $("span").attr('style', '');
    a.splice(0, a.length);
    a.push(0);
    $("span").text(a.join(""));
  });
  //Bhargav was stuck a day in here removing bugs
});
$("#del").click(function() {
  if (a.length > 1) {
    a.pop();
  } else if (typeof a[0] == 'number' && a[0] % 1 == 0) {
    a[0] = Math.floor(a[0] / 10);
  } else {
    a.pop();
    a.push(0);
  }

  $("span").text(a.join(""));
  var y = Math.max(a.length, a[0].toString().length);
  $("span").css('left', (280 - (29 * (y - 1))) + 'px');
});
$("#equ").click(function() {
  $("span").animate({
    bottom: '20px',
    opacity: '0'
  }, 300, function() {
    $("span").empty();
    $("span").attr('style', '');
    var k = a.join("");
    var p;
    //var p = parseFloat(eval(k));
    try {
      p = parseFloat(eval(k));
      p = p.toFixed(5);
      // console.log(p);
      p = parseFloat(p);
      // console.log(p);
      var b = p.toString();

      $("span").append(p);
      a.splice(0, a.length);

      a.push(p);
      $("span").css('left', (280 - (29 * (b.length - 1))) + 'px');
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.log(e.message);
        a = [0];
        $("span").empty();
        $("span").text(a.join(""));
      }
    }

  });

});