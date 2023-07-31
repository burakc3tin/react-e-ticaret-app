import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Payments.css';

export default function Payment({ email, number }) {
    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePaymentSubmit = () => {
       // Ödeme gönderme mantığını burada işlenir
        // Daha sonraki işlemler için seçilen ödeme yöntemi kullanılabilir
        console.log("Selected Payment Method:", paymentMethod);

        // Ödeme gönderildikten sonra burada ek işlemler veya API çağrıları gerçekleşir
        // Örneğin, bir başarı mesajı gösterilir, sipariş durumu güncellenir, vb.
        //  uygulama gereksinimlerinize göre özelleştirilebilir back end.
        alert("Payment submitted successfully ! via " + paymentMethod);
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
                        <li className="breadcrumb-item">
                            <Link to="/checkout/shipping">Teslimat</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to="/checkout/payment">Ödeme</Link>
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
                    <hr />
                    <div className="row ms-3">
                        <div className="col-2 text-primary">Metod</div>
                        <div className="col-10">Standart-Ücretsiz</div>
                    </div>
                </table>
                <h4>Payment</h4>
                <div className="text-secondary">
                Tüm ödemeler güvenli ve şifrelidir
                                </div>
                <div className="border border-success d-flex justify-content-between p-3 rounded-4 my-3 px-5 bg-success bg-opacity-10">
                    <div className="payment-options">
                        <h5>Bir ödeme şekli seçin:</h5>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="creditCard"
                                name="paymentMethod"
                                value="creditCard"
                                checked={paymentMethod === "creditCard"}
                                onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="creditCard">Kredi Kartı</label>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="debitCard"
                                name="paymentMethod"
                                value="debitCard"
                                checked={paymentMethod === "debitCard"}
                                onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="debitCard">Debit Kart</label>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="netBanking"
                                name="paymentMethod"
                                value="netBanking"
                                checked={paymentMethod === "netBanking"}
                                onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="netBanking">Online Banka</label>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="upi"
                                name="paymentMethod"
                                value="upi"
                                checked={paymentMethod === "upi"}
                                onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="upi">UPI</label>
                        </div>
                    </div>
                </div>
                <div className="d-flex text-primary text-lg m-3 mt-5 align-items-center justify-content-between">
                    <Link to="/checkout/shipping">
                        <div className="btn btn-outline-primary p-3">{"<"} Kargo</div>
                    </Link>
                    <button className="btn btn-success p-3" onClick={handlePaymentSubmit}>
                       Şimdi Öde
                    </button>
                </div>
            </div>
        </>
    );
}
