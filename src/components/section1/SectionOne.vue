<template>
  <div>
    <div className="creativity1">
      Creativity, pure Italian style and continuous research, in order to infuse
      jacquard fabrics that are rich in tradition with contemporary spirit.
    </div>
    <div className="smallCreativity">
      A family tradition of artisan textile production, dedicated to the
      creation of high-end yarn-dyed jacquard fabrics, all of which are made in
      Italy. Today, the BRIGNOLI brand is widely recognised for its honed
      stylistic skill, its creative sophistication and its attention to detail.
      Custom solutions to meet the needs of the constantly-evolving residential
      and hotel sectors; not only classic weaves, but also fabrics for
      accessories that are rich in details and artisan craftsmanship
    </div>
    <div className="catalog-div">
      <p className="catalogue">catalog</p>

      <div className="catalog-subdiv1">
        <div className="inner-subdiv1">
          <p className="catalog-title">TESSUTE</p>
          <hr className="catalog-divider" />
          <div class="catalog-body-div">
            <p className="catalog-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </div>
      <div className="lower-subdiv">
        <div className="catalog-subdiv2">
          <div className="inner-subdiv2">
            <p className="catalog-title">Category</p>
            <hr className="catalog-divider2" />
            <div class="catalog-body-div">
              <p className="catalog-body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="catalog-subdiv3">
          <div className="inner-subdiv2">
            <p className="catalog-title">Category</p>
            <hr className="catalog-divider2" />
            <div class="catalog-body-div">
              <p className="catalog-body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.creativity1 {
  font-family: "Bodoni Moda" !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 56px !important;
  line-height: 120% !important;
  text-align: center !important;
  margin-left: 110px !important;
  margin-right: 110px !important;
  margin-top: 64px !important;
  color: #000000 !important;
}
.smallCreativity {
  font-family: "Raleway" !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 16px !important;
  line-height: 24px !;
  letter-spacing: 0.03em !important;
  color: #000000 !important;
  margin-left: 110px !important;
  margin-right: 110px !important;
  text-align: center !important;
  margin-top: 25px !important;
}
.smallCreativity p {
  margin-left: 60px;
  margin-right: 60px;
  text-align-last: center;
  text-align: justify;
}
/* ++++++++++++++++++ */

.catalog-subdiv1 {
  background-image: url("../../assets/images/fabric4.PNG");
  background-size: cover;
  margin-left: 110px;
  margin-right: 110px;
  padding: 4rem 0 4rem 0;
}
.catalog-subdiv2 {
  width: 49.5%;
  background-image: url("../../assets/images/newFabric.jpg");
  background-size: cover;
  margin-bottom: 64px;
  padding-bottom: 4rem;
  padding-top: 4rem;
}
.catalog-subdiv3 {
  width: 49.5%;
  background-image: url("../../assets/images/phabric1.jpg");
  background-size: cover;
  margin-bottom: 64px;
  padding-bottom: 4rem;
  padding-top: 4rem;
}
.lower-subdiv {
  margin-left: 110px;
  margin-right: 110px;
  margin-left: 110px;
  margin-right: 110px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.catalogue {
  font-family: "Bodoni Moda";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #000000;
  text-align: left;
  margin-left: 110px;
  margin-top: 32px;
}
.catalog-title {
  font-family: "Bodoni Moda";
  font-style: normal;
  font-size: 56px;
  color: #ffffff;
  text-align: center;
}
.catalog-body {
  width: 515px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  margin-top: 20px;
}
.catalog-body-div {
  display: flex;
  justify-content: center;
}
.catalog-divider {
  width: 50px;
  color: #ffffff;

  align-items: center;
  width: 5%;
  margin: 0 46.5% 0 46.5%;
  border: 1px solid #ffffff;
}
.catalog-body2 {
  width: 250px;
  height: 48px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  margin-top: 20px;
}

.catalog-divider2 {
  /* width: 50px; */
  color: #ffffff;
  height: 0px;
  align-items: center;
  width: 10%;
  margin: 0 45% 0 45%;
  border: 1px solid #ffffff;
}

@media only screen and (max-width: 600px) {
  .creativity1 {
    font-family: "Bodoni Moda";
    font-weight: 700;
    font-size: 18px !important;
    text-align: center;
    color: #000000;
    margin-left: 16px !important;
    margin-right: 16px !important;
  }
  .smallCreativity {
    /* font-family: 'Montserrat' !important; */
    font-weight: 400 !important;
    font-size: 14px !important;
    color: #000000 !important;
    margin-left: 16px !important;
    margin-right: 16px !important;
    letter-spacing: 0.03em !important;
    padding: 0 !important;
  }
  .catalog-subdiv1 {
    background-image: url("../../assets/images/fabric4.jpg");
    background-size: cover;
    margin-left: 16px !important;
    margin-right: 16px !important;
    padding: 5rem 0 5rem 0;
  }
  .catalog-title {
    font-family: "Bodoni Moda";
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 0 !important;
  }
  .catalogue {
    font-family: "Bodoni Moda";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #000000;
    text-align: left;
    margin-left: 16px !important;
    margin-top: 32px;
  }
  .lower-subdiv {
    margin-left: 16px !important;
    margin-right: 16px !important;
    margin-top: 10px !important;
    margin-top: 4px !important;
    display: block;
  }
  .catalog-subdiv2 {
    width: 100% !important;
    background-image: url("../../assets/images/newFabric.jpg");
    background-size: cover;
    margin-bottom: 4px !important;
    padding-bottom: 4rem !important;
    padding-top: 4rem !important;
  }
  .catalog-subdiv3 {
    width: 100% !important;
    background-image: url("../../assets/images/phabric1.jpg");
    background-size: cover;
    margin-bottom: 4px;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
  .catalog-title {
    font-family: "Bodoni Moda";
    font-size: 40px !important;
    color: #ffffff;
    text-align: center;
  }
}
</style>
