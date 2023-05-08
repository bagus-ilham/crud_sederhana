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

function tampilanHapus(){
    const tombolHapus = document.querySelectorAll(".hapus") 
    tombolHapus.forEach(function(x){
        x.addEventListener('click', function(y){
            if(confirm('yakin nih?')){
                const hapus = y.target.dataset.value
                siswa.splice(hapus, 1)
                tampilanAwal()
            }
        })
    })
}

function tampilanAwal() {
  const tbody = document.getElementById("tbody");
  let list = "";
  console.log(list);
  siswa.forEach(function (x, index) {
    list += `<tr><td>${x.namaDepan}</td>
    <td>${x.namaBelakang}</td>
    <td>${x.kelas} SD</td>
    <td><button class ="hapus" data-value="${index}">hapus</button></td></tr>`;
  });
  tbody.innerHTML = list;
  tampilanHapus()
}

tampilanAwal();

const btnSubmit = document.getElementById('btnSubmit')
btnSubmit.addEventListener('click',function(){
    const namaDepan = document.getElementById("namaDepan").value
    const namaBelakang = document.getElementById("namaBelakang").value
    const kelas = document.getElementById("kelas").value

    siswa.push({
        namaDepan : namaDepan,
        namaBelakang : namaBelakang,
        kelas : kelas,
    })
    tampilanAwal()
})

