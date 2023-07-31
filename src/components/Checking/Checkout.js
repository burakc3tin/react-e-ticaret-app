import React, { useState, useEffect } from "react";
import Product2 from "../Products/Product2";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart, updateCart } from "../../Store/action";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);

  const [total, setTotal] = useState(0);

  // toplam fiyat güncelle
  const handleQuantityChange = (productId, type) => {
    dispatch(updateCart({productId, type}))
 };

  // sepetten öğe sil
  const handleRemoveFromCart = (product) => {
    const confirmed = window.confirm("Bu öğeyi kaldırmak istiyor musunuz??");
    if (confirmed) {
      dispatch(removefromcart(product));
    }
  };

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].product.cost * cartItems[i].quantity;
      }
      return totalPrice.toFixed(2);
    };

    const totalPrice = calculateTotal();
    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <>
      <div className="cart-container d-flex" style={{ alignItems: "stretch", minHeight: "90vh" }}>
        <div className="w-75 container m-5" style={{ width: "60%" }}>
          <Outlet />
        </div>
        <div className="gift-card w-40 bg-primary p-3" data-bs-theme="light" style={{ width: "40%" }}>
          <div className="cart-item" style={{ maxHeight: "400px", overflow: "auto" }}>
            {cartItems.map((item) => (
              <Product2
                key={item.product.id}
                id={item.product.id}
                title={item.product.title}
                image={item.product.image}
                cost={item.product.cost}
                quantity={item.quantity}
                onChange={handleQuantityChange}
                onRemove={() => handleRemoveFromCart(item)}
              />
            ))}
          </div>
          <div className="input-field d-flex m-4 mt-0">
            <input className="form-control form-control my-3" data-bs-theme="light" placeholder="Hediye kodunuzu girin." />
            <div className="btn btn-success btn-lg my-3 mx-2">Onayla</div>
          </div>
          <div className="d-grid m-4 text-white">
            <div className="row">
              <div className="col">Ara toplam</div>
              <div className="col ms-auto">{total}</div>
            </div>
            <div className="row">
              <div className="col">Kargo</div>
              <div className="col ms-auto">Ücretsiz</div>
            </div>
            <div className="row mt-3">
              <h5 className="col">TOPLAM</h5>
              <h5 className="col ms-auto">₺ {total}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
