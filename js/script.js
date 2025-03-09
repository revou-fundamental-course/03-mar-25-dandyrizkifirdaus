// Ini Javascript
function greetUser() {
    let name = prompt("Masukkan nama Anda:");
    let greetingText = name ? `Hi, ${name}! Selamat datang di Website Aku.` : "Hi, Pengunjung! Selamat datang di Website Aku.";
    document.getElementById("greeting").innerText = greetingText;
}

// Panggil fungsi saat halaman selesai dimuat
window.onload = greetUser;