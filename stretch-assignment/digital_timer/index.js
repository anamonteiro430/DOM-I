function clock() {
  //Set Date
  let date = new Date('Dec 2, 2019 23:55').getTime();

  let x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate + now;

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  });

  //output
  document.getElementById('demo').innerHTML = hours + 'h ' + minutes + 'm ';
}
