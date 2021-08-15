/*import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        init_time:"",
        res_time:"00:00:00",
    },
    mutations:{
        calculateTime (state) {
            if (state.init_time === ""){
                state.init_time = new Date().getTime().toString();
            }

            let start_point = Number(state.init_time)
            let now = new Date().getTime();
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
            
            state.res_time = h_str+m_str+s_str;
        }
    }
});

export default store;*/

export const state = () => ({
    init_time:"",
    res_time:"00:00:00",
  })
  
export const mutations = {
    calculateTime (state) {
        if (state.init_time === ""){
            state.init_time = new Date().getTime().toString();
        }

        let start_point = Number(state.init_time)
        let now = new Date().getTime();
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
        
        state.res_time = h_str+m_str+s_str;
    }
}
