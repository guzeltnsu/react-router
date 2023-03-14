import { gonder } from './Functions';

function Basvur() {
    var isLogin = sessionStorage.getItem("loggedInUser");

    return (
        <>
            {isLogin ?
                <>
                    <div className='row'>
                        <div className="col-md-6 offset-md-3 mt-5">
                            <form>
                                <div className="row justify-content-center">
                                    <div style={{ backgroundColor: "antiquewhite", borderRadius: "5px" }}>
                                        <div className="row">
                                            <div className="col-12">
                                                <h1 className="text-center">100KY Başvuru Formu</h1>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="row g-3 align-items-center">
                                                    <div className="col-auto">
                                                        <label htmlFor="inputName" className="col-form-label">İsim/Soyisim:</label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <input type="text" id="inputName" className="form-control" />
                                                    </div>
                                                    <div className="col-auto">
                                                        <span id="nameHelpInline" className="form-text">
                                                            İletişim mail adresinizi giriniz.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="row g-3 align-items-center">
                                                    <div className="col-auto">
                                                        <label htmlFor="inputMail" className="col-form-label">E-mail:</label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <input type="text" id="inputMail" className="form-control" />
                                                    </div>
                                                    <div className="col-auto">
                                                        <span id="mailHelpInline" className="form-text">
                                                            İletişim mail adresinizi giriniz.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <hr />
                                                <span className="col-form-label">Eğitim Durumu:</span>
                                                <select id="educationStatus" className="form-select form-select-m mb-3">
                                                    <option selected> </option>
                                                    <option value="1">Lise</option>
                                                    <option value="2">Lisans</option>
                                                    <option value="3">Lisansüstü</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <hr />
                                                <span className="col-form-label">Doğum Tarihi:</span>
                                                <input id="birthDate" type="date" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-6 my-2 bg-light">
                            <div className="d-flex justify-content-center">

                                <input className="btn btn-primary mx-3" value="Send" onClick={() => gonder()} />
                                <input type="reset" className="btn btn-outline-secondary mx-3" />
                                <button type="button" onClick={() => { window.location.href = 'basvurubilgileri' }} className='btn btn-secondary mx-3'>Başvuru Görüntüle</button>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <div className='row mt-4'>
                        <div className='col-md-6 offset-md-3'>
                            <div className='card'>
                                <div className='card-header'>
                                    Başvur
                                </div>
                                <div className='card-body text-center'>
                                    <h1>Giriş yapmadan başvuru formuna gidemezsiniz</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </>
    )
}

export default Basvur;