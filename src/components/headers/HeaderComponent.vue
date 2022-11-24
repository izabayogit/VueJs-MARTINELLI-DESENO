<template>
  <div class="headerContainer">
    <div class="header-left">
      <img src="../../assets/images/logo.jpg" class="left-logo" />
    </div>
    <div class="header-leftMobile">
      <img src="../../assets/images/mobileLogo.jpg" class="left-logo" />
    </div>
    <div class="header-right">
      <div class="login-right">
        <img src="../../assets/images/account.jpg" class="headerLogo" />
        <img
          src="../../assets/images/mobileAccount.jpg"
          class="headerLogoMobile"
        />
        <p>LOGIN</p>
      </div>
      <div class="humberg">
        <i class="fas fa-bars burger-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.headerContainer {
  display: flex;
  justify-content: space-between;
  height: 110px;
  background: #000000;
}
.headerLogoMobile {
  display: none;
}
.header-right {
  display: flex;
}
.login-right {
  display: flex;
  justify-content: space-between;
}
.login-right p {
  margin-top: 45px;
  color: #ffffff;
}
.headerLogo {
  width: 18px;
  height: 20px;
  margin-right: 13px;
  margin-top: 40px;
}
.left-logo {
  margin-top: 30px;
}
.humberg {
  color: #ffffff;
  margin-top: 35px;
  margin-left: 56px;
  width: 25px;
  height: 17.5px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 7px;
  margin-right: 80px;
}
.burger-icon {
  width: 50px !important;
}
.header-left {
  margin-left: 80px;
}
.header-leftMobile {
  display: none;
}
@media only screen and (max-width: 600px) {
  .header-leftMobile {
    display: block;
    margin-left: 16px;
  }
  .header-left {
    display: none;
  }
  .left-logo {
    margin-top: 18px;
    height: 56px;
  }
  .headerContainer {
    display: flex;
    justify-content: space-between;
    height: 90px;
    background: #1e1e1e;
  }
  .headerLogoMobile {
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 0;
    margin-top: 32px;
  }
  .headerLogo {
    display: none;
  }
  .humberg {
    color: #ffffff;
    margin-top: 26px;
    margin-left: 32px;
    width: 25px;
    height: 17.5px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 7px;
    margin-right: 16px;
  }
  .login-right p {
    display: none;
  }
}
</style>
