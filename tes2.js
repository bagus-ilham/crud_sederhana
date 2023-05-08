const siswa = [
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
  ];
  
  function hapusData(index) {
    siswa.splice(index, 1);
    tampilanAwal();
  }
  
  function tampilanHapus() {
    const tombolHapus = document.querySelectorAll(".hapus");
    tombolHapus.forEach(function (x, index) {
      x.addEventListener("click", function () {
        if (confirm("Yakin nih?")) {
          hapusData(index);
        }
      });
    });
  }
  
  function tampilanUpdate(index) {
    const siswaUpdate = siswa[index];
    const formUpdate = document.getElementById("formUpdate");
    const namaDepanUpdate = document.getElementById("namaDepanUpdate");
    const namaBelakangUpdate = document.getElementById("namaBelakangUpdate");
    const kelasUpdate = document.getElementById("kelasUpdate");
    const btnSubmitUpdate = document.getElementById("btnSubmitUpdate");
  
    namaDepanUpdate.value = siswaUpdate.namaDepan;
    namaBelakangUpdate.value = siswaUpdate.namaBelakang;
    kelasUpdate.value = siswaUpdate.kelas;
  
    formUpdate.removeEventListener("submit", updateData);
    formUpdate.addEventListener("submit", function (event) {
      event.preventDefault();
      siswa[index].namaDepan = namaDepanUpdate.value;
      siswa[index].namaBelakang = namaBelakangUpdate.value;
      siswa[index].kelas = kelasUpdate.value;
      tampilanAwal();
      formUpdate.reset();
      btnSubmitUpdate.innerText = "Submit";
    });
  
    btnSubmitUpdate.innerText = "Update";
  }
  
  function tampilanAwal() {
    const tbody = document.getElementById("tbody");
    let list = "";
    siswa.forEach(function (x, index) {
      list += `<tr>
        <td>${x.namaDepan}</td>
        <td>${x.namaBelakang}</td>
        <td>${x.kelas} SD</td>
        <td><button class="hapus" data-value="${index}">hapus</button></td>
        <td><button class="update" data-value="${index}">update</button></td>
      </tr>`;
    });
    tbody.innerHTML = list;
    tampilanHapus();
  
    const tombolUpdate = document.querySelectorAll(".update");
    tombolUpdate.forEach(function (x) {
      x.addEventListener("click", function (y) {
        const update = y.target.dataset.value;
        tampilanUpdate(update);
      });
    });
  }
  
  function tambahData(event) {
    event.preventDefault();
    const namaDepan = document.getElementById("namaDepan").value;
    const namaBelakang = document.getElementById("namaBelakang").value;
    const kelas = document.getElementById("kelas").value;
  
    siswa.push({
      namaDepan: namaDepan,
      namaBelakang: namaBelakang,
      kelas: kelas,
    });
  
    tampilanAwal();
    formSiswa.reset();
  }
  
  function updateData(event) {
    event.preventDefault();
    const namaDepan = document.getElementById("namaDepanUpdate").value;
    const namaBelakang = document.getElementById("namaBelakangUpdate").value;
    const kelas = document.getElementById("kelasUpdate").value;
    const index = parseInt(document.getElementById("index").value);

    siswa[index].namaDepan = namaDepan;
    siswa[index].namaBelakang = namaBelakang;
    siswa[index].kelas = kelas;
    
    tampilanAwal();
    formUpdate.reset();
    tampilanFormAwal();
    }
    
    function tampilanFormAwal() {
    const formSiswa = document.getElementById("formSiswa");
    const btnSubmit = document.getElementById("btnSubmit");
    
    formSiswa.removeEventListener("submit", updateData);
    formSiswa.addEventListener("submit", tambahData);
    
    btnSubmit.innerText = "Submit";
    }
    
    function init() {
    const formSiswa = document.getElementById("formSiswa");
    const formUpdate = document.getElementById("formUpdate");
    
    formSiswa.addEventListener("submit", tambahData);
    formUpdate.addEventListener("submit", updateData);
    
    tampilanAwal();
    tampilanFormAwal();
    }
    
    init();  