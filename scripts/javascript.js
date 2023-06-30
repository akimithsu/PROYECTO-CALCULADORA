const result = document.querySelector("#boton");

function calculadora() {
  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);
  const year_actual = 2023;
  const month_actual = 6;
  const day_actual = 30;
  document.getElementById("years").innerHTML = year;
  document.getElementById("months").innerHTML = month;
  document.getElementById("days").innerHTML = day;
  console.log(day, month, year);
  /* Swal.fire("Papi que fue...", "llena pue papito beautiful", "question");
   */
}
