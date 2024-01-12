$("document").ready(function () {
  let hrs = (min = sec = msec = 0);

  $("#startBtn").click(function () {
    

    timer = setInterval(() => {
      msec++;

      if (msec == 100) {
        sec++;
        msec = 0
      }

      if (sec == 60) {
        min++;
        sec = 0
      }

      if (min == 60) {
        hrs++;
        min = 0
      }
      display();

      
    }, 10);

    $('#startBtn').addClass('pointer-events-none');
  });

  $("#stopBtn").click(function () {
    clearInterval(timer);
    $('#startBtn').removeClass('pointer-events-none');
  });

  $("#resetBtn").click(function () {
    clearInterval(timer);
    hrs = min = sec = msec = 0;
    display();
    $('#startBtn').removeClass('pointer-events-none');

  });

  function display() {
    thrs = hrs < 10 ? "0" + hrs : hrs;
    tmin = min < 10 ? "0" + min : min;
    tsec = sec < 10 ? "0" + sec : sec;
    tmsec = msec < 10 ? "0" + msec : msec;

    $("#hours").text(thrs);
    $("#minuits").text(tmin);
    $("#seconds").text(tsec);
    $("#milliseconds").text(tmsec);
  }
});
