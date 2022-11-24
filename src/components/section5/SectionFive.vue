<template>
  <div>
    <div className="section5-container">
      <div className="left-div"></div>
      <div className="right-div">
        <div className="right-content">
          <p className="right-content-title">The best ideas for sofas</p>
          <p className="right-content-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at.
          </p>
          <button className="right-button">Show more <BsChevronRight /></button>
        </div>
      </div>
    </div>
    <div className="section5-containerPhone">
      <div className="right-div">
        <div className="right-content">
          <p className="right-content-title">The best ideas for sofas</p>
          <p className="right-content-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at.
          </p>
          <div className="buttonDown">
            <button className="right-button">
              Show more <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="left-div"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section5-container {
  display: flex;
}
.left-div {
  width: 57.9%;
  height: 558px;
  margin-right: 0.2%;
  margin-bottom: 0.2%;
  background-size: cover;
  background-image: url("../../assets/images/textile.jpg");
}
.right-div {
  margin-bottom: 0.2%;
  background: #1e1e1e;
  padding: 4.5rem 3rem 4.5rem 5rem;
}
.right-content-body {
  width: 492px;
  /* height: 96px; */
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.03em;
  color: #ffffff;
  text-align: left;
}
.right-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 800px;
  color: #ffffff;
  background-color: #1e1e1e;
}
.right-content-title {
  width: 469px;
  font-family: "Bodoni Moda";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  /* or 67px */

  /* WHITE */

  color: #ffffff;
}
.right-content {
  align-items: center;
}

.section5-containerPhone {
  display: none;
}
@media only screen and (max-width: 600px) {
  .section5-containerPhone {
    display: block;
  }
  .section5-container {
    display: none;
  }
  .right-div {
    margin-bottom: 0.2%;
    background: #1e1e1e;
    padding: 0;
    width: 100%;
  }
  .left-div {
    width: 100%;
    height: 558px;
    margin-right: 0;
    margin-bottom: 0%;
    background-size: cover;
    background-image: url("../../assets/images/textile.jpg");
  }
  .right-content-body {
    width: auto;
    /* height: 96px; */
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: #ffffff;
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
  }
  .right-content-title {
    width: auto;
    font-family: "Bodoni Moda";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
    padding-top: 36px;
  }
  .right-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;
    width: 328px;
    height: 56px;
    border: 1px solid #ffffff;
    border-radius: 800px;
  }
  .buttonDown {
    display: flex;
    justify-content: center;
    padding-bottom: 36px;
  }
}
</style>
