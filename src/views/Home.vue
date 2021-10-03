<template>
    <div class="main">
        <p class="text-centre" @click="clicked('Welcome')">
            {{ 'USA' |  currency('$') }}
        </p>
    </div>
</template>
<script>
import ClickMixins from  '@/mixins/clickMixin.js';
export default {
    mixins:[ClickMixins],
    mounted(){
        this.clicked(1)
        let _value = this.replaceString('currency')
        console.log('_value', _value)
    },
    
    filters:{
        currency: function(value, arg1, arg2){
            console.log('currency', value, arg2)
          
            return arg2+value;
        },
        reverse : function (value){
            return value.split('').reverse().join('')
        }
    } 
}
</script>
<style scoped>
.text-centre{
    text-align: center;
}
</style>