// Ini Javascript
function greetUser() {
    let name = prompt("Hi,Pengunjung Siapa Namamu?");
    let greetingText = name ? `Hi, ${name}! Selamat datang di Website Aku.` : "Hi, Pengunjung! Selamat datang di Website Aku.";
    document.getElementById("greeting").innerText = greetingText;
}

// Panggil fungsi saat halaman selesai dimuat
window.onload = greetUser;

// Message Us
document.getElementById('submit').addEventListener('click', function () {
    // Mengambil nilai dari input
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    var gender = document.getElementById('gender').value.trim();
    var birthDate = document.getElementById('birthDate').value.trim();
    var genderValue = gender ? gender : "Tidak diisi";

    // Mendapatkan waktu saat ini
    let today = new Date();
    let dateTimeNow = today.toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" });

    // Validasi tanggal lahir
    let birthDateFormatted = birthDate ? new Date(birthDate).toDateString() : "Tidak diisi";

    // Menampilkan hasil di bagian result
    document.getElementById('displayName').innerText = "Nama: " + (name || "Tidak diisi");
    document.getElementById('displayEmail').innerText = "Email: " + (email || "Tidak diisi");
    document.getElementById('displayPhone').innerText = "Nomor Telepon: " + (phone || "Tidak diisi");
    document.getElementById('displayMessage').innerText = "Pesan: " + (message || "Tidak diisi");
    document.getElementById('displayGender').innerText = "Gender: " + genderValue;
    document.getElementById('displayBirthDate').innerText = "Tanggal Lahir: " + birthDateFormatted;
    document.getElementById('displayDateTime').innerText = "Waktu Saat Ini: " + dateTimeNow;

    // Menampilkan div result
    document.getElementById('result').style.display = 'block';
});


// Slide show
var slideIndex = 0;
showSlidesAuto();

function plusDivs(n) {
    slideIndex += n;
    showSlides();
}

// Slide otomatis setiap 3 detik
function showSlidesAuto() {
    var slides = document.getElementsByClassName("lecture-img");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlidesAuto, 3000);
}

// Slide manual (Previous & Next)
function showSlides() {
    var slides = document.getElementsByClassName("lecture-img");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
