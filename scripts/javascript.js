const result = document.querySelector("#boton");

function mes_dias(month, year) {
  /* const calendario = [(1,31),(2,28),(3,31),(4,30),(5,31),(6,30),(7,31),(8,31),(9,30),(10,31),(11,30),(12,31)]
  if(month == ) */
  var dias = 0;
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    dias = 31;
  } else if (month == 2) {
    if (year % 4 == 0 && year % 100 != 0) {
      dias = 29;
    }
    if (year % 400 == 0) {
      dias = 29;
    } else {
      dias = 28;
    }
  } else {
    dias = 30;
  }
  return dias;
}

function calculadora() {
  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);
  const year_actual = 2023;
  const month_actual = 6;
  const day_actual = 30;
  var f_year, f_month, f_day;
  f_year = year_actual - year;
  f_month = month_actual - month;
  f_day = day_actual - day;
  if (day > mes_dias(month, year) || month >= 12 || year >= year_actual) {
    Swal.fire("Papi que fue...", "llena bien pue papito beautiful", "question");
    return;
  }
  if (day >= day_actual && f_month!=0) {
    f_month++;
    if (month >= 12) {
      f_year++;
    }
  }

  document.getElementById("years").innerHTML = f_year;
  document.getElementById("months").innerHTML = f_month;
  document.getElementById("days").innerHTML = f_day;
  console.log(f_year, f_month, f_day);
  /* Swal.fire("Papi que fue...", "llena bien pue papito beautiful", "question");
   */
}
