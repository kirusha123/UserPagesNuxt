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
                <!--<i class="fas fa-chevron-up"></i>-->
                <font-awesome-icon :icon="['fas', 'chevron-up']"/>
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
import { loadYmap } from 'vue-yandex-maps'

export default {
  data(){
    return{
      settings:{
        apiKey: '3993f4de-45b9-4907-8af0-e2115b350b9a',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      }
    }
  }, 
  async mounted() {
    await loadYmap({ ...this.settings, debug: true });
        ymaps.ready(init);
        function init() {
          let myMap = new ymaps.Map("YMapsID", {
            center: [56.75, 37.16],
            zoom: 7,
          }),
          myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.753450272088116,37.16410160155168]
            },
            properties: {
                iconContent: 'Temple of Web Development',
                hintContent: 'Makaka Web Web Makaka'
            }
          }, 
          {

            preset: 'islands#blackStretchyIcon',
            draggable: false
          })

          myMap.geoObjects.add(myGeoObject)

        };


  }
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