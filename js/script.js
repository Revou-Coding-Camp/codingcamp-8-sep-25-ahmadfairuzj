const namaUser = prompt("Masukkan nama Anda:");
if (namaUser && namaUser.trim() !== "") {
    document.getElementById('welcomeName').textContent = `Welcome, ${namaUser}`;
} else {
    document.getElementById('welcomeName').textContent = "Welcome";
}

const form = document.getElementById('messageForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggal_lahir').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    alert(
        `Nama: ${nama}\n` +
        `Tanggal Lahir: ${tanggalLahir}\n` +
        `Jenis Kelamin: ${jenisKelamin}\n` +
        `Pesan: ${pesan}`
    );

    form.reset(); 
});

