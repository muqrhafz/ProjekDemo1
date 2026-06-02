/* =====================================
   SEGARAARGA MOUNTAIN SMART TOURISM
===================================== */

/* =====================================
   KONFIGURASI WHATSAPP
===================================== */

const nomorWA = "62895385587220";

/* =====================================
   DATA MENU MAKANAN
===================================== */

const menuMakanan = [
    {
        nama: "Nasi Goreng Gunung",
        harga: "Rp25.000",
        foto: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400"
    },
    {
        nama: "Mie Rebus Hangat",
        harga: "Rp18.000",
        foto: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400"
    },
    {
        nama: "Kopi Arabika Pegunungan",
        harga: "Rp15.000",
        foto: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"
    },
    {
        nama: "Jagung Bakar",
        harga: "Rp12.000",
        foto: "https://images.unsplash.com/photo-1603048719539-9ecb4d3b3c7e?w=400"
    },
    {
        nama: "Sosis Bakar",
        harga: "Rp20.000",
        foto: "https://images.unsplash.com/photo-1558030006-450675393462?w=400"
    }
];

/* =====================================
   RENDER E-MENU
===================================== */

const menuContainer =
document.getElementById("menuContainer");

menuMakanan.forEach(item => {

    menuContainer.innerHTML += `

    <div
        class="food-card"
        onclick="pesanMakanan(
            '${item.nama}',
            '${item.harga}'
        )">

        <img
            src="${item.foto}"
            alt="${item.nama}">

        <div>

            <h4>${item.nama}</h4>

            <span class="food-price">
                ${item.harga}
            </span>

            <p style="
                font-size:12px;
                color:gray;
                margin-top:4px;
            ">
                Klik untuk pesan
            </p>

        </div>

    </div>

    `;
});

/* =====================================
   PESAN MAKANAN WA
===================================== */

function pesanMakanan(nama, harga){

    const pesan = `Halo Admin SegaraArga,

Saya ingin memesan makanan:

🍽 Menu : ${nama}
💰 Harga : ${harga}

Mohon konfirmasi pesanan saya.

Terima kasih.`;

    const url =
    `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}

/* =====================================
   BOOKING CAMPING
===================================== */

function openBookingModal(){

    document
    .getElementById("bookingModal")
    .classList
    .remove("hidden");

}

function prosesBooking(){

    const nama =
    document.getElementById(
        "namaPendaki"
    ).value;

    const tanggal =
    document.getElementById(
        "tanggalBooking"
    ).value;

    const orang =
    document.getElementById(
        "jumlahOrang"
    ).value;

    if(
        nama === "" ||
        tanggal === "" ||
        orang === ""
    ){

        alert(
            "Lengkapi data booking terlebih dahulu."
        );

        return;
    }

    const pesan = `Halo Admin SegaraArga,

Saya ingin booking area camping.

👤 Nama : ${nama}
📅 Tanggal : ${tanggal}
🏕 Jumlah Orang : ${orang}

Mohon konfirmasi ketersediaan slot.

Terima kasih.`;

    const url =
    `https://wa.me/${62895385587220}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");

    closeModal();
}

/* =====================================
   SOS BUTTON
===================================== */

document
.getElementById("panicBtn")
.addEventListener("click", () => {

    document
    .getElementById("sosModal")
    .classList
    .remove("hidden");

});

/* =====================================
   TUTUP MODAL
===================================== */

function closeModal(){

    document
    .getElementById("bookingModal")
    .classList
    .add("hidden");

    document
    .getElementById("sosModal")
    .classList
    .add("hidden");
}

/* =====================================
   KAPASITAS CAMPING
===================================== */

let kapasitas = 65;

setInterval(() => {

    kapasitas++;

    if(kapasitas > 95){
        kapasitas = 65;
    }

    document
    .getElementById("capacityBar")
    .style.width =
    kapasitas + "%";

    document
    .getElementById("capacityText")
    .innerText =
    kapasitas + "%";

}, 3000);

/* =====================================
   SIMULASI SAFETY MONITORING
===================================== */

setInterval(() => {

    const air =
    Math.floor(
        Math.random() * 40
    ) + 20;

    document
    .getElementById("safetyValue")
    .innerText =
    air + " cm";

}, 5000);

/* =====================================
   NAVIGATION ACTIVE EFFECT
===================================== */

const navButtons =
document.querySelectorAll(
    ".bottom-nav button"
);

navButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        navButtons.forEach(item => {

            item.style.color = "#6b7280";

        });

        btn.style.color = "#16a34a";

    });

});

/* =====================================
   PAGE READY
===================================== */

window.addEventListener("load", () => {

    console.log(
        "SegaraArga Mountain Smart Tourism Ready 🚀"
    );

});