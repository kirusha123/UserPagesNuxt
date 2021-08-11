<template>
    <div class="header">
        <div class="float-left">
            <div class="fas fa-chevron-left"></div>
            <div class="header-title">
                <span>User Pages</span>
            </div>
        </div>
        <div class="float-right">
            <i class="far fa-bell"></i>
            <font-awesome-icon :icon="['far', 'bell']"/>
            <i class="far fa-user"></i>
            <font-awesome-icon :icon="['far', 'user']"/>
        </div>
    </div>
</template>

<script>
export default {
    head:{
        link:[
            {
                href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
                rel: "stylesheet",
            },
        ],
    },
}
</script>

<style>

    span{
        font-family: "Roboto";
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
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
    }
</style>