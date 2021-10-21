import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
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
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;




const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Our Partners</Title>
      <Icons>
        <a href="https://www.facebook.com/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com//">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
    </ContactSection>
  );
};

export default Contact;
