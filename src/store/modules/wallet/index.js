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
          {
        "chain": "ETH",
        "addresses": [
          {
            "address": "0xDc06627E53E2EF7c857E1976a48f28Fb1833cCc3",
            "balances": [
              {
                "id": "ethereum",
                "balance": "0.0058124364",
                "price": "3237.36"
              },
              {
                "id": "0x4470bb87d77b963a013db939be332f927f2b992e",
                "balance": "0.1039",
                "price": null
              },
              {
                "id": "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
                "balance": "0.1",
                "price": null
              },
              {
                "id": "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
                "balance": "0.10003221137203",
                "price": "0.087447"
              },
              {
                "id": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
                "balance": "6.8246287589959",
                "price": null
              },
              {
                "id": "0x65292eeadf1426cd2df1c4793a3d7519f253913b",
                "balance": "20",
                "price": null
              },
              {
                "id": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
                "balance": "9.573015E-12",
                "price": "0.832871"
              },
              {
                "id": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
                "balance": "139.11153059487",
                "price": "1.64"
              },
              {
                "id": "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
                "balance": "0.0045619689596313",
                "price": null
              },
              {
                "id": "0x3ec03cd2763a729339aff9927be679c76325d1bf",
                "balance": "200",
                "price": null
              },
              {
                "id": "0x0b76544f6c413a555f309bf76260d1e02377c02a",
                "balance": "2.568752",
                "price": null
              },
              {
                "id": "0x27695e09149adc738a978e9a678f99e4c39e9eb9",
                "balance": "93.08678894",
                "price": null
              },
              {
                "id": "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
                "balance": "0.39786654603532",
                "price": null
              },
              {
                "id": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
                "balance": "3.687E-15",
                "price": "1.85"
              },
              {
                "id": "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae",
                "balance": "0.16354829756527",
                "price": "0.0204827"
              },
              {
                "id": "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
                "balance": "13.040741",
                "price": null
              },
              {
                "id": "0x39bb259f66e1c59d5abef88375979b4d20d98022",
                "balance": "0.00072395",
                "price": null
              },
              {
                "id": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
                "balance": "3.606617237957",
                "price": null
              },
              {
                "id": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
                "balance": "79.75269165",
                "price": "2.01"
              },
              {
                "id": "0x2f85e502a988af76f7ee6d83b7db8d6c0a823bf9",
                "balance": "9",
                "price": "0.0008633"
              },
              {
                "id": "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc",
                "balance": "0.0154",
                "price": "0.135963"
              },
              {
                "id": "0xf3e014fe81267870624132ef3a646b8e83853a96",
                "balance": "7.77",
                "price": null
              },
              {
                "id": "0x32eab29aa859e40365873c8a7562710e2250f640",
                "balance": "1",
                "price": null
              },
              {
                "id": "0x34e71fda469b91e7ef57738cb06cb7c120621f25",
                "balance": "10",
                "price": null
              },
              {
                "id": "0x1eae15d9f4fa16f5278d02d2f8bda8b0dcd31f71",
                "balance": "2000",
                "price": null
              },
              {
                "id": "0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6",
                "balance": "13.022785042818",
                "price": "0.0384448"
              },
              {
                "id": "0xfd79c2aa42ab4bfbd7c03c1e6866491172917b32",
                "balance": "1",
                "price": null
              },
              {
                "id": "0xdb74865ff14d7045ee1723ffda9e4b33c0dd0968",
                "balance": "0.13",
                "price": null
              },
              {
                "id": "0x780116d91e5592e58a3b3c76a351571b39abcec6",
                "balance": "1.3128984734095",
                "price": "0.0016109"
              },
              {
                "id": "0x056dd20b01799e9c1952c7c9a5ff4409a6110085",
                "balance": "1",
                "price": null
              },
              {
                "id": "0x5f5d0767fb8ba2c2793bf7957993a63b5e67d92b",
                "balance": "1",
                "price": null
              },
              {
                "id": "0x1985365e9f78359a9b6ad760e32412f4a445e862",
                "balance": "0.43887578",
                "price": null
              },
              {
                "id": "0xdf5d68d54433661b1e5e90a547237ffb0adf6ec2",
                "balance": "1.0E-18",
                "price": null
              },
              {
                "id": "0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532",
                "balance": "80",
                "price": "0.00356343"
              },
              {
                "id": "0x987f58ac56ad1a224b7031736ee2b025f78f65c4",
                "balance": "70",
                "price": null
              },
              {
                "id": "0x4c6112f9652463f5bdcb954ff6b650acb64e47cc",
                "balance": "1",
                "price": null
              },
              {
                "id": "0xc1b779f738e625bb2900928b995837dd7caee0a3",
                "balance": "1",
                "price": null
              },
              {
                "id": "0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43",
                "balance": "1.999",
                "price": "0.0328252"
              },
              {
                "id": "0x4f76e85d067e219779a863ff18577846b3152f1f",
                "balance": "99.95",
                "price": "3.3E-7"
              },
              {
                "id": "0x77fe30b2cf39245267c0a5084b66a560f1cf9e1f",
                "balance": "16888",
                "price": null
              },
              {
                "id": "0x174bfa6600bf90c885c7c01c7031389ed1461ab9",
                "balance": "5",
                "price": "0.00653628"
              },
              {
                "id": "0xa2dca1505b07e39f96ce41e875b447f46d50c6fc",
                "balance": "1",
                "price": null
              },
              {
                "id": "0x1f0f468ee03a6d99cd8a09dd071494a83dc1c0e5",
                "balance": "25",
                "price": "0.00497471"
              },
              {
                "id": "0xd76c75b9cbbeab4109456fda9f2da73297b795db",
                "balance": "67.508145271869",
                "price": null
              },
              {
                "id": "0xd9db58c0cd8b93906ec87e353d6b1dbe19f3bfed",
                "balance": "67.5081452718",
                "price": null
              },
              {
                "id": "0x3a9fff453d50d4ac52a6890647b823379ba36b9e",
                "balance": "70.535327385485",
                "price": "0.103179"
              },
              {
                "id": "0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e",
                "balance": "888891.08",
                "price": null
              },
              {
                "id": "0x14409b0fc5c7f87b5dad20754fe22d29a3de8217",
                "balance": "10000",
                "price": "6.094E-5"
              },
              {
                "id": "0xba36676acd9709ac84a2864f05c0a3f820aa223e",
                "balance": "10",
                "price": null
              },
              {
                "id": "0xcb8d1260f9c92a3a545d409466280ffdd7af7042",
                "balance": "1.3128984734095",
                "price": "0.210739"
              },
              {
                "id": "0x87c00817abe35ed4c093e59043fae488238d2f74",
                "balance": "1",
                "price": "0.00185466"
              }
            ]
          }
        ]
      }
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