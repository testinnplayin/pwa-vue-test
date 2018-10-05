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
    </main>
</template>

<script>
import dohickyAPI from '@/components/mixins/dohickyAPI'

export default {
    name : 'Dohickies',
    created : function () {
        this.getDohickies()
    },
    methods : {
        handleDClick : function (e) {

        }
    },
    mixins : [dohickyAPI]
}
</script>
