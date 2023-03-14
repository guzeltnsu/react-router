import { useEffect } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './Header';

import arkaplan from './img/arkaplan.jpg';
import Sag from './Sag';
import BasvuruDetay from './BasvuruDetay';
import BasvuruBilgileri from './BasvuruBilgileri';
import GirisForm from './GirisForm';
import KayitForm from './Kayit_form';
import Basvur from "./Basvur";
import Sorular from "./Sorular";
import Sol from "./Sol";
import { icerikler } from "./Icerik";

export default function App() {
    return (<>
        <Router>
            <div style={{ backgroundImage: `url(${arkaplan})`, height: "100vh", backgroundSize: "cover" }}>
                <div className="row">
                    <Header />
                </div>
                <Route path="/giris">
                    <GirisForm />
                </Route>
                <Route path="/egitim">
                    <>
                        <Sol
                            baslik={"Eğitimler"}
                            icerik={icerikler[0]}
                        />
                    </>
                </Route>
                <Route path="/basvur">
                    <Basvur />
                </Route>
                <Route path="/sss">
                    <Sorular />
                </Route>
                <Route path="/hakkimizda">
                    <>
                        <div className="row mt-4">
                            <div className="col-md-4 offset-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        Hakkımızda
                                    </div>
                                    <div className="card-body">
                                        lorem ipsum dolor sit amet
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                </Route>
                <Route path="/basvurubilgileri">
                    <BasvuruBilgileri />
                </Route>
                <Route path="/basvurudetay">
                    <BasvuruDetay></BasvuruDetay>
                </Route>
                <Route path="/">
                    <></>
                </Route>
                <Route path="/kayitol">
                    <KayitForm />
                </Route>
                {/* <div className="row my-5">
            <div className="col-8" id="sol">
            </div>
            <div className="col-4" id="sag">
            <Sag />
            </div>
          </div>*/}
            </div>
        </Router>
    </>
    );
}