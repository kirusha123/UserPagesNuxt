<template>
    <div class="navbar">
        <div class="float-left">
            <div v-bind:id="header-activity" class="item" v-bind:class="{'active-item': selector[0].is_active}">
                 <NuxtLink class="link" to="/activity">
                    <i class="fas fa-bars"></i>
                    <span style="margin-left: 8px">Activity</span>
                 </NuxtLink>
            </div>            
            <div v-bind:id="header-map" class="item" v-bind:class="{'active-item': selector[1].is_active}">
                <NuxtLink class="link" to="/map">
                    <i class="far fa-calendar-alt"></i>
                    <span style="margin-left: 8px">Map</span>
                </NuxtLink>
            </div>           
            <div v-bind:id="header-time" class="item" v-bind:class="{'active-item': selector[2].is_active}">
                <NuxtLink class="link" to="/time">
                    <i class="fas fa-cog"></i>
                    <span style="margin-left: 8px">Time</span>
                </NuxtLink>
            </div>
        </div>
        <div class="float-right">
            <div class="item">
                <i class="far fa-sticky-note"></i>
                <span>Notes</span>
            </div>
            <div class="item">
                <i class="far fa-user"></i>
                <span>Friends</span>
            </div>
            <div class="item">
                <i class="far fa-user"></i>
                <span>Photos</span>
            </div>
            <div class="item">
                <i class="fas fa-cog"></i>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:{
            type:Number,
            required: true
        }
    },
    data(){
        return {
            selector: [
                    {is_active:false},
                    {is_active:false},
                    {is_active:false},
                ]

        };
    },
    created(){
        let idx = 0;
        this.selector.forEach(el => {
            if(this.id == idx.toString()){
                el.is_active = true;
            }
            idx += 1;
        });
    },
}
</script>

<style>

    .link{
        text-decoration: none;
        color: inherit;
    }

    link:hover{
        color: inherit;
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

</style>