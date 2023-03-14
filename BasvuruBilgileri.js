import { guncelle } from "./Functions";
import React from "react";

function BasvuruBilgileri() {
    var user_info = JSON.parse(sessionStorage.getItem("user_info"));

    const [name, setName] = React.useState(user_info.name);
    const [inputMail, setInputMail] = React.useState(user_info.mail);
    const [educationStatus, setEducationStatus] = React.useState(user_info.educationStatus);
    const [birthDate, setBirthDate] = React.useState(user_info.birthDate);

    function inputNameChange(e) {
        setName(e.target.value);
    }
    function inputMailChange(e) {
        setInputMail(e.target.value);
    }
    function inputEducationStatus(e) {
        setEducationStatus(e.target.value);
    }
    function inputBirthDate(e) {
        setBirthDate(e.target.value);
    }

    return (
        <>
            <div className="row text-center">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="bg-light justif-content-center">Başvuru Bilgileri</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="col-auto">
                                        <label htmlFor="inputName" className="col-form-label">İsim/Soyisim:</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text" id="inputName" onChange={inputNameChange} value={name} className="form-control" />
                                    </div>
                                    <div className="col-auto">
                                        <span id="nameHelpInline" className="form-text">
                                            İletişim mail adresinizi giriniz.
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col-auto">
                                        <label htmlFor="inputMail" className="col-form-label">E-mail:</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text" value={inputMail} onChange={inputMailChange} id="inputMail" className="form-control" />
                                    </div>
                                    <div className="col-auto">
                                        <span id="mailHelpInline" className="form-text">
                                            İletişim mail adresinizi giriniz.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <hr />
                                    <span className="col-form-label">Eğitim Durumu:</span>
                                    <select onChange={inputEducationStatus} value={educationStatus} id="educationStatus" className="form-select form-select-m mb-3">
                                        <option> </option>
                                        <option value="1">Lise</option>
                                        <option value="2">Lisans</option>
                                        <option value="3">Lisansüstü</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <hr />
                                    <span className="col-form-label">Doğum Tarihi:</span>
                                    <input id="birthDate" onChange={inputBirthDate} value={birthDate} type="date" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary mx-3 w-50" onClick={() => guncelle()}>Send</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasvuruBilgileri;