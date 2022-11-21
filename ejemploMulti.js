function tablaMultiplicar(number) {
    const table = document.createElement("div");
    const tableComponent = document.createElement("table");
    for (let i = 0; i < 11; i++) {
      const row = document.createElement("tr");
      for (let i = 0; i < 11; i++) {
        const cell = document.createElement("td");
        cell.innerText =
          `${number}` + " X " + `${i}` + " = " + `${number * i}`;
  
        table.appendChild(CompoTable);
      }
    }
    return table;
  }
  
  function appendTable(container, table, isClear) {
    const renderTable = document.getElementById(container);
    if (isClear) {
      renderTable.innerHTML = "";
    }
    renderTable.append(table);
  }
  
  (() => {
    const button = document.getElementById("calcular");
    button.addEventListener("click", () => {
      const number = document.getElementById("numero").value;
      if (number === "") {
        alert("Es necesario un numero");
        return;
      }
      for (let i = 1; i < 4; i++) {
        const table = tablaMultiplicar(number * i);
        const isClear = i === 1;
        appendTable("renderTable", table, isClear);
        appendTable("duplicate", table, isClear);
      }
    });
  })();
  