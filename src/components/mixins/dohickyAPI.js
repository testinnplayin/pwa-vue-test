'use strict'

import {apiAddress} from '../../utils'

export default {
    data : function () {
        return {
            dAddress : `${apiAddress}/dohickies`,
            dohickies : null,
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
        }
    }
}