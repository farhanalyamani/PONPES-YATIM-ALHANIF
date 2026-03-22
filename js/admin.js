let allData = [];

function loadData(data) {
  allData = data;
  renderTable(allData);
}

function safe(v) {
  return v ? v : "-";
}
function renderTable(data) {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  data.forEach((row, i) => {
    const status = row["Status Pembayaran"] || "Belum Bayar";

    tbody.innerHTML += `
      <tr class="${status === "Lunas" ? "lunas" : "belum"}">
        <td>${i + 1}</td>
        <td>${safe(row["Nama Lengkap"])}</td>
        <td>${safe(row["Jenjang Pendidikan"])}</td>
        <td>
          <span class="badge ${status === "Lunas" ? "bg-success" : "bg-danger"}">
            ${status}
          </span>
        </td>
        <td>
          ${
            status === "Lunas"
              ? "-"
              : `<button class="btn btn-sm btn-success"
                  onclick="markPaid(${i + 2})">
                  Tandai Lunas
                </button>`
          }
        </td>
      </tr>
    `;
  });
}
function applyFilter() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const jenjang = document.getElementById("filterJenjang").value;

  const filtered = allData.filter(row => {
    const nama = (row["Nama Lengkap"] || "").toLowerCase();
    const nisn = (row["NISN"] || "").toLowerCase();
    const sekolah = (row["Asal Sekolah"] || "").toLowerCase();
    const jenjangData = (row["Jenjang Pendidikan"] || "").toLowerCase();

    const matchSearch =
      nama.includes(keyword) ||
      nisn.includes(keyword) ||
      sekolah.includes(keyword);

    const matchJenjang =
      !jenjang || jenjangData.includes(jenjang.toLowerCase());

    return matchSearch && matchJenjang;
  });

  renderTable(filtered);
}