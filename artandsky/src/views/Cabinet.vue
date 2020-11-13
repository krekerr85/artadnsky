<template>
    <div v-if="!busy">
        <h1>Hi {{currentUser}}</h1>
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
            'isLoggedIn'
        ]),
        currentUser(){
            return this.$store.state.user.data.email
        },
    },
    methods: {
        async loadCurrentUser(){
            if (this.$store.state.currentUser == null){
                this.busy = true
                await this.$store.dispatch('loadCurrentUser')
                this.busy = false
            }
            

        }
    }
    
}
</script>