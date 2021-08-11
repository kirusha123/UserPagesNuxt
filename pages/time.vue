<template>
  <div class="freespace">
    <div class="workspace">
      <div class="section">
        <Header/>
      </div>
      <div class="section">
        <Navbar id="2" />
      </div>
      <div class="section">
        <div id="time-content">
          <div class="timer-block">
            <div class="timer-header">
              <div class="float-left">
                <span>Timer</span>
              </div>
              <div class="float-right">
                <!--<i class="fas fa-chevron-up"></i>-->
                <font-awesome-icon :icon="['fas', 'chevron-up']"/>
              </div>
            </div>
            <div class="timer">
              <span id="timer">{{this.timer}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      timer:sessionStorage.getItem("timer"),
    }
  },
  created(){
    setInterval(() => {
      this.timer = sessionStorage.getItem("timer");
    }, 200);
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

  .timer-header {
  display: inline-block;
  width: 1216px;
  height: 20px;
  margin-left: 16px;
  margin-top: 16px;
  margin-right: 16px;
  vertical-align: bottom;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.005em;
  color: #2d2f33;
}
.timer-block {
  text-align: left;
  display: inline-block;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 24px;
  min-width: 1248px;
  max-width: 1249px;
  min-height: 88px;
  border: 1px solid #dde0e6;
}

.timer {
  margin: 16px 0;
  margin-left: 16px;
}
</style>