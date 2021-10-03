<template>
    <div class="main">
        <post-list :PostLists="Posts" @ShowPopup="ShowClick"></post-list>
        <post-popup v-if="show_poup" :postId="postId" @ClosePopup="HidePopup">
            Popup is showing good            
        </post-popup>
    </div>
</template>
<script>
import  {mapGetters, mapActions} from 'vuex'
import PostList from '@/components/PostList'
import PostPopup from '@/components/PostPopup'
export default {
    name : 'post',
    data(){
        return {
            postId:"",
            show_poup :false
        }
    },
    mounted(){
        this.GetAllPost();
    },
    watch:{
        Posts(oldvalue, new_value){
            console.log('oldvalue, new_value', oldvalue, new_value)
        }
    },
    methods :{
        ...mapActions(['GetAllPost']),
        ShowClick(id){
            alert(id)
            this.postId = id
            this.show_poup = true
        },
        HidePopup(data){
            alert(data)
            this.show_poup = data
        }
    },
    computed:{
        ...mapGetters({Posts : "Posts"})
    },
    components:{
        PostList,
        PostPopup
    }
}
</script>