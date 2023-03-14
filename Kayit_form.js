function sifreKontrol() {

    const kullanici =
        [(document.getElementById("email").value), (document.getElementById("sifre").value)];


    const sifre2 = document.getElementById("reSifre").value;



    const yazi = document.getElementById("sonuc");

    if (kullanici[1] == sifre2) {

        yazi.innerHTML = "Hesap Oluşturuldu!";
        yazi.style.color = "green";

        sessionStorage.setItem("user", kullanici);
        window.location.href="giris"

    }
    else {
        yazi.innerHTML = "Şifreler Eşleşmiyor.";
        yazi.style.color = "red";
    }


}


function KayitForm() {

    return (
        <>
            <div className="row mt-4">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <form className="bg-light rounded">
                                <i className="fa-solid fa-pen-nib fa-4x"></i>
                                <h1 className="h3 mb-3 fw-normal px-5">Hesap Oluşturma</h1>
                                <div className="form-floating py-2">
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email adresi</label>
                                </div>
                                <div className="form-floating py-2">
                                    <input type="password" className="form-control" id="sifre" placeholder="Şifrenizi Giriniz" />
                                    <label htmlFor="floatingPassword">Şifrenizi Giriniz</label>
                                </div>
                                <div className="form-floating py-2">
                                    <input type="password" className="form-control" id="reSifre" placeholder="Tekrar Şifrenizi Giriniz" />
                                    <label htmlFor="floatingPassword">Tekrar Şifrenizi Giriniz</label>
                                </div>
                                <p id="sonuc"></p>
                                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={() => sifreKontrol()}>Hesap Oluştur</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
export default KayitForm;