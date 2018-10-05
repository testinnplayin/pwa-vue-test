'use strict'

import {apiAddress} from '../../utils'

export default {
    data : function () {
        return {
            dAddress : `${apiAddress}/dohickies`,
            dohickies : null,
            dohicky : null,
            doBMsg : null
        }
    },
    methods : {
        getDohickies : function () {
            const reqOptions = { method : 'GET', mode : 'cors' },
                getReq = new Request(this.dAddress, reqOptions)

            fetch(getReq)
                .then(response => {
                    if (!response.ok) throw new Error(response.statusText)

                    return response
                })
                .then(res => res.json())
                .then(data => {
                    this.dohickies = data.dohickies
                    this.doBMsg = `Successful retrieval of dohickies`
                })
                .catch(err => {
                    console.error(`Error fetching dohickies: ${err}`)
                    this.doBMsg = `Could not fetch dohickies: ${err}`
                })
        },
        getDohicky : function (dId) {
            const endpnt = `${this.dAddress}/${dId}`,
                reqOptions = { method : 'GET', mode : 'cors' },
                getReq = new Request(endpnt, reqOptions)
            fetch(getReq)
                .then(response => {
                    if (!response.ok) throw new Error(response.statusText)
                    return response
                })
                .then(res => res.json())
                .then(data => {
                    this.dohicky = data.dohicky
                    this.doBMsg = `Successful retrieval of dohicky ${dId}`
                })
                .catch(err => {
                    console.error(`Error fetching dohicky of id ${dId}: ${err}`)
                    this.doBMsg = `Could not fetch dohicky of id ${dId}: ${err}`
                })
        }
    }
}