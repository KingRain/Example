import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import lottie from 'lottie-web';
import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function Product({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    return (
      <div>
        <h1>Congrats, you just bought {product.name}!</h1>
        <img alt={product.description} />
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <h1>
        {product.description} for ${product.price}
      </h1>
      <img alt={product.description} src={product.image} width="200" />
      <div ref={paypalRef} />
    </div>
  );
}

function App() {
  const container = useRef(null)
  const product = {
    price: 777.77,
    name: 'example',
    description: 'Lorem Isopum',
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./Sections/About/ani1.json')
    })
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        <Header />
        <Home />
        <div className="App">
          <Product product={product} />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
