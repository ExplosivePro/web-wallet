import apollo from '@/vue-apollo'

import GET_ASSETS from './gql/getAssetsBulk.gql'
import GET_OVERVIEW from './gql/getOverview.gql'

const state = () => ({
	assets: [
        {
          "id": "00000000000001b8",
          "project": {
            "uuid": "00000000-0000-0000-0000-000000000000"
          },
          "creator": {
            "address": "0x1dfdc775d87857b23280a34db11799400496a977"
          },
          "supplyModel": "INFINITE",
          "meltValue": 4,
          "meltFeeRatio": 0.1,
          "meltFeeMaxRatio": 0.1,
          "transferable": "PERMANENT",
          "fungible": true,
          "transferFee": {
            "type": "PER_ITEM",
            "asset": null,
            "value": "1",
            "maxValue": "1"
          },
          "metadata": {
            "name": "Stormy Knights Cover",
            "description": "A shield of legends..\nProtects only the most valiant of warriors, englightenment is a must. If one posseses this shield, bow down...\n\nFun Fact:\nThis is probably one of the FIRST custom collectables minted by contract directly, by someone other than ENJIN or their MULTIVERSE game devs!",
            "image": "https://cdn.enjinx.io/metadata/raw/1c638f11049314974473e0f96493de3d66146162/f3e338ca66c7f3dc9e88f494e15ae2e8ccdbd434.png",
            "miniature": null,
            "properties": {
              "Rarity": "Legendary",
              "edition set": "1st Edition",
              "creator": "@BITWIZE"
            }
          },
          "uri": "http://flurbo.xyz/bitwize.json",
          "burned": 0,
          "flags": [],
          "views": 26,
          "createdAt": "2018-12-30T08:49:00+00:00",
          "holders": {
            "data": [
              {
                "address": {
                  "address": "0x0b645e61155eac5ed83e16c92fec641bb8369674"
                }
              },
              {
                "address": {
                  "address": "0x0ead60ff04305a68f2b08999b4261a26bceeb2b5"
                }
              },
              {
                "address": {
                  "address": "0x4f085fc80c7339b6225a37f005e5578171b15842"
                }
              },
              {
                "address": {
                  "address": "0xa61d530962fb398599e368fbae228f7545e1b626"
                }
              },
              {
                "address": {
                  "address": "0xb66c25d27fc323b12986861a443c0ab3554ebd34"
                }
              },
              {
                "address": {
                  "address": "0xcc189760f356afdd8aa9296d38e641671495a045"
                }
              },
              {
                "address": {
                  "address": "0xd0b39bb599eec9ce00912bb5ea5a2ec6339e29cc"
                }
              },
              {
                "address": {
                  "address": "0xde339cf3af9181d073cf371b4c298d1a8ee783e4"
                }
              },
              {
                "address": {
                  "address": "0xfa40770383571ee9b73ed7e1b6b1bff437645a6d"
                }
              },
              {
                "address": {
                  "address": "0x8f63eb1e3ba746b121af935f31aa074e9407777e"
                }
              }
            ]
          }
        },
        {
          "id": "00000000000001fe",
          "project": {
            "uuid": "4806e51c-a17d-4781-9dc3-f1092058ce9c"
          },
          "creator": {
            "address": "0x862e4dc54eceaada8a2574e0d5d5d730f692466f"
          },
          "supplyModel": "COLLAPSING",
          "meltValue": 10,
          "meltFeeRatio": 10,
          "meltFeeMaxRatio": 10,
          "transferable": "TEMPORARY",
          "fungible": true,
          "transferFee": {
            "type": "PER_TRANSFER",
            "asset": null,
            "value": "1",
            "maxValue": "1"
          },
          "metadata": {
            "name": "WoC Early Access Badge (Limited Edition)",
            "description": "This badge is exclusive to the first 500 early adopters of War of Cryptoâ€™s â€˜Early Access Saleâ€™. We believe WoC will be a catalyst for mass adoption of Enjinâ€™s blockchain technology. By showing the world what can be achieved by offering our supporters true value, ownership, and freedom over their assets, together, with the help of our community, we think we can change gaming forever. This token is to prove that you were not only here to witness the rise of blockchain gaming, you were here to help build the foundations. Thank you for your support. It means the world to us.",
            "image": "https://cdn.enjinx.io/metadata/raw/f99197b2623b16c72cb7bdf55cc229b0bd3ffde5/6b7827fea67987f08455f91d0bc276f8893761ef.png",
            "miniature": null,
            "properties": null
          },
          "uri": "https://api1.warofcrypta.com/metadataUri?token={id}",
          "burned": 0,
          "flags": [],
          "views": 189,
          "createdAt": "2019-01-19T17:22:33+00:00",
          "holders": {
            "data": [
              {
                "address": {
                  "address": "0x03532c79aff33aeb27c38cfd337de915b061dcda"
                }
              },
              {
                "address": {
                  "address": "0x0c07522b0c21fcd9856f6c9fcd40cfbdc1bc777d"
                }
              },
              {
                "address": {
                  "address": "0xaaf0eb7d49cddbb8d6d516689b9427cf69239c9f"
                }
              },
              {
                "address": {
                  "address": "0xae82e2d9e20fb34e1462fcacf3a71e4a896cd6e9"
                }
              },
              {
                "address": {
                  "address": "0xe2589eb3d2f79971d160f11eb6b1f3532161fb68"
                }
              },
              {
                "address": {
                  "address": "0xfa9a93d83d5b0ba6d8002edd20f3be4416d9bc1c"
                }
              }
            ]
          }
        }
	],
  overview: [
    {
      "chain": "BTC",
      "addresses": [
        {
          "address": "3828uLnVCCUwWdBEw8u3pARXoFUVZu7eH7",
          "balances": [
            {
              "id": "bitcoin",
              "balance": "0",
              "price": null
            }
          ]
        }
      ]
    },
  ]
})

// actions
const actions = {
	getAssets ({ commit }, variables = {dictionary: []}) {
		return apollo.clients.enjinx.query({
			query: GET_ASSETS,
			variables: variables
		}).then(({ data }) => {
			commit('setAssets', data)
		})
	},
  getOverview ({ commit }, variables = {
    "addresses": [
        {
            "name": "BTC", 
            "addresses": ["3828uLnVCCUwWdBEw8u3pARXoFUVZu7eH7"]
        }
      ]
    }) {
    return apollo.clients.overview.query({
      query: GET_OVERVIEW,
      variables: variables
    }).then(({ data }) => {
      commit('setOverview', data)
    })
  }

}

// mutations
const mutations = {
	setAssets (data) {
		state.assets = data
	},
  setOverview (data) {
    state.overview = data
  }
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}