<template>
  <div>
    <div className="product">
      <div className="product-subdiv1">
        <div>
          <p className="content-title">Top bought products</p>
          <p className="divContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>

          <p className="divContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis
          </p>

          <p className="divContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostr
          </p>
        </div>
      </div>
      <div className="product-subdiv2">
        <div>
          <img
            src="../../assets/images/pll.jpg"
            alt="#"
            className="imageDiv "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.product {
  margin-left: 110px;
  margin-right: 110px;
  margin-top: 85px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 64px;
}

.imageDiv {
  width: 598px;
  height: 484px;
  margin-left: 19px;
}
.firstRow {
  margin-left: 110px !important;
  margin-right: 110px !important;
}

.content-title {
  font-family: "Bodoni Moda";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-align: left;
  color: #1e1e1e;
}

.divContent {
  /* width: 496px; */
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  color: #1e1e1e;
}
.imageDiv {
  width: 598px;
}

@media only screen and (max-width: 600px) {
  .product {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 36px;
    display: block;
    background: #f5f5f4 !important;
    /* padding-bottom: 64px; */
  }
  .product-subdiv1 {
    margin-left: 16px;
    margin-right: 16px;
  }
  .imageDiv {
    width: 100%;
    height: 484px;
    margin-left: 0px;
  }
  .product-subdiv2 {
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
