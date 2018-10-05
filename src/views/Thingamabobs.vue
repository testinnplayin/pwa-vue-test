<template>
  <main class="thingamabobs main-c container">
    <h1>Thingamabob List:</h1>
    <b-row>
      <b-col sm="12">

        <b-list-group v-if="thingamabobs && thingamabobs.length > 0"
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
        </section>

      </b-col>
    </b-row>
    <t-modal @turnOffModal="turnOffModal"
      :show-modal="showModal"
      :thingamabob="thingamabob"></t-modal>
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
      selT : null,
      showModal : false
    }
  },
  components : {TModal},
  created : function () {
    this.getThingamabobs()
  },
  methods : {
    handleTClick : function (e) {
      const tId = e.currentTarget.getAttribute('id')
      this.selT = tId
      this.getThinggy(tId)
      this.showModal = true
    },
    turnOffModal : function () {
      if (this.showModal) this.showModal = !this.showModal
    }
  },
  mixins : [thingamabobAPI]
}
</script>

<style>

</style>
