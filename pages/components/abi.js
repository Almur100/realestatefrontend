const realestateabi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "assetid",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "subscriber",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "fassetid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "rent",
        "type": "uint256"
      }
    ],
    "name": "Subscribe",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "assetid",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "assetowner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "nft",
        "type": "address"
      }
    ],
    "name": "addasset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "assetid",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "assetowner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "nft",
        "type": "address"
      }
    ],
    "name": "addfasset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "assetid",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "seller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "fassetid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "nft",
        "type": "address"
      }
    ],
    "name": "buyasset",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "BSdetails",
    "outputs": [
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "location",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "contact",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "BuyAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "FractionAssetdetails",
    "outputs": [
      {
        "internalType": "contract IERC721",
        "name": "nft",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetPrice",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "size",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "rentPrice",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Fractionassetowner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Tokenizeasset",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721",
        "name": "_nft",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_assetlocation",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_assetcontact",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "fassetprice",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "fassetsize",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "fassetrentcost",
        "type": "uint256"
      }
    ],
    "name": "addAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_location",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_contact",
        "type": "bytes"
      }
    ],
    "name": "addbuyerseller",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "addbuyfasset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "rentprice",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "size",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "addfractionasset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "assetDetails",
    "outputs": [
      {
        "internalType": "contract IERC721",
        "name": "nft",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "location",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "contact",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "assetid",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "duration",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "exist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "getSellonof",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "getfractionassetdetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "contract IERC721",
            "name": "nft",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "assetPrice",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "size",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "rentPrice",
            "type": "uint256"
          }
        ],
        "internalType": "struct tokenizeRealestate.FractionAsset",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "getfractionassetowner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "getsubscription",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "subscriber",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "end",
            "type": "uint256"
          }
        ],
        "internalType": "struct tokenizeRealestate.subscription",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      }
    ],
    "name": "gettokenizeasset",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "selloff",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "sellon",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Assetid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fractionassetid",
        "type": "uint256"
      }
    ],
    "name": "subscribe",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "subscriptions",
    "outputs": [
      {
        "internalType": "address",
        "name": "subscriber",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "end",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

   
   
  export default realestateabi;