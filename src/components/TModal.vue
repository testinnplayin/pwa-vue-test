<template>
    <b-modal v-model="toggleModal"
        v-if="toggleModal"
        id="thingamabob-modal"
        title="Thingamabob">
        <div v-if="thingamabob">
            {{thingamabob.awesome_field}}
        </div>
        <div v-else>No data...</div>
    </b-modal>

</template>


<script>
export default {
    name : 'TModal',
    data : function () {
        return {
            toggleModal : false
        }
    },
    props : ['showModal', 'thingamabob'],
    watch : {
        'showModal': function () {
            if (this.showModal) this.toggleModal = this.showModal
        },
        'toggleModal': function () {
            if (!this.toggleModal) this.$emit('turnOffModal')
        }
    }
}
</script>
