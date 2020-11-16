<template>
    <div v-if="!busy">
        <h1>Hi {{currentUser}}</h1>
        <router-link to="/admin" v-if="isAdmin">Admin panel</router-link>
    </div>
</template>

<script>

import { mapGetters} from "vuex";
export default {
    created() {
        this.loadCurrentUser()

    },
    title: 'Cabinet',
    data(){
        return {
            busy: true
        }
    },
    computed: {
        ...mapGetters([
            'isLoggedIn','currentUser', 'isAdmin'
        ])
    },
    methods: {
        async loadCurrentUser(){
                const user = await this.$store.dispatch('loadCurrentUser')
                this.busy = false
                console.log(user)
            

        }
    }
    
}
</script>