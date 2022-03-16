let copyright = document.getElementById("copyright");

const showPass = () => {
  let x = document.getElementById("exampleInputPassword1");
  if (x.type === "password") {
    x.type = "text;";
  } else {
    x.type = "password";
  }
};

const thisYear = () => {
  let year = new Date();
  let thisYear = year.getFullYear();

  copyright.textContent = thisYear;
};
thisYear();
