const object = {
  siswa: [
    {
      namaDepan: "Bagus",
      namaBelakang: "Ilham Khoir",
      kelas: 3,
    },
    {
      namaDepan: "Siti",
      namaBelakang: "Chairani Nabiilah",
      kelas: 2,
    },
  ],

  init: function () {
    const tbody = document.getElementById("tbody");
    this.renderTable(tbody);
    this.setupEventListeners();
  },

  renderTable: function (tbody) {
    tbody.innerHTML = "";
    this.siswa.forEach(function (data, index) {
      const row = `<tr>
        <td>${data.namaDepan}</td>
        <td>${data.namaBelakang}</td>
        <td>${data.kelas} SD</td>
        <td>
          <button onclick="object.hapus(${index})">hapus</button>
          <button onclick="object.update(${index})">update</button>
        </td>
      </tr>`;
      tbody.innerHTML += row;
    });
  },

  create: function (event) {
    event.preventDefault();

    const formSiswa = document.getElementById("formSiswa");
    const namaDepan = formSiswa.namaDepan.value;
    const namaBelakang = formSiswa.namaBelakang.value;
    const kelas = formSiswa.kelas.value;

    this.siswa.push({ namaDepan, namaBelakang, kelas });
    formSiswa.reset();
    const tbody = document.getElementById("tbody");
    this.renderTable(tbody);
  },

  hapus: function (index) {
    if (confirm("Yakin ingin menghapus data siswa?")) {
      this.siswa.splice(index, 1);
      const tbody = document.getElementById("tbody");
      this.renderTable(tbody);
    }
  },

  update: function (index) {
    const formUpdate = document.getElementById("formUpdate");
    const data = this.siswa[index];

    formUpdate.index.value = index;
    formUpdate.namaDepanUpdate.value = data.namaDepan;
    formUpdate.namaBelakangUpdate.value = data.namaBelakang;
    formUpdate.kelasUpdate.value = data.kelas;
  },

  submitUpdate: function (event) {
    event.preventDefault();

    const formUpdate = document.getElementById("formUpdate");
    const index = formUpdate.index.value;
    const namaDepan = formUpdate.namaDepanUpdate.value;
    const namaBelakang = formUpdate.namaBelakangUpdate.value;
    const kelas = formUpdate.kelasUpdate.value;

    this.siswa[index].namaDepan = namaDepan;
    this.siswa[index].namaBelakang = namaBelakang;
    this.siswa[index].kelas = kelas;

    formUpdate.reset();
    const tbody = document.getElementById("tbody");
    this.renderTable(tbody);
  },

  setupEventListeners: function () {
    document.getElementById("formSiswa").addEventListener("submit", (event) =>
      this.create(event)
    );
    document.getElementById("formUpdate").addEventListener("submit", (event) =>
      this.submitUpdate(event)
    );
  },
};

object.init();
