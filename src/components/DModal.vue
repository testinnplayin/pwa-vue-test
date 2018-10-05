<template>
    <b-modal v-model="toggleDModal"
        hide-footer
        :title="(dohicky && !dohicky.is_ok)? 'Dohicky\'s parent thingamabob has been deleted' : null">
        <div v-if="dohicky">
            {{(dohicky.thingamabob_id) ? dohicky.thingamabob_id.awesome_field : dohicky.thingamabob_bp.awesome_field}}
        </div>
        <div v-else>Loading...</div>
    </b-modal>
</template>

<script>
export default {
    name : 'DModal',
    data : function () {
        return {
            toggleDModal : false
        }
    },
    props : ['dohicky', 'showDModal'],
    watch : {
        'showDModal' : function () {
            if (this.showDModal) this.toggleDModal = this.showDModal
        },
        'toggleDModal' : function () {
            if (!this.toggleDModal) this.$emit('turnOffDModal')
        }
    }
}
</script>
