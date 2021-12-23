//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
//import Services from "../Sections/Services/index";
//import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import About2 from "../Sections/About2/index";
import About3 from "../Sections/About3/index";

import { Slider } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';

const App = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  const product = {
    price: 777.77,
    name: 'example',
    description: 'Lorem Isopum',
  };

  const [value, setValue] = useState(20);

  const changeValue = (event, value) => {
    setValue(value);
  };

  const getText = (valu) => `${value}`;

  const customMarks = [
    {
      value: 10,
      label: '$10',
    },
    {
      value: 20,
      label: '$20',
    },
    {
      value: 30,
      label: '$30',
    },
    {
      value: 40,
      label: '$40',
    },
    {
      value: 50,
      label: '$50',
    },
  ];

  return (
    <Container>
      <HeroSection />
      <About />
      <About2 />
      <About3 />
      <Contact />
    </Container>
  );
};

export default Home;
