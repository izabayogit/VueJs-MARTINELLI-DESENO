<template>
  <div>
    <div className="section4-container">
      <div className="contentTrue">
        <div className="textDiv">
          <p className=" product-title">Products you might like</p>
          <p className="icons">
            <span>
              <!-- <i class="fa-solid fa-chevron-left" className="left-icon"></i> -->
              <!-- <i class="fa-solid fa-chevron-right" className="right-icon"></i> -->
            </span>
          </p>
        </div>
        <div className="section4-inner">
          <div className="innerContent1"></div>
          <div className="innerContent2"></div>
          <div className="innerContent3"></div>
          <div className="innerContent4"></div>

          <div className="innerContent5"></div>
        </div>
      </div>
      <div className="productFooter">
        <div className="lowerSections">
          <div className="lowerdec">
            <div className="productDesc">Lorem ipsum dolor sit amet</div>
            <div className=" markers">
              <p className="red"></p>
              <p className="gray"></p>
              <p className="green"></p>
              <p className="brown"></p>
              <p className="count"><span className="superscript">+</span>14</p>
            </div>
          </div>
          <div className="lastDiv">
            <div className="productDesc">Lorem</div>
            <div className=" markers">
              <p className="red"></p>
            </div>
          </div>
        </div>
        <div className="pagination">
          <p className=" left">
            <i class="fas fa-chevron-left left-pagination-icon"></i>
          </p>
          <span className="active">1</span>
          <span className="inactive">2</span>
          <span className="inactive">3</span>
          <span className="inactive">4</span>
          <p className="right">
            <i class="fas fa-chevron-right pagination-icon"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section4-container {
  text-align: left;
  background: #edeae6;
  margin-right: 0;
  padding-right: 0;
  padding-bottom: 64px;
}
.innerContent1 {
  width: 23.5%;
  height: 400px;
  margin-right: 1.665%;
  background-image: url("../../assets/images/pillow1.jpg");
  background-size: cover;
}
.section4-inner {
  display: flex;
  margin-right: 0;
  padding-right: 0;
}
.innerContent2 {
  width: 23.5%;
  height: 400px;
  margin-right: 1.665%;
  background-size: cover;
  background-image: url("../../assets/images/phabric1.jpg");
}
.innerContent3 {
  width: 23.5%;
  height: 400px;
  margin-right: 1.665%;
  background-size: cover;
  background-image: url("../../assets/images/pillow2.jpg");
}
.innerContent4 {
  width: 23.5%;
  height: 400px;
  margin-right: 1.665%;
  background-size: cover;
  background-image: url("../../assets/images/pll.jpg");
}
.innerContent5 {
  width: 6%;
  height: 400px;
  margin-right: 0;
  background-size: cover;
  background-image: url("../../assets/images/pillow2.jpg");
}
.contentTrue {
  margin-left: 110px;
  margin-right: 0;
  padding-right: 0;
}
.textDiv {
  display: flex;
  padding-top: 64px;
  margin-bottom: 64px;
  justify-content: space-between;
}

.right-icon {
  width: 24px;
  height: 24px;
  color: #1e1e1e;
}
.left-icon {
  color: #d9d9d9;
  width: 24px;
  height: 24px;
}
.right-icon:hover {
  cursor: pointer;
}
.left-icon:hover {
  cursor: pointer;
}
.product-title {
  width: 702px;
  height: 50px;
  font-family: "Bodoni Moda";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #000000;
}
.productFooter {
  display: None;
}
.section4-innerPhone {
  display: none;
}
.pagination {
  display: none;
}
@media only screen and (max-width: 600px) {
  .innerContent1 {
    display: none !important;
  }
  .innerContent2 {
    display: none !important;
  }
  .innerContent3 {
    display: none !important;
  }
  .innerContent4 {
    width: 70%;
    height: 400px;
    margin-right: 10%;
    background-size: cover;
    background-image: url("../../assets/images/pll.jpg");
  }
  .innerContent5 {
    width: 20%;
    height: 400px;
    background-size: cover;
    background-image: url("../../assets/images/pll.jpg");
  }
  .icons {
    display: none;
  }
  .contentTrue {
    margin-left: 16px;
    margin-right: 0;
    padding-right: 0;
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
  .lowerSections {
    display: flex;
    justify-content: space-between;
  }
  .lastDiv {
    width: 20%;
  }
  .lowerdec {
    margin-left: 16px;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    padding: 46px 0px 0px 16px;
    margin-left: 0px;
    margin-right: 16px;
  }
  .pagination p {
    align-items: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 2px solid #9a9ea3;
    background: #edeae6;
    text-align: center;
    color: #484a4d;
    font-weight: 300;
  }
  .countIcons {
    font-size: 20px;
  }
  .active {
    width: 8px;
    height: 30px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #1e1e1e;
    margin-top: 20px;
  }
  .inactive {
    width: 8px;
    height: 30px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #9a9ea3;
    margin-top: 20px;
  }
  .left {
    margin-right: 50px;
  }
  .right {
    margin-left: 50px;
  }
  .pagination-icon {
    margin-top: 10px;
  }
  .left-pagination-icon {
    margin-top: 10px;
    color: #9a9ea3;
  }
}
</style>
