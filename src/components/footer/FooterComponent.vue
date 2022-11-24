<template>
  <div className="footer-container">
    <div className="foot-title">
      <div className="footer-logo">
        <img
          src="../../assets/images/footerLogo.jpg"
          alt="#"
          className="footer-lgo"
        />
      </div>
      <div className="footer-heading">
        <p className="contact">Contatti</p>
        <p><FiInstagram /></p>
        <p><SlSocialFacebook /></p>
      </div>
    </div>
    <div className="contactMobile">
      <p>Contatti</p>
    </div>

    <div className="footer-middle">
      <div className="middle1">
        <p>
          Dal 1947 lo spirito imprenditoriale<span> MARTINELLIGINETTO </span>si
          fonda sulle competenze tecniche, l’utilizzo delle tecnologie tessili
          più avanzate e sulla capacità di mobilitare energie professionali e
          creative in grado di innovare il prodotto a tutti i livelli.
        </p>
      </div>
      <div className="mid">
        <div className="middle2">
          <p>RECHIEDI IL PREMIO</p>
          <p>filati</p>
          <p>Tessuti</p>
          <p>Nobilitazione</p>
          <p>Editoria</p>
        </div>
        <div className="middle3">
          <p>INNOVAZIONE</p>
          <p>Creativita e Design</p>
          <p>Realta Produttiva</p>
          <p>Vision Digitale</p>
        </div>
        <div className="middle4">
          <p>RESPONSABILITA</p>
          <p>Economica</p>
          <p>Ambientale</p>
          <p>Sociale</p>
        </div>
        <div className="middle5">
          <p>CARRIERA</p>
          <p>Giovani</p>
          <p>Scuola lavoro</p>
          <p>Lavora con noi</p>
        </div>
      </div>

      <div className="midPhone">
        <div className="middle2">
          <p>RECHIEDI IL PREMIO</p>
          <p>filati</p>
          <p>Tessuti</p>
          <p>Nobilitazione</p>
          <p>Editoria</p>
        </div>
        <div className="middle3">
          <p>INNOVAZIONE</p>
          <p>Creativita e Design</p>
          <p>Realta Produttiva</p>
          <p>Vision Digitale</p>
        </div>
      </div>
      <div className="midPhone">
        <div className="middle4">
          <p>RESPONSABILITA</p>
          <p>Economica</p>
          <p>Ambientale</p>
          <p>Sociale</p>
        </div>
        <div className="middle5">
          <p>CARRIERA</p>
          <p>Giovani</p>
          <p>Scuola lavoro</p>
          <p>Lavora con noi</p>
        </div>
      </div>
    </div>
    <div>
      <div className="partnerDiv">
        <img
          src="../../assets/images/lstLogo.jpg"
          alt="#"
          className="partner1"
        />
        <img src="../../assets/images/italy.jpg" alt="#" className="partner2" />
        <img src="../../assets/images/kohro.jpg" alt="#" className="partner3" />
        <img
          src="../../assets/images/ciniglia.jpg"
          alt="#"
          className="partner4"
        />
        <img src="../../assets/images/msb.jpg" alt="#" className="partner5" />
      </div>

      <div className="partnerDivMobile">
        <img
          src="../../assets/images/lstLogo.jpg"
          alt="#"
          className="partner1"
        />
        <img src="../../assets/images/italy.jpg" alt="#" className="partner2" />
      </div>
      <div className="partnerDivMobile">
        <img src="../../assets/images/kohro.jpg" alt="#" className="partner3" />
        <img
          src="../../assets/images/ciniglia.jpg"
          alt="#"
          className="partner4"
        />
      </div>
      <div className="partnerDivMobile5">
        <img src="../../assets/images/msb.jpg" alt="#" className="partner5" />
      </div>
    </div>
    <div className="footerEnd">
      <div className="endleft">
        <p>Privacy</p>
        <p>Cookie policy</p>
      </div>
      <div className="endright">
        <p>
          Martinelli Ginetto S.p.A - C.F. e Partita Iva 03403660164 Cap.Sociale
          10.000.000 I.v. REA: BG – 375519
        </p>
      </div>
    </div>
    <div className="footerEndMobile">
      <div className="endright">
        <p>Martinelli Ginetto S.p.A</p>
        <p>- C.F. e Partita Iva 03403660164</p>
        <p>Cap.Sociale 10.000.000 I.v. REA: BG – 375519</p>
      </div>
      <div className="endleft">
        <p>Privacy</p>
        <p>Cookie policy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.foot-title {
  display: flex;
  margin-left: 110px;
  margin-right: 110px;
  justify-content: space-between;
}
.footer-heading {
  display: flex;
  margin-top: 89px;
}
.footer-logo {
  align-items: left;
  margin-top: 56px;
}
.footer-lgo {
  align-items: left;
  width: 213px;
  height: 94.13px;
}
.footer-heading p {
  margin-left: 32px;
  color: #ffffff;
  font-family: "Raleway";
  font-style: normal;
}
.footer-container {
  background: #1e1e1e;
}
.footer-middle {
  display: flex;
  color: #ffffff;
  margin-left: 110px;
  margin-right: 110px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.middle1 {
  width: 38%;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #ffffff;
}
.middle1 span {
  font-weight: bold;
}
.middle2 {
  margin-left: 0.8%;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  align-items: center;
  letter-spacing: 2px;
  color: #ffffff;
  margin-left: 24px;
}
.middle3 {
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  align-items: center;
  letter-spacing: 2px;
  color: #ffffff;
  margin-left: 24px;
}
.middle4 {
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  align-items: center;
  letter-spacing: 2px;
  color: #ffffff;
  margin-left: 24px;
}
.middle5 {
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  align-items: center;
  letter-spacing: 2px;
  color: #ffffff;
  margin-left: 24px;
}
.partnerDiv {
  display: flex;
  justify-content: space-between;
  margin-left: 110px;
  margin-right: 110px;
  margin-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.partner1 {
  width: 120.45px;
  height: 49px;
}
.partner2 {
  width: 114.5px;
  height: 29.67px;
}
.partner3 {
  width: 134px;
  height: 24.91px;
}
.partner4 {
  width: 127.29px;
  height: 34px;
}
.partner5 {
  width: 77.5px;
  height: 60px;
}
.footerEnd {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-left: 110px;
  margin-right: 110px;
  margin-top: 32px;
}
.endleft {
  display: flex;
  justify-content: space-between;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 28px;
  display: flex;
  letter-spacing: 2px;
  text-decoration-line: underline;
  color: #ffffff;
}
.endleft p {
  margin-right: 40px;
}
.endright {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 2px;
  color: #ffffff;
}
.mid {
  display: flex;
  justify-content: space-between;
}
.contact {
  display: block;
}
.contactMobile {
  display: none;
}
.midPhone {
  display: none;
}
.partnerDivMobile {
  display: none;
}
.partnerDivMobile5 {
  display: none;
}
.footerEndMobile {
  display: none;
}
@media only screen and (max-width: 600px) {
  .foot-title {
    display: block !important;
    margin-left: 16px !important;
    margin-right: 16px !important;

    width: auto !important;
  }
  .footer-lgo {
    width: auto;
    height: 64.13px;
  }
  .footer-heading {
    display: flex;

    margin-top: 89px;
  }
  .contact {
    display: none;
  }
  .foot-title {
    display: flex !important;
    margin-left: 16px !important;
    margin-right: 16px !important;
    justify-content: space-between !important;
  }
  .contactMobile {
    display: block;
    margin-left: 16px;
    color: #ffffff;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    text-decoration-line: underline;
  }
  .footer-middle {
    display: block;
    color: #ffffff;
    margin-left: 16px;
    margin-right: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .middle1 {
    width: auto;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 2px;
    color: #ffffff;
    align-items: center;
  }
  .mid {
    display: none;
  }
  .midPhone {
    display: flex;
    justify-content: space-between;
  }
  .partnerDiv {
    display: none;
  }
  .partnerDivMobile {
    display: flex;
    justify-content: space-between;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 32px;
    padding-bottom: 32px;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.3); */
  }
  .partnerDivMobile5 {
    display: flex;
    justify-content: space-between;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .footerEndMobile {
    color: #ffffff;
    display: block;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 32px;
  }
  .footerEnd {
    display: none;
  }
  .endright {
    font-family: "Raleway";
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 28px;
    align-items: left;
    text-align: left;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .middle2 {
    margin-left: 0.8%;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    align-items: center;
    letter-spacing: 2px;
    color: #ffffff;
    margin-left: 0px;
  }
  .middle3 {
    margin-left: 0.8%;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    align-items: center;
    letter-spacing: 2px;
    color: #ffffff;
    margin-left: 0px;
  }
  .middle4 {
    margin-left: 0.8%;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    align-items: center;
    letter-spacing: 2px;
    color: #ffffff;
    margin-left: 0px;
  }
  .middle5 {
    margin-left: 0.8%;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    align-items: center;
    letter-spacing: 2px;
    color: #ffffff;
    margin-left: 0px;
  }
  .endleft {
    display: flex;
    justify-content: flex-start;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 28px;
    display: flex;
    letter-spacing: 2px;
    text-decoration-line: underline;
    color: #ffffff;
  }
}
</style>
