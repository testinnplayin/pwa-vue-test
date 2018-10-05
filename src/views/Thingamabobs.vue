<template>
  <div class="thingamabobs">
    <h1>This is a page about thingamabobs</h1>
  </div>
</template>

<script>
import thingamabobAPI from '@/components/mixins/thingamabobAPI'

export default {
  name : 'Thingamabobs',
  created : function () {
    this.getThingamabobs()
  },
  mixins : [thingamabobAPI],
}
</script>
