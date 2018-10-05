'use strict'

import {apiAddress} from '../../utils'

export default {
    data : function () {
        return {
            bAddress : `${apiAddress}/thingamabobs`,
            tBackMsg : null,
            thingamabob : null,
            thingamabobs : null
        }
    },
    methods : {
        getThingamabobs : function () {
            const endpnt = this.bAddress,
                reqOpts = { method : 'GET', mode : 'cors' },
                getReq = new Request(endpnt, reqOpts)

            fetch(getReq)
                .then(response => {
                    if (!response.ok) throw new Error(response.statusText)

                    return response
                })
                .then(res => res.json())
                .then(data => {
                    this.thingamabobs = data.thingamabobs
                    this.tBackMsg = 'Successful retrieval of thingamabobs'
                })
                .catch(err => this.tBackMsg = `Error retrieving thingamabobs: ${err}`)
        },
        getThinggy : function (tId) {
            const endpnt = `${this.bAddress}/${tId}`,
                reqOpts = { method : 'GET', mode : 'cors' },
                getReq = new Request(endpnt, reqOpts)
            
            fetch(getReq)
                .then(response => {
                    if (!response.ok) throw new Error(response.statusText)
                    return response
                })
                .then(res => res.json()
                .then(data => {
                    console.log('data ', data)
                    this.thingamabob = data.thingamabob
                    this.tBackMsg = `Successful retrieval of thingamabob ${tId}`
                }))
                .catch(err => this.tBackMsg = `Error retrieving thingamabob ${tId}: ${err}`)
        }
    }
}