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
  
  function tampilanHapus() {
    const tombolHapus = document.querySelectorAll(".hapus");
    tombolHapus.forEach(function (x) {
      x.addEventListener("click", function (y) {
        if (confirm("yakin nih?")) {
          const hapus = y.target.dataset.value;
          siswa.splice(hapus, 1);
          tampilanAwal();
        }
      });
    });
  }
  
  function tampilanUpdate(index) {
    const siswaUpdate = siswa[index];
    const formSiswa = document.getElementById("formSiswa");
    const namaDepan = document.getElementById("namaDepan");
    const namaBelakang = document.getElementById("namaBelakang");
    const kelas = document.getElementById("kelas");
    const btnSubmit = document.getElementById("btnSubmit");
  
    namaDepan.value = siswaUpdate.namaDepan;
    namaBelakang.value = siswaUpdate.namaBelakang;
    kelas.value = siswaUpdate.kelas;
  
    formSiswa.removeEventListener("submit", tambahData);
    formSiswa.addEventListener("submit", function (event) {
      event.preventDefault();
      siswa[index].namaDepan = namaDepan.value;
      siswa[index].namaBelakang = namaBelakang.value;
      siswa[index].kelas = kelas.value;
      tampilanAwal();
      formSiswa.removeEventListener("submit", updateData);
      formSiswa.addEventListener("submit", tambahData);
      formSiswa.reset();
      btnSubmit.innerText = "Submit";
    });
  
    btnSubmit.innerText = "Update";
  }
  
  function tampilanFormAwal() {
    const formSiswa = document.getElementById("formSiswa");
    const btnSubmit = document.getElementById("btnSubmit");
  
    formSiswa.removeEventListener("submit", updateData);
    formSiswa.addEventListener("submit", tambahData);
  
    btnSubmit.innerText = "Submit";
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
  
  tampilanAwal();
  tampilanFormAwal();
  
  const formSiswa = document.getElementById("formSiswa");

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