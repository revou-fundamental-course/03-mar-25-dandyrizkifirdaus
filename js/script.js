// Ini Javascript
function greetUser() {
    let name = prompt("Hi,Pengunjung Siapa Namamu?");
    let greetingText = name ? `Hi, ${name}! Selamat datang di Website Aku.` : "Hi, Pengunjung! Selamat datang di Website Aku.";
    document.getElementById("greeting").innerText = greetingText;
}

// Panggil fungsi saat halaman selesai dimuat
window.onload = greetUser;

// massage us
document.getElementById('submit').addEventListener('click', function() 
// Mengambil nilai dari input
{   var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value;

    // Menampilkan hasil di bagian result
    document.getElementById('displayName').innerText = "Nama: " + name;
    document.getElementById('displayEmail').innerText = "Email: " + email;
    document.getElementById('displayPhone').innerHTML = "Nomor Telepon: " + phone;
    document.getElementById('displayMessage').innerText = "Pesan: " + message;


    // Menampilkan div result
    document.getElementById('result').style.display = 'block';
});