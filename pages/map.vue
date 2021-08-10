<template>
  <div class="freespace">
    <div class="workspace">
      <div class="section">
        <Header/>
      </div>
      <div class="section">
        <Navbar id="1" />
      </div>
      <div class="section">
        <div id="map-content">
          <div class="map-block">
            <div class="map-header">
              <div class="float-left">
                <span>Basic map</span>
              </div>
              <div class="float-right">
                <i class="fas fa-chevron-up"></i>
              </div>
            </div>
            <!--<img src="./img/map.jpg" alt="TytBylYa" class="map" />-->
            <div id="YMapsID" class="map"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default { 
  
}
</script>

<style>
    .freespace {
      display: inline-block;
      text-align: center;
      background-color: #e5e5e5;
      min-width: 100%;
      min-height: 100%;
      width: 100vw;
      height: 100vh;
    }

    .workspace {
      display: inline-block;
      height: 100%;
      min-width: 1312px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      background-color: white;
    }

    .float-left {
      float: left;
    }

    .float-right {
      float: right;
    }

    .section {
      background-color: white;
    }

    .map-block {
    display: inline-block;
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 24px;
    min-width: 1248px;
    max-width: 1249px;
    min-height: 476px;
    background-color: white;
    border: 1px solid #dde0e6;
  }

  .map-header {
    font-family: Roboto;
    display: inline-block;
    width: 1216px;
    height: 20px;
    line-height: 20px;
    margin-left: 16px;
    margin-top: 16px;
    margin-right: 16px;
    vertical-align: bottom;
  }

  .map {
    width: 1216px;
    height: 600px;
    margin: 16px;
  }

</style>