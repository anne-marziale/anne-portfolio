import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>adresse</h4>
              <p>121 rue Villebois Mareuil</p>
              <p>94190 Villeneuve Saint-Georges</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0662960130" className="hover">
                <p
                  style={{ cursor: 'pointer' }}
                  className="clipboard"
                  onClick={() => {
                    alert('Téléphone copié !');
                  }}
                >
                  06 62 96 01 30
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="annemarziale@hotmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: 'pointer' }}
                  className="clipboard"
                  onClick={() => {
                    alert('Email copié !');
                  }}
                >
                  annemarziale@hotmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>fromScratch - 2020</p>
          </div>
        </div>
        <ButtonsBottom left={'/project-4'} />
      </div>
    </main>
  );
};

export default Contact;
