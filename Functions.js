import ReactDOM from "react-dom/client";
import Sol from "./Sol";
import Giris_form from "./GirisForm";
import Kayit_form from "./Kayit_form";
import Sss from "./Sss";
import Basvur from "./Basvur";

import { basliklar, icerikler, sorular, cevaplar } from "./Icerik";


// GİRİŞ KONTROL
export const girisKontrol = () => {
    var kullanici = sessionStorage.getItem("user");

    if (kullanici == null) {
        sessionStorage.setItem("user", "");
    }

    kullanici = sessionStorage.getItem("user");

    const kullanici_ayrik = kullanici.split(",");

    const mail = document.getElementById("email").value;
    const sifre = document.getElementById("sifre").value;

    const yazi = document.getElementById("sonuc");

    if (mail == kullanici_ayrik[0] && sifre == kullanici_ayrik[1]) {

        yazi.innerHTML = "Giriş bilgileri doğru!";
        yazi.style.color = "green";

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + kullanici_ayrik[0];

        sessionStorage.setItem("loggedInUser",mail);

        document.getElementById("logout_Btn").style.display = "block";

        window.location.href = "basvurudetay";
    }
    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }
}


// ÇIKIŞ KONTROL
export const logout = () => {
    sessionStorage.removeItem("loggedInUser");
    document.getElementById("logout_Btn").style.display = "none";
    document.getElementById("btn_div").style.display = "inline-block";
    document.getElementById("header_sag").innerHTML = "";
}



// GÖSTER KONTROL FONKSİYONU YERİNE ROUTER KULLANDIM.
export const goster = (eleman, eleman_index) => {

    var isLogin = localStorage.getItem("loggedInUser");

    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    const sag = ReactDOM.createRoot(document.getElementById("sag"));

    if (eleman == "Eğitimler") {
        sol.render(
            <Sol
                baslik={basliklar[eleman_index]}
                icerik={icerikler[eleman_index]}
            />
        )

    }
    else if (eleman == "Hemen Başvur") {
        if (isLogin) {
            sol.render(
                <Basvur />

            )
        }
        else
            alert("Giriş yapmadan başvuru sayfasına gidemezsiniz")
    }
    else if (eleman == "S.S.S.") {
        sol.render(
            <>
                <h1>{basliklar[eleman_index]}</h1>
            </>
        )
    }
}

// FORM GÖNDER
export const gonder = () => {
    var name = document.getElementById("inputName").value;
    var mail = document.getElementById("inputMail").value;
    var educationStatus = document.getElementById("educationStatus").value;
    var birthDate = document.getElementById("birthDate").value;

    var user_info = {
        name,
        mail,
        educationStatus,
        birthDate,

    };

    sessionStorage.setItem("user_info", JSON.stringify(user_info));
    alert("başvurunuz alınmıştır");

    window.location.href = "BasvuruBilgileri";
}

export const guncelle = () => {
    var name = document.getElementById("inputName").value;
    var mail = document.getElementById("inputMail").value;
    var educationStatus = document.getElementById("educationStatus").value;
    var birthDate = document.getElementById("birthDate").value;

    var user_info = {
        name,
        mail,
        educationStatus,
        birthDate,

    };

    sessionStorage.setItem("user_info", JSON.stringify(user_info));
    alert('Başvuru bilgileri güncellendi')
}