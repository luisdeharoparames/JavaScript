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
    const table = document.createElement("table");
    table.classList.add("tableCSS");
    for (let numeroFrom = from; numeroFrom <= to; numeroFrom++) {
      for (let i = 0; i < 10; i++) {
          const col = document.createElement("tr");
          const row = document.createElement("td");
          col.innerHTML = "";
          row.innerText = `${numeroFrom}` + " X " + `${i}` + " = " + `${numeroFrom * i}`;
          col.appendChild(row);
          table.appendChild(col);
        // const td = document.createElement("td");
        // const td2 = document.createElement("td");
        // const td3 = document.createElement("td");
        // const td4 = document.createElement("td");
        // td.innerText = `${numeroFrom}`;
        // td2.innerHTML =  " X ";
        // td3.innerHTML =  `${i}`;
        // div.appendChild(td);
        // div.appendChild(td2);
        // div.appendChild(td3);
      }
      // tbody.appendChild(row);
    }
    div.append(table);
  });
})();
