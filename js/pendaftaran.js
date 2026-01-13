// wa pendaftaran
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnWA");

  btn.addEventListener("click", e => {
    e.preventDefault();

    const pesan =
      "Assalamu'alaikum warahmatullahi wabarakatuh 🙏\n\n" +
      "Saya ingin mengonfirmasi pembayaran pendaftaran calon santri Pondok Pesantren Al-Hanif. \n" +
      "Selanjutnya akan saya kirimkan data dan bukti pembayaran untuk dilakukan pengecekan.\n" +
      "Terima kasih atas bantuan Admin PPDB Al-Hanif. 😊🙏🏻";

    const nomor = "6285211560165";

    const url =
      "https://api.whatsapp.com/send?phone=" +
      nomor +
      "&text=" +
      encodeURIComponent(pesan);

    window.open(url, "_blank");
  });
});
