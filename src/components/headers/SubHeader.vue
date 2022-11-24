<template>
  <div>
    <div class="mainContainer">
      <div class="leftContainer">
        <img class="brignoli" src="../../assets/images/brignoli.jpg" />
      </div>
      <div class="rightContainer">
        <div class="innerRight">
          <p class="catalod">CATALOG</p>
          <i class="fas fa-chevron-left flesh-icon"></i>
          <p class="first-paragraph">SOLUTIONS</p>
          <p>NEWS</p>
          <P> PROJECTS </P>
          <i class="fas fa-chevron-right flesh-icon"></i>
        </div>
        <div class="innerRightPhone">
          <p class="catalod">CATALOG</p>
          <div class="phone-inner">
            <i
              :class="{
                'fas fa-chevron-left flesh-iconLeft ': content === 0,
                'fas fa-chevron-left flesh-icon': content != 0,
              }"
              @click="decrementContent"
            ></i>
            <p class="first-paragraph">{{ this.contentData[this.content] }}</p>
            <i
              :class="{
                'fas fa-chevron-right flesh-iconLeft ': content === 2,
                'fas fa-chevron-right flesh-icon': content != 2,
              }"
              @click="incrementContent"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentData: ["SOLUTIONS", "NEWS", "PROJECTS"],
      content: 0,
      i: 0,
    };
  },
  methods: {
    incrementContent() {
      if (this.i < this.contentData.length - 1) {
        this.i++;
        this.content = this.i;
      }
    },
    decrementContent() {
      if (this.i > 0) {
        this.i--;
        this.content = this.i;
      }
    },
  },
};
</script>

<style>
.mainContainer {
  display: flex;
  justify-content: space-between;
}
.innerRight {
  display: flex;
  justify-content: space-between;
  margin-right: 80px;
  margin-top: 20px;
  color: #ffffff;
}
.rightMenu {
  display: flex;
  justify-content: space-between;
}
.innerRight p {
  margin-right: 30px !important;
}
.innerRight .first-paragraph {
  margin-left: 30px;
  text-decoration: underline;
}
.flesh-icon {
  margin-top: 15px;
}
.flesh-iconLeft {
  margin-top: 15px;
}
.leftContainer {
  margin-left: 80px;
}
.brignoli {
  width: 211.06px;
  height: 80px;
}
.mainContainer {
  background: #a3846b;
  padding: 10px;
  height: 100px;
}
.innerRightPhone {
  display: none;
}
.catalod {
  font-family: "Montserrat";
  font-weight: 700;
  color: #ffffff;
}
@media only screen and (max-width: 600px) {
  .innerRightPhone {
    display: block;
    align-items: center;
    text-align: center;
  }
  .innerRight {
    display: none;
  }
  .phone-inner {
    display: flex;
    justify-content: center;
    color: #ffffff;
    margin-right: 16px;
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom: 20px;
  }
  .phone-inner p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-left: 24px;
    margin-right: 24px;
    text-decoration: underline;
  }
  .phone-inner .flesh-icon {
    margin-top: 20px;
  }
  .flesh-iconLeft {
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.2);
  }
  .catalod {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-right: 10px;
    /* line-height: 22px; */
  }
  .leftContainer {
    padding-bottom: 15px;
    padding-top: 15px;
    margin-left: 16px;
  }
  .brignoli {
    width: 134px;
    /* height: 55px; */
  }
}
</style>
