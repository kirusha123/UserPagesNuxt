<template>
    
</template>

<script>
export default {
    created(){
        if (!sessionStorage.getItem('start_point')) {
            sessionStorage.setItem('start_point',new Date().getTime().toString())
        }
        let start_point;
        setInterval(() => {
            let now = new Date().getTime();
            start_point = Number(sessionStorage.getItem('start_point'));
            let time_dif =  now - start_point;
        
            let hh = Math.floor(time_dif / 1000 / 60 / 60);
            time_dif -= hh * 1000 * 60 * 60;
            let mm = Math.floor(time_dif / 1000 / 60);
            time_dif -= mm * 1000 * 60;
            let ss = Math.floor(time_dif / 1000);
            time_dif -= ss * 1000;

            let h_str = ""
            let m_str = ""
            let s_str = ""

            if (hh < 10){
                h_str = "0" + hh + ":";
            }else{
                h_str = hh + ":"
            }

            if (mm < 10){
                m_str = "0" + mm + ":";
            }else{
                m_str = mm + ":"
            }

            if (ss < 10){
                s_str = "0" + ss;
            }else{
                s_str = ss;
            }
            
            let time_str = h_str+m_str+s_str;
            sessionStorage.setItem("timer",time_str);
            //console.log(sessionStorage.getItem("timer"));
        }, 100);
    }
}
</script>

<style scoped>
    *{
        display: none;
    }
</style>