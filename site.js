
// Bu kısımda prompt ile ekrana siteye giren kişinin ismi yazdırıldı. 

let myName = document.querySelector("#myName");
let userName = prompt("Adınız Nedir?");

if (userName.length <= 0) {
      alert("Lütfen Belirtilen Alanı Doldurunuz")

} else {
      myName.innerHTML = `${userName}`
};


// Bu kısımda tarih ve saat  bölümü eklendi.

function time() {
      let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
      let date = new Date();

      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      let day = date.getDay();
      document.getElementById("myClock").innerHTML = hour + ":" + min + ":" + sec + "-" + days[day];
} setInterval(time, 1000);