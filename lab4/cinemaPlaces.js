// Первое время
var firstSeatLabel1 = 1;
$(document).ready(function () {
  var $cart = $("#selected-seats1"),
    $counter = $("#counter1"),
    $total = $("#total1"),
    sc = $("#seat-map1").seatCharts({
      map: ["fff_fff", "fff_fff", "eee_eee", "eee_eee", "eeeeeee"],
      seats: {
        f: {
          price: 250,
          classes: "low-price",
          category: "250 рублей",
        },
        e: {
          price: 320,
          classes: "high-price",
          category: "320 рублей",
        },
      },
      naming: {
        top: false,
        getLabel: function (character, row, column) {
          return firstSeatLabel1++;
        },
      },
      legend: {
        node: $("#legend1"),
        items: [
          ["f", "available", "Стандартные места (250 рублей)"],
          ["e", "available", "Премиум места (320 рублей)"],
          ["f", "unavailable", "Забронированные места"],
        ],
      },
      click: function () {
        if (this.status() == "available") {
          //let's create a new <li> which we'll add to the cart items
          $(
            "<li>" +
              this.data().category +
              " Место №" +
              this.settings.label +
              ": <b>" +
              this.data().price +
              ' руб.</b> <a href="#" class="cancel-cart-item">[отменить]</a></li>'
          )
            .attr("id", "cart-item-" + this.settings.id)
            .data("seatId", this.settings.id)
            .appendTo($cart);

          $counter.text(sc.find("selected").length + 1);
          $total.text(recalculateTotal(sc) + this.data().price);

          return "selected";
        } else if (this.status() == "selected") {
          //update the counter
          $counter.text(sc.find("selected").length - 1);
          //and total
          $total.text(recalculateTotal(sc) - this.data().price);

          //remove the item from our cart
          $("#cart-item-" + this.settings.id).remove();

          //seat has been vacated
          return "available";
        } else if (this.status() == "unavailable") {
          //seat has been already booked
          return "unavailable";
        } else {
          return this.style();
        }
      },
    });

  //this will handle "[cancel]" link clicks
  $("#selected-seats1").on("click", ".cancel-cart-item", function () {
    //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
    sc.get($(this).parents("li:first").data("seatId")).click();
  });

  //let's pretend some seats have already been booked
  sc.get(["1_2", "4_1", "2_6", "3_5"]).status("unavailable");
});

// Второе время
var firstSeatLabel2 = 1;
$(document).ready(function () {
  var $cart = $("#selected-seats2"),
    $counter = $("#counter2"),
    $total = $("#total2"),
    sc = $("#seat-map2").seatCharts({
      map: ["fff_fff", "fff_fff", "eee_eee", "eee_eee", "eeeeeee"],
      seats: {
        f: {
          price: 250,
          classes: "low-price",
          category: "250 рублей",
        },
        e: {
          price: 320,
          classes: "high-price",
          category: "320 рублей",
        },
      },
      naming: {
        top: false,
        getLabel: function (character, row, column) {
          return firstSeatLabel2++;
        },
      },
      legend: {
        node: $("#legend2"),
        items: [
          ["f", "available", "Стандартные места (250 рублей)"],
          ["e", "available", "Премиум места (320 рублей)"],
          ["f", "unavailable", "Забронированные места"],
        ],
      },
      click: function () {
        if (this.status() == "available") {
          //let's create a new <li> which we'll add to the cart items
          $(
            "<li>" +
              this.data().category +
              " Место №" +
              this.settings.label +
              ": <b>" +
              this.data().price +
              ' руб.</b> <a href="#" class="cancel-cart-item">[отменить]</a></li>'
          )
            .attr("id", "cart-item-" + this.settings.id)
            .data("seatId", this.settings.id)
            .appendTo($cart);

          $counter.text(sc.find("selected").length + 1);
          $total.text(recalculateTotal(sc) + this.data().price);

          return "selected";
        } else if (this.status() == "selected") {
          //update the counter
          $counter.text(sc.find("selected").length - 1);
          //and total
          $total.text(recalculateTotal(sc) - this.data().price);

          //remove the item from our cart
          $("#cart-item-" + this.settings.id).remove();

          //seat has been vacated
          return "available";
        } else if (this.status() == "unavailable") {
          //seat has been already booked
          return "unavailable";
        } else {
          return this.style();
        }
      },
    });

  //this will handle "[cancel]" link clicks
  $("#selected-seats2").on("click", ".cancel-cart-item", function () {
    //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
    sc.get($(this).parents("li:first").data("seatId")).click();
  });

  //let's pretend some seats have already been booked
  sc.get(["1_6", "4_2", "2_1", "3_4"]).status("unavailable");
});

// Третье время
var firstSeatLabel3 = 1;
$(document).ready(function () {
  var $cart = $("#selected-seats3"),
    $counter = $("#counter3"),
    $total = $("#total3"),
    sc = $("#seat-map3").seatCharts({
      map: ["fff_fff", "fff_fff", "eee_eee", "eee_eee", "eeeeeee"],
      seats: {
        f: {
          price: 250,
          classes: "low-price",
          category: "250 рублей",
        },
        e: {
          price: 320,
          classes: "high-price",
          category: "320 рублей",
        },
      },
      naming: {
        top: false,
        getLabel: function (character, row, column) {
          return firstSeatLabel3++;
        },
      },
      legend: {
        node: $("#legend3"),
        items: [
          ["f", "available", "Стандартные места (250 рублей)"],
          ["e", "available", "Премиум места (320 рублей)"],
          ["f", "unavailable", "Забронированные места"],
        ],
      },
      click: function () {
        if (this.status() == "available") {
          //let's create a new <li> which we'll add to the cart items
          $(
            "<li>" +
              this.data().category +
              " Место №" +
              this.settings.label +
              ": <b>" +
              this.data().price +
              ' руб.</b> <a href="#" class="cancel-cart-item">[отменить]</a></li>'
          )
            .attr("id", "cart-item-" + this.settings.id)
            .data("seatId", this.settings.id)
            .appendTo($cart);

          $counter.text(sc.find("selected").length + 1);
          $total.text(recalculateTotal(sc) + this.data().price);

          return "selected";
        } else if (this.status() == "selected") {
          //update the counter
          $counter.text(sc.find("selected").length - 1);
          //and total
          $total.text(recalculateTotal(sc) - this.data().price);

          //remove the item from our cart
          $("#cart-item-" + this.settings.id).remove();

          //seat has been vacated
          return "available";
        } else if (this.status() == "unavailable") {
          //seat has been already booked
          return "unavailable";
        } else {
          return this.style();
        }
      },
    });

  //this will handle "[cancel]" link clicks
  $("#selected-seats3").on("click", ".cancel-cart-item", function () {
    //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
    sc.get($(this).parents("li:first").data("seatId")).click();
  });

  //let's pretend some seats have already been booked
  sc.get(["1_3", "4_2", "2_2", "3_1"]).status("unavailable");
});

// Четвертое время
var firstSeatLabel4 = 1;
$(document).ready(function () {
  var $cart = $("#selected-seats4"),
    $counter = $("#counter4"),
    $total = $("#total4"),
    sc = $("#seat-map4").seatCharts({
      map: ["fff_fff", "fff_fff", "eee_eee", "eee_eee", "eeeeeee"],
      seats: {
        f: {
          price: 250,
          classes: "low-price",
          category: "250 рублей",
        },
        e: {
          price: 320,
          classes: "high-price",
          category: "320 рублей",
        },
      },
      naming: {
        top: false,
        getLabel: function (character, row, column) {
          return firstSeatLabel4++;
        },
      },
      legend: {
        node: $("#legend4"),
        items: [
          ["f", "available", "Стандартные места (250 рублей)"],
          ["e", "available", "Премиум места (320 рублей)"],
          ["f", "unavailable", "Забронированные места"],
        ],
      },
      click: function () {
        if (this.status() == "available") {
          //let's create a new <li> which we'll add to the cart items
          $(
            "<li>" +
              this.data().category +
              " Место №" +
              this.settings.label +
              ": <b>" +
              this.data().price +
              ' руб.</b> <a href="#" class="cancel-cart-item">[отменить]</a></li>'
          )
            .attr("id", "cart-item-" + this.settings.id)
            .data("seatId", this.settings.id)
            .appendTo($cart);

          $counter.text(sc.find("selected").length + 1);
          $total.text(recalculateTotal(sc) + this.data().price);

          return "selected";
        } else if (this.status() == "selected") {
          //update the counter
          $counter.text(sc.find("selected").length - 1);
          //and total
          $total.text(recalculateTotal(sc) - this.data().price);

          //remove the item from our cart
          $("#cart-item-" + this.settings.id).remove();

          //seat has been vacated
          return "available";
        } else if (this.status() == "unavailable") {
          //seat has been already booked
          return "unavailable";
        } else {
          return this.style();
        }
      },
    });

  //this will handle "[cancel]" link clicks
  $("#selected-seats4").on("click", ".cancel-cart-item", function () {
    //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
    sc.get($(this).parents("li:first").data("seatId")).click();
  });

  //let's pretend some seats have already been booked
  sc.get(["1_5", "4_1", "2_2", "3_3"]).status("unavailable");
});

function recalculateTotal(sc) {
  var total = 0;

  //basically find every selected seat and sum its price
  sc.find("selected").each(function () {
    total += this.data().price;
  });

  return total;
}
