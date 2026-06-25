console.log("✅ JS berhasil terhubung");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("eventForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let email = document.getElementById("email").value.trim();
      let name = document.getElementById("fullName").value.trim();
      let birth = document.getElementById("birthDate").value;
      let gender = document.getElementById("gender").value;
      let terms = document.getElementById("terms").checked;

      if (!email.includes("@")) {
        alert("Email harus mengandung simbol @");
        return;
      }

      if (name.length < 3) {
        alert("Nama minimal 3 karakter");
        return;
      }

      let birthDate = new Date(birth);
      let today = new Date();
      if (birthDate >= today || isNaN(birthDate.getTime())) {
        alert("Tanggal lahir tidak valid");
        return;
      }

      if (gender === "") {
        alert("Silakan pilih gender");
        return;
      }

      if (!terms) {
        alert("Kamu harus menyetujui Terms & Conditions");
        return;
      }

      alert("Pendaftaran berhasil!");
      
    });
  }
});
