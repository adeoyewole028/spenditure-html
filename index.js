let chartEl = document.getElementById("myChart");
let popMenu = document.getElementById("pop-menu");
let btn = document.querySelectorAll("button");

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    console.log(btn);
  });
}

const showPass = () => {
  let x = document.getElementById("exampleInputPassword1");
  if (x.type === "password") {
    x.type = "text;";
  } else {
    x.type = "password";
  }
};

popMenu.addEventListener("click", function () {
  let menuList = document.getElementById("pop-menu-list");
  let img = document.getElementById("change-icon");
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
    img.style.content = "url(./Images/add-icon.svg)";
  } else {
    menuList.style.display = "block";
    img.style.content = "url(./Images/add-icon-grey.svg)";
  }
});
// Tracker graph chart

var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "red",
        fill: false,
      },
      {
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "green",
        fill: false,
      },
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});
