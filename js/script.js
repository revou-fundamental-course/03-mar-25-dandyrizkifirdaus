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

// Slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var slides = document.getElementsByClassName("lecture-img");
    
    if (n > slides.length) {
        slideIndex = 1; // Kembali ke slide pertama jika melebihi jumlah slide
    }
    if (n < 1) {
        slideIndex = slides.length; // Kembali ke slide terakhir jika kurang dari 1
    }

    // Sembunyikan semua slide
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Tampilkan slide yang aktif
    slides[slideIndex - 1].style.display = "block";
}
