<template>
    <div>
        <div v-for="(posts, index) in PostLists" :key="index" class="main_holder" @click="GetClick(posts.id)">
            <div class="title">
                {{posts.title}}
            </div>
            <div class="description">
                {{posts.body}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name :'post_list',
    props:{
        PostLists : {
            type:[Array, Object],
        },
        ShowPopup : function(){},
    },
    methods:{
        GetClick(id){
            this.$emit('ShowPopup', id);
        }
    }
}
</script>
<style scoped>
.main_holder {
    padding: 10px;
    border-radius: 5px;
    border: 1px #ccc solid;
    margin-bottom: 20px;
}
</style>