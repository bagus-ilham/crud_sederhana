const siswa = [];

function tampilkanDataSiswa() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  siswa.forEach(function (data, index) {
    const row = `<tr>
      <td>${data.namaDepan}</td>
      <td>${data.namaBelakang}</td>
      <td>${data.kelas} SD</td>
      <td>
        <button onclick="hapusData(${index})">hapus</button>
        <button onclick="tampilkanFormUpdate(${index})">update</button>
      </td>
    </tr>`;
    tbody.innerHTML += row;
  });
}
      
function tampilkanFormUpdate(index) {
  const formUpdate = document.getElementById("formUpdate");
  const data = siswa[index];

  formUpdate.index.value = index;
  formUpdate.namaDepanUpdate.value = data.namaDepan;
  formUpdate.namaBelakangUpdate.value = data.namaBelakang;
  formUpdate.kelasUpdate.value = data.kelas;
}

function updateData(event) {
  event.preventDefault();

  const formUpdate = document.getElementById("formUpdate");
  const dataBaru = formUpdate.index.value;
  const namaDepan = formUpdate.namaDepanUpdate.value;
  const namaBelakang = formUpdate.namaBelakangUpdate.value;
  const kelas = formUpdate.kelasUpdate.value;

  siswa[dataBaru].namaDepan = namaDepan;
  siswa[dataBaru].namaBelakang = namaBelakang;
  siswa[dataBaru].kelas = kelas;

  formUpdate.reset();
  tampilkanDataSiswa();
}

// create
function tambahDataSiswa(event) {
  event.preventDefault();

  const formSiswa = document.getElementById("formSiswa");
  const namaDepan = formSiswa.namaDepan.value;
  const namaBelakang = formSiswa.namaBelakang.value;
  const kelas = formSiswa.kelas.value;

  siswa.push({ namaDepan, namaBelakang, kelas });

  formSiswa.reset();
  tampilkanDataSiswa();
}

function hapusData(index) {
  if (confirm("Yakin ingin menghapus data siswa?")) {
    siswa.splice(index, 1);
    tampilkanDataSiswa();
  }
}

document.getElementById("formSiswa").addEventListener("submit", tambahDataSiswa);
document.getElementById("formUpdate").addEventListener("submit", updateData);

tampilkanDataSiswa();
