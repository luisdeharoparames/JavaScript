(() => {
  const form = document.getElementById("myForm");
  const div = document.getElementById("renderTable");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { from } = Object.fromEntries(formData);
    const { to } = Object.fromEntries(formData);
    console.log(from);
    console.log(to);
    // while(from < to){
    //   console.log("While" + from);
    //   from;
    //   console.log({from});
    // }
    let td = [];
    for (let numeroFrom = from; numeroFrom <= to; numeroFrom++) {
      const table = document.createElement("table");
      table.classList.add("tableCSS");
      for (let i = 0; i < 10; i++) {
        td[i] = document.createElement("tr");
        const row = document.createElement("tr");
        row.innerText =
          `${numeroFrom}` + " X " + `${i}` + " = " + `${numeroFrom * i}`;
        td[i].appendChild(row);
        row.classList.add("tdCSS");
        // row.innerText =
        //   `${numeroFrom}` + " X " + `${i}` + " = " + `${numeroFrom * i}`;
        table.appendChild(td[i]);
      }
      div.append(table);
    }
  });
})();
