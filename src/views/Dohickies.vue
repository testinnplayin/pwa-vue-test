<template>
    <main class="dohickies main-c container">
        <h1>Dohicky List: </h1>
        <b-row>
            <b-col sm="12">

                <b-list-group v-if="dohickies && dohickies.length > 0"
                    class="d-list list-el">
                    <b-list-group-item v-for="(dohicky, ind) of dohickies"
                        @click="handleDClick"
                        :id="dohicky._id"
                        :key="ind"
                        :variant="(!dohicky.is_ok) ? 'danger' : null"
                        button
                        class="d-list-item">{{(dohicky.thingamabob_id) ? dohicky.thingamabob_id.awesome_field : dohicky.thingamabob_bp.awesome_field}}</b-list-group-item>
                </b-list-group>

                <section v-else>
                    <h2>Loading...</h2>
                </section>

            </b-col>
        </b-row>
        <d-modal 
            @turnOffDModal="turnOffDModal"
            :dohicky="dohicky"
            :show-d-modal="showDModal"></d-modal>
    </main>
</template>

<script>
// Mixins
import dohickyAPI from '@/components/mixins/dohickyAPI'

// Components
import DModal from '@/components/DModal'

export default {
    name : 'Dohickies',
    data : function () {
        return {
            showDModal : false
        }
    },
    components : {DModal},
    created : function () {
        this.getDohickies()
    },
    methods : {
        handleDClick : function (e) {
            const dId = e.currentTarget.getAttribute('id')
            this.getDohicky(dId)
            this.showDModal = true
        },
        turnOffDModal : function () {
            this.dohicky = null
            this.doBMsg = null
            if (this.showDModal) this.showDModal = !this.showDModal
        }
    },
    mixins : [dohickyAPI]
}
</script>
