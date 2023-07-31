import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Shipping({ email, number }) {
  const [shippingMethod, setShippingMethod] = useState("");

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleContinueToPayment = () => {
    if (shippingMethod === "cashOnDelivery") {
     //  Kapıda Ödeme seçeneği
      // Belirli bir eylemi veya doğrulamayı gerçekleştirme
      console.log("Kapıda Ödeme seçildi");
      orderPlaced();
    } else {
     //  başka bir gönderim yöntemi 
      // doğrulama ya da işlevler gerçekleştirilir
      console.log("Başka bir kargo yöntemi seçildi");

     // Ödeme sayfasına devam et
      
    }
  };

  const orderPlaced = () => {
    alert("Siparişiniz alındı! Mutlu alışverişler!");
    window.location.href = "/";
  };

  return (
    <>
      <div className="container w-75">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/cart">Sepet</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/checkout/info">Bilgi</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/checkout/shipping">Teslimat</Link>
            </li>
          </ol>
        </nav>
        <table className="d-grid border p-3 rounded-4 my-5 mb-4">
          <div className="row ms-3">
            <div className="col-lg-2 text-primary">Email</div>
            <div className="col-lg-10">{email}</div>
          </div>
          <hr />
          <div className="row ms-3">
            <div className="col-2 text-primary">İletişim</div>
            <div className="col-10">{number}</div>
          </div>
        </table>
        <h4>Kargo Yöntemi</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="shippingMethod" className="form-label">
              Kargo Yöntemi Seç
            </label>
            <select
              className="form-select"
              id="shippingMethod"
              value={shippingMethod}
              onChange={handleShippingMethodChange}
            >
              <option value="">Seç...</option>
              <option value="cashOnDelivery">Kapıda Ödeme</option>
              <option value="onlinePayment">Online Ödeme</option>
            </select>
          </div>
        </form>
        <div className="d-flex text-primary text-lg m-3 mt-5 align-items-center justify-content-between">
          <Link to="/checkout/info">
            <div className="btn btn-outline-primary p-3">{"<"} Bilgi</div>
          </Link>
          {shippingMethod === "cashOnDelivery" ? (
            <Link to="/">
              <div className="btn btn-success p-3" onClick={orderPlaced}>
                  Sipariş Ver
              </div>
            </Link>
          ) : (
            <>
              {shippingMethod ? (
                <Link to="/checkout/payment">
                  <div className="btn btn-primary p-3">
                    Ödemeye Devam Et
                  </div>
                </Link>
              ) : (
                <div
                  className="btn btn-primary p-3"
                  onClick={() => alert("Lütfen Bir Seçenek Seçin")}
                >
                  Seçeneği Onayla
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
