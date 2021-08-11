<template>
  <div class="freespace">
    <div class="workspace">
      <div class="section">
        <Header/>
      </div>
      <div class="section">
        <Navbar id="0" />
      </div>
        <div id="activity-content" class="active">
          <div class="section" style="text-align: left">
            <div class="post-block">
              <div class="post-header">
                <div class="float-left">
                  <div class="post-title">
                    <span>Himalayan sunset</span>
                  </div>
                </div>
                <div class="float-right">
                  <!--<i class="far fa-check-circle"></i>-->
                  <font-awesome-icon :icon="['fas', 'check-circle']" style="color: green;"/>
                  <span class="post-info">49 minutes ago</span>
                  <!--<i class="fas fa-chevron-up"></i>-->
                  <font-awesome-icon :icon="['fas', 'chevron-up']"/>
                </div>
              </div>
              <div class="image-box">
                <img
                  src="../assets/img/Girl.jpg"
                  alt="ABOBA"
                  style="max-width: 840px; max-height: 318px"
                />
              </div>
              <div class="comment-block">
                <div class="float-left">
                  <!--<i class="fas fa-envelope-open-text"></i>-->
                  <font-awesome-icon :icon="['fas', 'envelope-open-text']"/>
                  <span style="color: #2375e1; margin-left: 8px">
                    Kirill Dashkevich</span
                  >
                  <span>commented:</span>
                </div>
                <div class="float-left">
                  <div class="comment-content">
                    <span
                      >The sun disappearing behind the Himalayas. This was taken
                      from near the Tungnath temple (~3500m) in the Garwhal
                      Himalayas<br />
                      near Chopta. I think this is probably my favourite of all
                      of the sunset photos<br />
                      <span style="color: #6e7178">- Kirill, 10:39 am</span>
                    </span>
                  </div>
                </div>
                <div class="float-left" style="margin-top: 8px">
                  <div id="views">
                    <!--<i class="far fa-eye"></i>-->
                    <font-awesome-icon :icon="['far', 'eye']"/>
                    <span style="margin-left: 3px; margin-right:3px">438</span>
                    <!--<i class="far fa-comment-alt" style="margin-left: 16px"></i>
                    <font-awesome-icon :icon="['far', 'chevron-right']" style="margin-left: 16px"/>-->
                    <font-awesome-icon :icon="['far', 'comment-alt']"/>
                    <span style="margin-left: 2px">71</span>
                  </div>
                </div>
                <div class="float-right" style="margin-top: 8px">
                  <div class="views" style="margin-right: 16px">
                    <span>Read post</span>
                    <!--<i class="fas fa-chevron-right"></i>-->
                    <font-awesome-icon :icon="['fas', 'chevron-right']" style="margin-left:4px;"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="aside-nav">
              <div class="user-info">
                <img src="../assets/img/me.jpg" alt="GACHIMAN" class="user-image" />
                <div>
                  <span
                    style="
                      color: black;
                      font-size: 18px;
                      line-height: 24px;
                      font-family: Roboto;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 18px;
                      line-height: 24px;
                    "
                  >
                    Kirusha Omogus</span
                  >
                </div>
                <div style="margin-top: 12px">
                  <span
                    style="color: #a1a5ae; font-size: 14px; line-height: 20px"
                    >UI/UX designer</span
                  >
                </div>
                <div style="margin-top: 16px">
                  <!--<i class="fab fa-vk"></i>
                  <i class="fab fa-vk" style="margin-left: 10px"></i>
                  <i class="fab fa-vk" style="margin-left: 10px"></i>-->
                  <font-awesome-icon :icon="['fab', 'vk']"/>
                  <font-awesome-icon :icon="['fab', 'vk']"/>
                  <font-awesome-icon :icon="['fab', 'vk']"/>
                </div>
              </div>
              <div class="menu">
                <div class="navigation">
                  <div class="float-left">
                    <div style="margin-left: 24px; margin-top: 12px">
                      <span>Navigation</span>
                    </div>
                  </div>
                  <div class="float-right">
                    <div style="margin-right: 24px; margin-top: 12px">
                      <i class="fas fa-chevron-down"></i>
                      <font-awesome-icon :icon="['fas', 'chevron-down']"/>
                    </div>
                  </div>
                </div>
                <div class="nav-elem">
                  <a href="#">
                    <div class="float-left">
                      <div class="nav-ico">
                        <!--<i class="far fa-user"></i>-->
                        <font-awesome-icon :icon="['far', 'user']"/>
                        <span>My Profile</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="nav-elem">
                  <a href="">
                    <div class="float-left">
                      <div class="nav-ico">
                        <!--<i class="far fa-user"></i>-->
                        <font-awesome-icon :icon="['far', 'user']"/>
                        <span>Balance</span>
                      </div>
                    </div>
                  </a>
                  <div class="float-right">
                    <div class="money">
                      <span>$1,456</span>
                    </div>
                  </div>
                </div>
                <div class="nav-elem">
                  <a href="">
                    <div class="float-left">
                      <div class="nav-ico">
                        <i class="far fa-user"></i>
                        <font-awesome-icon :icon="['far', 'user']"/>
                        <span>Connections</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  class="nav-elem"
                  style="
                    border-bottom: solid;
                    border-bottom-color: #dde0e6;
                    border-bottom-width: 1px;
                  "
                >
                  <a href="">
                    <div class="float-left">
                      <div class="nav-ico">
                        <!--<i class="far fa-user"></i>-->
                        <font-awesome-icon :icon="['far', 'user']"/>
                        <span>Friends</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="nav-elem">
                  <a href="">
                    <div class="float-left">
                      <div class="nav-ico">
                        <!--<i class="far fa-user"></i>-->
                        <font-awesome-icon :icon="['far', 'user']"/>
                        <span>Connections</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="nav-elem">
                  <a href="">
                    <div class="float-left">
                      <div class="nav-ico">
                        <!--<i class="far fa-user"></i>-->
                        <font-awesome-icon :icon="['far', 'user']"/>
                        <span>Account settings</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="conversation-block">
              <div class="float-left">
                <span
                  style="margin-left: 16px; line-height: 20px; font-size: 14px"
                  >Conversation with James</span
                >
              </div>
              <div class="float-right">
                <font-awesome-icon :icon="['fas', 'chevron-down']" style="margin-right: 16px"/>
              </div>
            </div>
          </div>

          <div class="section" style="text-align: right">
            <div class="message-block">
              <div class="message-header">
                <div class="float-left">
                  <div style="margin-left: 24px; margin-top: 12px">
                    <span>Share your thoughts</span>
                  </div>
                </div>
                <div class="float-right">
                  <div style="margin-right: 16px; margin-top: 12px">
                    <!--<i class="fas fa-chevron-down"></i>-->
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                  </div>
                </div>
              </div>
              <div class="message-input">
                <div class="float-left">
                  <div style="margin-top: 10px; margin-left: 24px">
                    <span>Enter your message...</span>
                  </div>
                </div>
              </div>
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
    width: 100%;
    height: 100%;
    background-attachment: fixed;
  }

  .workspace {
    display: inline-block;
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

  .header .float-left > * {
    margin-left: 24px;
    margin-top: 20px;
  }
  .header .float-left > *:not(:first-child) {
    margin-left: 20px;
    margin-top: 20px;
  }

  .header .float-right > * {
    margin-right: 24px;
    margin-top: 20px;
  }

  .header .float-right > *:not(:last-child) {
    margin-right: 20px;
    margin-top: 20px;
  }

  .navbar .float-left > * {
    margin-left: 32px;
    margin-top: 19px;
  }
  .navbar .float-left > *:not(:first-child) {
    margin-left: 18px;
    margin-top: 19px;
  }

  .navbar .float-right > * {
    margin-right: 24px;
    margin-top: 14px;
  }

  .navbar .float-right > *:not(:last-child) {
    margin-right: 20px;
    margin-top: 14px;
  }

  .section {
    background-color: white;
  }

  .active {
    visibility: inherit;
  }

  .inactive {
    display: none;
  }

  .header {
    display: inline-block;
    width: 100%;
    height: 60px;
    text-align: center;

    border-bottom: solid;
    border-bottom-color: #dde0e6;
    border-bottom-width: 1px;
  }

  .header-title {
    display: inline;
    color: #2d2f33;
    font-family: Roboto;
    font-weight: 600;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }

  .navbar {
    display: inline-block;
    width: 100%;
    height: 48px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  }

  .navbar .item {
    cursor: pointer;
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #6e7178;
  }

  .navbar .active-item {
    cursor: pointer;
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #2375e1;
    border-bottom: solid;
    border-bottom-color: #2375e1;
    border-bottom-width: 2px;
  }

  .navbar .item:hover {
    color: #3f4146;
  }

  .aside-nav {
    vertical-align: top;
    display: inline-block;
    min-height: 696px;
    min-width: 352px;
    max-width: 353px;
    margin-top: 24px;
    margin-left: 24px;
  }

  .post-block {
    vertical-align: top;
    display: inline-block;
    min-width: 872px;
    max-width: 873px;
    min-height: 546px;
    margin-top: 24px;
    margin-left: 32px;
    border: 1px solid #dde0e6;
  }

  .post-header {
    height: 20px;
    margin-top: 16px;
    margin-right: 16px;
    margin-left: 16px;
    text-align: center;
  }

  .post-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.005em;
    color: #2d2f33;
  }
  .post-info {
    margin: 0 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.005em;
    color: #6e7178;
  }

  .comment-block {
    margin-top: 16px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 20px;
    margin-left: 16px;
    margin-right: 8px;
  }
  .comment-content {
    font-family: Roboto;
    margin-top: 16px;
    border-left: solid 2px #6e7178;
    padding-left: 16px;
    text-align: left;
  }
  .selected-text {
    color: #2375e1;
  }

  .views {
    font-family: Roboto;
    /*margin-top: 16px;*/
    color: #2d2f33;
    font-size: 14px;
    line-height: 20px;
  }

  .image-box {
    display: inline-block;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }

  .user-info {
    vertical-align: top;
    text-align: center;
    display: inline-block;
    width: 352px;
    height: 312px;
    background-color: #fff;
    border: 1px solid #dde0e6;
  }

  .user-image {
    display: inline-block;
    width: 144px;
    height: 144px;
    margin-top: 32px;
    margin-bottom: 16px;
    margin-left: 104;
    margin-right: 104;
  }

  .menu {
    background-color: white;
    display: inline-block;
    width: 100%;
    margin-top: 24px;
    min-height: 360px;
    max-height: 361px;
    border: 1px solid #dde0e6;
  }
  .navigation {
    font-family: Roboto;
    color: #000000;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
    border-bottom: solid;
    border-bottom-color: #dde0e6;
    border-bottom-width: 1px;
  }

  .nav-elem {
    color: #2d2f33;
    text-align: center;
    display: block;
    height: 42px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-top: 10px;
  }

  .nav-ico {
    margin-left: 24px;
    color: #2d2f33;
  }

  .nav-ico span {
    margin-left: 10px;
    color: #2d2f33;
  }

  .money {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    margin-right: 24px;
    color: #a1a5ae;
  }

  .conversation-block {
    font-family: Roboto;
    top: 700px;
    position: absolute;
    height: 52px;
    line-height: 52px;
    margin-top: 24px;
    margin-left: 32px;
    margin-right: 24px;
    width: 872px;
    border: 1px solid #dde0e6;
  }

  .message-block {
    display: inline-block;
    margin-top: 22px;
    margin-right: 22px;
    width: 352px;
    height: 190px;
    background-color: white;
    border: 1px solid #dde0e6;
  }

  .message-header {
    width: 352px;
    height: 48px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    border-bottom: solid;
    border-bottom-color: #dde0e6;
    border-bottom-width: 1px;
  }

  .message-input {
    width: 304px;
    height: 110px;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 15px;
    margin-bottom: 16px;
    border: 1px solid #dde0e6;
  }

</style>