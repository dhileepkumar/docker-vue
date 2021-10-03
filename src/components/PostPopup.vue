<template>
    <div class="popup_holder">
        <div class="popup-inner">
            <div class="close" @click="Close">x</div>
            {{post.title}} <br/>
            {{post.desc}}
            <slot></slot>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
   
    props:{
        postId :Number,
        ClosePopup : function(){}
    },
    mounted(){
        console.log('slot_details',this.$slots.default[0])
        this.ShowPostID(this.postId)
    },
    watch:{
        post(oldvalue, new_value){
            console.log('oldvalue, new_value', oldvalue, new_value)
        }
    },
    methods:{
        ...mapActions(['ShowPostID']),
        Close(){
            this.$emit('ClosePopup',false)
        }
    },
    computed:{
        ...mapGetters({post:"SinglePost"})
    }
}
</script>
<style scoped>
.popup_holder{
    position: fixed;
    top: 0px;
    bottom: 0px;
    left:0px;
    background: #00000066;
    width: 100%;
}
.popup-inner{
    width:500px;
    background: #fff;
    color:#222;
    top: 50%;
    left: 50%;
    min-height: 400px;
    padding:10px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    position: relative;
}
.close {
    position: relative;
    float: right;
    top: -25px;
    right: -25px;
    background: #000;
    color: #fff;
    width: 25px;
    text-align: center;
    height: 26px;
    border-radius: 50%;
}
</style>