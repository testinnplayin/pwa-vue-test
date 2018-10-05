<template>
    <main class="dohickies main-c container">
        <h1>Dohicky List: </h1>
        <b-row>
            <b-col sm="12">

                <!-- <b-list-group v-if="thingamabobs && thingamabobs.length > 0"
                class="t-list list-el">
                <b-list-group-item v-for="(thingamabob, ind) of thingamabobs"
                    @click="handleTClick"
                    :id="thingamabob._id"
                    :key="ind"
                    button
                    class="t-list-item">{{thingamabob.awesome_field}}</b-list-group-item>
                </b-list-group>

                <section v-else>
                <h2>Loading...</h2>
                </section> -->

            </b-col>
        </b-row>
    </main>
</template>

<script>
export default {
    name : 'Dohickies'
}
</script>
