// Ini Javascript
function greetUser() {
    let name = prompt("Masukkan nama Anda:");
    let greetingText = name ? `Hi, ${name}! Selamat datang di website saya.` : "Hi, Pengunjung! Selamat datang di website saya.";
    document.getElementById("greeting").innerText = greetingText;
}

// Panggil fungsi saat halaman selesai dimuat
window.onload = greetUser;