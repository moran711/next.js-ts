import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contacts">
        <h3 className="contacts-header">Contacts</h3>
        <div className="contacts-container">
          <p className="phone-number">+34932691532</p>
          <p className="site">
            <a href="http://www.fcbarcelona.cat/">
              http://www.fcbarcelona.cat/
            </a>
          </p>
          <p className="address">Carrer de Jaume I, 18, 08002 Barcelona, Spain</p>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.2769780462!2d2.176830402728477!3d41.383563181547856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f9234595f9%3A0x69242b2f8dfe8a9f!2sBar%C3%A7a%20Store%20Jaume%20I!5e0!3m2!1suk!2sua!4v1604255943104!5m2!1suk!2sua"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{border:0}}
          aria-hidden="false"
        ></iframe>
      </div>
      </div>
  );
};

export default Contacts;
