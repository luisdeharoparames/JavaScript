(() => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { from } = Object.fromEntries(formData);
    const { to } = Object.fromEntries(formData);
    console.log(from);
    console.log(to);
    createTables(from,to);
    //let td = [];
  });
  const createTables = (from,to) => {
    const div = document.getElementById("renderTable");
    div.classList.add("divCSS");
    for (let numeroFrom = from; numeroFrom <= to; numeroFrom++) {
      div.append(createTable(numeroFrom));
    }

  }

  const createTable = (numero) => {
    const table = document.createElement("table");
    table.classList.add("tableCSS");

    for (let i = 0; i < 10; i++) {
      table.appendChild(createRom(numero,i));
    }
    return table;
  };
  //Crear Celdas
  const createCell = (innerText) => {
    const td = document.createElement("td");
    td.classList.add("tdCSS");
    td.innerText = innerText;
    return td;
  };
  //Crear tr
  const createRom = (numero,i) => {
    const tr = document.createElement("tr");
    [numero, " X ", i, " = ", numero * i].forEach((element) => {
      tr.appendChild(createCell(element));
    });
    return tr;
  };
})();
