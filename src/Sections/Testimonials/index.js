import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Cool members and a chill server"
            name="BlackHat^"
            image="av1"
          />

          <Card
            text="Very good server, high moderation level and amazing members "
            name="Zeni"
            image="av2"
          />

          <Card
            text="best place to have fun and hang out with your lads"
            name="Keorome"
            image="av3"
          />

          <Card
            text="This server's Overall member's behavior is friendly and wholesome. This server is totally family-friendly/SFW!"
            name="Dr. Love"
            image="av4"
          />
          <Card
            text="the best server i ever been in."
            name="shnka™"
            image="av5"
          />
          <Card
            text="If you ever need help with anything just go to WorldWide. They are so chill with all kinds of people.the best server i ever been in."
            name="DaPinkNinja"
            image="av6"
          />
          <Card
            text="Now a partnership manager, I love worldwide it has so many positive ppl in there not to mention the kind owner and staff."
            name="lifeofdepression"
            image="av7"
          />
          <Card
            text="As a frequent user of Discord, I have been always trying to find the ideal and most friendly server on the platform. Worldwide is a like a family, where everyone will always help and talk to you."
            name="Freeze"
            image="av8"
          />
          <Card
            text="The best server on discord with no doubts, I adore this server, and its community <3"
            name="IamIn"
            image="av9"
          />
          <Card
            text="Best server I've been in so far, never had such a chill experience with a server. "
            name="NOWay"
            image="av10"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
