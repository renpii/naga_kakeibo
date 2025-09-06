    const form = document.getElementById("inputform");
    const recordList = document.getElementById("recordlist");

    // 保存しているデータを読み込む
    let records = JSON.parse(localStorage.getItem("kakeibo")) || [];

    // 表示を更新する関数
    function render() {
      recordList.innerHTML = "";
      records.forEach(r => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${r.date}</td>
          <td>${r.amount}円</td>
          <td>${r.category}</td>
          <td>${r.memo}</td>
        `;
        recordList.appendChild(tr);
      });
    }

    // フォーム送信時の処理
    form.addEventListener("submit", e => {
      e.preventDefault();
      const newRecord = {
        date: document.getElementById("date").value,
        amount: document.getElementById("amount").value,
        category: document.getElementById("category").value,
        memo: document.getElementById("memo").value
      };
      records.push(newRecord);
      localStorage.setItem("kakeibo", JSON.stringify(records));
      render();
      form.reset();
    });

    // ページ読み込み時に表示
    render();