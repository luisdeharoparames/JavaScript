const MONTHS = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

const locale = "es";

(() => {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(formData);
    const { month } = Object.fromEntries(formData);
    const { isExists, month: monthName } = monthExists(month);
    if (isExists) {
      createTable(monthName, 2022);
    }else {
      const div = document.getElementById("renderTable");
      div.innerText = "El dato introducido no es un mes"
    }
  });

  const monthExists = (month) => {
    month = MONTHS[month.toLowerCase()];
    return {
      isExists: month !== undefined && month >= 0 && month <= 11,
      month,
    };
  };

  const createTable = (month, year) => {
    const div = document.getElementById("renderTable");ss
    div.innerText = "";
    // const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const container = document.createElement("div");
    container.classList.add("boxCalendar");
    const intl = new Intl.DateTimeFormat(locale, { month: "long" });
    const monthName = intl.format(new Date(year, month))
    const title = document.createElement("h1")
    title.innerText = `${monthName} ${year}`
    div.append(title)
    getDaysWeek(locale, container);
    div.append(container);
  };



  const getDaysWeek = (locale, container) => {
    const intl = new Intl.DateTimeFormat(locale, { weekday: "long" });
    [...Array(7).keys()].map((day) => {
      const dayBox = document.createElement("div");
      dayBox.classList.add("day-name");
      dayBox.innerText = intl.format(new Date(1973, 0, day + 1));
      container.append(dayBox);
    });
  };
})();
