import React from "react";
import { Link } from "react-router-dom";

export default function Info({emailchange,numberchange}) {
    return (
        <>
            <div className="container w-75">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" ><Link to="/cart">Sepet</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/checkout/info">Bilgi</Link></li>
                        <li className="breadcrumb-item"><Link to="/checkout/shipping">Teslimat</Link></li>
                        <li className="breadcrumb-item" ><Link to="/checkout/payment">Ödeme</Link></li>
                    </ol>
                </nav>
                <form>
                    <h4>İletişim</h4>
                    <input type="email" className="form-control mt-3 mb-1" placeholder="Email" onChange={emailchange} />
                    <input type="checkbox" className="form-check-input mt-2 me-1" id="exampleCheck1" /> güncelleme bildirimleri al
                    <h4 className="mt-4 mb-3">Teslimat Adresi</h4>
                    <select className="form-select">
                        <option selected>İstanbul</option>
                        <option value="1">İzmir</option>
                        <option value="2">Ankara</option>
                        <option value="3">Bursa</option>
                        <option value="4">Kocaeli</option>
                        <option value="5">Tekirdağ</option>
                        <option value="6">Kayseri</option>
                        <option value="7">Hatay</option>
                        <option value="8">Diyarbakır</option>
                        <option value="9">Muş</option>
                        <option value="10">Rize</option>
                        <option value="11">Aydın</option>
                        <option value="12">Hakkari</option>
                        <option value="13">Antalya</option>
                    </select>
                    <div className="d-flex my-3 gap-3">
                        <input className="form-control" placeholder="İsim" />
                        <input className="form-control" placeholder="Soyisim" />
                    </div>
                    <input className="form-control" placeholder="Adres" />
                    <input className="form-control mt-3" placeholder="Sokak,cadde" />
                    <div className="d-flex my-3 gap-3">
                        <input className="form-control" placeholder="İl" />
                        <input className="form-control" placeholder="İlçe" />
                        <input className="form-control" placeholder="Posta Kodu" />
                    </div>
                    <input className="form-control mt-3 mb-4" placeholder="Tel No" onChange={numberchange} />
                </form>
                <div className="d-flex text-primary text-lg m-3 mt-5 align-items-center justify-content-between">
                    <Link to="/Shop"><div className="btn btn-outline-primary p-3">{"<"} Alışverişe Dön</div></Link>
                    <Link to="/checkout/shipping"><div className="btn btn-primary p-3">Devam Et</div></Link>
                </div>
            </div>
        </>
    )
}