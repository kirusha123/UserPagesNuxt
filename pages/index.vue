<template>
  <div class="freespace">
    <div class="workspace">
      <div class="section">
        <Header/>
      </div>
      <div class="section">
        <Navbar id="-1" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
    middleware: [
      function({redirect}){
          redirect('/activity')
      }
    ]

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

</style>