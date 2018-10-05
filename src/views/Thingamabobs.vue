<template>
  <main class="thingamabobs container">
    <h1>Thingamabob List:</h1>
    <b-row>
      <b-col sm="12">

        <b-list-group v-if="thingamabobs && thingamabobs.length > 0"
          class="t-list">
          <b-list-group-item v-for="(thingamabob, ind) of thingamabobs"
            @click="handleTClick"
            :id="thingamabob._id"
            :key="ind"
            button
            class="t-list-item">{{thingamabob.awesome_field}}</b-list-group-item>
        </b-list-group>

        <section v-else>
          <h2>Loading...</h2>
        </section>

      </b-col>
    </b-row>
    <t-modal></t-modal>
  </main>
</template>

<script>
// Mixins
import thingamabobAPI from '@/components/mixins/thingamabobAPI'

// Components
import TModal from '@/components/TModal'

export default {
  name : 'Thingamabobs',
  data : function () {
    return {
      showModal : false
    }
  },
  components : {TModal},
  created : function () {
    this.getThingamabobs()
  },
  methods : {
    handleTClick : function (e) {
      console.log('handleTClick ', e.currentTarget)
      this.getThinggy(e.currentTarget.getAttribute('id'));
      this.showModal = true
    }
  },
  mixins : [thingamabobAPI],
}
</script>

<style>
.thingamabobs {
  margin-top: 15px;
  width: 100%;
}
.t-list {
  margin-top: 20px;
}
</style>
