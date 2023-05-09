let tombol = ''
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
  
    init: function() {
      const tbody = document.getElementById("tbody");
      this.renderTable(tbody);
      this.setupEventListeners();
    },
  
    renderTable: function(tbody) {
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
  
    submitData: function (event) {
      event.preventDefault();
  
      const form = document.getElementById("formSiswa");
      const index = form.index.value;
      const namaDepan = form.namaDepan.value;
      const namaBelakang = form.namaBelakang.value;
      const kelas = form.kelas.value;
  
      if (index === "" || tombol === '') {
        // Create
          this.siswa.push({ namaDepan, namaBelakang, kelas });
        
      } else if(tombol === 'edit') {
        // Update
        this.siswa[index].namaDepan = namaDepan;
        this.siswa[index].namaBelakang = namaBelakang;
        this.siswa[index].kelas = kelas;
        tombol=''
      }
  
      form.reset();
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
      const form = document.getElementById("formSiswa");
      const data = this.siswa[index];
  
      form.index.value = index;
      form.namaDepan.value = data.namaDepan;
      form.namaBelakang.value = data.namaBelakang;
      form.kelas.value = data.kelas;
      tombol = 'edit'
      console.log(tombol, 'edit tmbol');
    },
  
    setupEventListeners: function () {
      const form = document.getElementById("formSiswa");
      form.addEventListener("submit", (event) => this.submitData(event));
   
    },
  };
  
  object.init();
  console.log(tombol, 'ini tmbol');