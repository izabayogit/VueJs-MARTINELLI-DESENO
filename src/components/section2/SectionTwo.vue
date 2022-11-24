<template>
  <div>
    <div className="section2-container">
      <div>
        <p className="sec2-title">Featured Products</p>
      </div>
      <div className="innerSubdiv">
        <div className="subdiv1"></div>
        <div className="productFooter">
          <div className="productDesc">Lorem ipsum dolor sit amet</div>
          <div className=" markers">
            <p className="red"></p>
            <p className="gray"></p>
            <p className="green"></p>
            <p className="brown"></p>
            <p className="count"><span className="superscript">+</span>20</p>
          </div>
        </div>
        <div className="subdiv2"></div>
        <div className="productFooter">
          <div className="productDesc">Lorem ipsum dolor sit amet</div>
          <div className=" markers">
            <p className="red"></p>
            <p className="gray"></p>
            <p className="green"></p>
            <p className="brown"></p>
            <p className="count"><span className="superscript">+</span>20</p>
          </div>
        </div>
        <div className="subdiv3"></div>
        <div className="productFooter">
          <div className="productDesc">Lorem ipsum dolor sit amet</div>
          <div className=" markers">
            <p className="red"></p>
            <p className="gray"></p>
            <p className="green"></p>
            <p className="brown"></p>
            <p className="count"><span className="superscript">+</span>20</p>
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
.section2-container {
  padding: 0px 110px;
  background: #edeae6;
  padding-bottom: 64px;
}

.sec2-title {
  font-family: "Bodoni Moda";
  font-weight: 700;
  font-size: 40px;
  color: #1e1e1e;
}
.innerSubdiv {
  display: flex;
  /* width: 100%; */
}
.subdiv1 {
  width: 30%;
  height: 345px;
  margin-right: 4.995%;
  background-size: cover;
  background-image: url("../../assets/images/pillow1.jpg");
}
.subdiv2 {
  width: 30%;
  height: 345px;
  margin-right: 1.665%;
  background-size: cover;
  background-image: url("../../assets/images/phabric1.jpg");
}
.subdiv3 {
  width: 30%;
  height: 345px;
  margin-left: 3.33%;
  width: 30%;
  background-size: cover;
  background-image: url("../../assets/images/pillow2.jpg");
}

.subdiv1Footer {
  width: 30%;
  margin-right: 4.995%;
}
.subdiv2Footer {
  width: 30%;
  height: 345px;
  margin-right: 1.665%;
}

.innerSubdiv2 {
  display: flex;
  /* width: 100%; */
}
.productFooter {
  display: None;
}
@media only screen and (max-width: 600px) {
  .sec2-title {
    font-family: "Bodoni Moda";
    width: 328px !important;
    font-weight: 700 !important;
    font-size: 40px !important;
    color: #1e1e1e;
    margin-left: 16px !important;
  }
  .innerSubdiv {
    display: block !important;
    width: 100%;
  }
  .subdiv1 {
    width: 100%;
    height: 345px;
    background-size: cover;
    background-image: url("../../assets/images/pillow1.jpg");
  }
  .section2-container {
    background: #ffffff !important;
    padding: 0px 16px;
  }

  .productFooter {
    display: block;
  }
  .markers {
    display: flex;
  }
  .red {
    width: 20px;
    height: 20px;
    background: #973528;
    border-radius: 50%;
    margin-right: 15px;
  }
  .gray {
    width: 20px;
    height: 20px;
    background: #9a9ea3;
    border-radius: 50%;
    margin-right: 15px;
  }
  .green {
    width: 20px;
    height: 20px;
    background: #00513c;
    border-radius: 50%;
    margin-right: 15px;
  }
  .brown {
    width: 20px;
    height: 20px;
    background: #1e1e1e;
    border-radius: 50%;
    margin-right: 15px;
  }
  .superscript {
    position: relative;
    top: -0.2em;
    font-size: 80%;
  }
  .count {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
  .productDesc {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #1e1e1e;
    padding-bottom: 18px;
    margin-top: 16px;
  }
  .subdiv2 {
    width: 100%;
    height: 345px;
    background-size: cover;
    background-image: url("../../assets/images/phabric1.jpg");
    margin-left: 0 !important;
    margin-right: 16px !important;
  }
  .subdiv3 {
    width: 100%;
    height: 345px;
    margin-right: 16px !important;
    margin-left: 0 !important;
    background-size: cover;
    background-image: url("../../assets/images/pillow2.jpg");
  }
}
</style>
