import { girisKontrol } from "./Functions";

export default function GirisForm() {
    return (
        <>
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <i className="fa-solid fa-pen-nib fa-4x"></i>
                                <h1 className="h3 mb-3 fw-normal">Giriş Yap</h1>

                                <div className="form-floating py-2">
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email adresi</label>
                                </div>
                                <div className="form-floating py-2">
                                    <input type="password" className="form-control" id="sifre" placeholder="Şifrenizi Giriniz" />
                                    <label htmlFor="floatingPassword">Şifrenizi Giriniz</label>
                                </div>

                                <p id="sonuc"></p>

                            </form>
                            <button className="w-100 btn btn-lg btn-primary" onClick={() => girisKontrol()} >Giriş</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

// mail, kullanıccı ad soyad ve diğer bilgileri array haline getir. split elemanını kullan.
// Başvuru formundaki user_info bilgileri sağ header'da getir.
// array de boş eleman olabilir mi ? bunu araştır.