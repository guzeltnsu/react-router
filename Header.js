import React, { Component } from 'react';
import NavList from './NavList';

import { logout, goster } from './Functions'
import { menu_eleman } from './Icerik';
import { Link } from 'react-router-dom';

const Header = () => {
  var isLogin = sessionStorage.getItem("loggedInUser");
  var loginButtons = isLogin ? "none" : "inline-block";
  var logoutButton = !isLogin ? "none" : "inline-block";

  return (
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="bootstrap_exp_site.html" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <i className="fa-solid fa-compass-drafting fa-2xl"></i>
            </a>


            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

              {menu_eleman.map((eleman, index) =>
              (
                <NavList
                  key={eleman.path}
                  name={eleman.name}
                  path={eleman.path}
                >
                </NavList>
                // <Link href={eleman.path}>{eleman.name}</Link>
                // <NavList
                //   key={eleman}
                //   menuElemani={eleman}
                //   tiklandiginda={() => goster(eleman, index)}
                // />
              )
              )}

            </ul>


            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark bg-dark text-white" placeholder="Ara..." aria-label="Search" />
            </form>


            <div className="text-end px-3" id="header_sag">
              {isLogin}
            </div>
            <div id="btn_div" style={{
              display: loginButtons
            }}>
              <a href="#"><button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={() => { window.location.href = "/giris" }}
              >
                Giriş
              </button>
              </a>
              <a href="#"><button
                type="button"
                className="btn btn-warning"
                onClick={() => { window.location.href = "/kayitol" }}
              >
                Kayıt Ol
              </button>
              </a>

              <a href="#"><button
                type="button"
                className="btn btn-warning"
                onClick={() => { window.location.href = "/BasvuruBilgileri" }}
              >
                Basvuru Bilgileri
              </button>
              </a>
              <a href="#"><button
                type="button"
                className="btn btn-warning"
                onClick={() => { window.location.href = "/BasvuruDetay" }}
              >
                Başvuru Detay
              </button>
              </a>

              
            </div>

            <div className="text-end">
              <button id="logout_Btn" type="button" className="btn btn-danger" style={{ display: logoutButton }} onClick={() => logout("")}>Çıkış</button>
            </div>




          </div>
        </div>
      </header>
    </>
  );
};


export default Header;