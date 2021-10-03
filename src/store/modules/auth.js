import {postApis, getApis} from '../axios'
// import axios from "axios";
const state = {
    name : '',
    first_name : '',
    last_name : '',
    isAuthenticated : true,
    posts:[],
    SinglePost : {}
}

const getters = {
    Posts : (state) => state.posts,
    isAuthenticated : (state) => state.isAuthenticated,
    SinglePost : (state) => state.SinglePost
}

const actions = {
    async LogIn({commit}, user){
        let _Details = await postApis("login",user)
        console.log('_Details', _Details)
        commit("setUser", user.get("username"))
    },
    async ShowPostID({commit}, id){
        let _details = await getApis(`todos/${id}`)
        console.log('_details_12', _details)
        if(_details.status==200){
            let {data} = _details
            commit("setSinglePost", data)
        }
    },
    async GetAllPost({commit}){
        let _Details = await getApis("posts")
        if(_Details.status==200){
            let {data} = _Details
            commit("setPosts", data)
        }
        console.log('_Details', _Details)
    }
}

const mutations = {
    setUser(state, username){
        console.log('mutations', state, username)
    },
    setPosts(state, posts){
        state.posts = posts;
    },
    setSinglePost(state, posts){
        console.log('post', posts)
        state.SinglePost = posts
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}