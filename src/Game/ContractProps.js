const ContractProps = {
  CONTRACT_ABI: [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "games",
      "outputs": [
        {
          "name": "gameId",
          "type": "uint256"
        },
        {
          "name": "name",
          "type": "bytes32"
        },
        {
          "name": "ownerAddr",
          "type": "address"
        },
        {
          "name": "state",
          "type": "uint8"
        },
        {
          "name": "moveCounter",
          "type": "uint256"
        },
        {
          "name": "playerOAddr",
          "type": "address"
        },
        {
          "name": "playerXAddr",
          "type": "address"
        },
        {
          "name": "winnerAddr",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBetIds",
      "outputs": [
        {
          "name": "betIds",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "bets",
      "outputs": [
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "gameId",
          "type": "uint256"
        },
        {
          "name": "betId",
          "type": "uint256"
        },
        {
          "name": "state",
          "type": "uint8"
        },
        {
          "name": "bettorOnOAddr",
          "type": "address"
        },
        {
          "name": "bettorOnXAddr",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "betId",
          "type": "uint256"
        }
      ],
      "name": "joinBet",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "gameId",
          "type": "uint256"
        }
      ],
      "name": "leaveGame",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "gameId",
          "type": "uint256"
        }
      ],
      "name": "getBoard",
      "outputs": [
        {
          "name": "boardRep",
          "type": "uint8[9]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "gameId",
          "type": "uint256"
        },
        {
          "name": "bettingOnX",
          "type": "bool"
        }
      ],
      "name": "createBet",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "gameName",
          "type": "bytes32"
        },
        {
          "name": "playerName",
          "type": "bytes32"
        }
      ],
      "name": "createGame",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "gameId",
          "type": "uint256"
        },
        {
          "name": "x",
          "type": "uint256"
        },
        {
          "name": "y",
          "type": "uint256"
        }
      ],
      "name": "playMove",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getGameIds",
      "outputs": [
        {
          "name": "gameIds",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "betId",
          "type": "uint256"
        }
      ],
      "name": "withdrawBet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBets",
      "outputs": [
        {
          "name": "betIds",
          "type": "uint256[]"
        },
        {
          "name": "gameIds",
          "type": "uint256[]"
        },
        {
          "name": "betStates",
          "type": "uint8[]"
        },
        {
          "name": "values",
          "type": "uint256[]"
        },
        {
          "name": "bettorOnX",
          "type": "bytes32[]"
        },
        {
          "name": "bettorOnO",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "gameId",
          "type": "uint256"
        },
        {
          "name": "playerName",
          "type": "bytes32"
        }
      ],
      "name": "joinGame",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getGames",
      "outputs": [
        {
          "name": "gameIds",
          "type": "uint256[]"
        },
        {
          "name": "gameStates",
          "type": "uint8[]"
        },
        {
          "name": "gameNames",
          "type": "bytes32[]"
        },
        {
          "name": "owners",
          "type": "address[]"
        },
        {
          "name": "ownerNames",
          "type": "bytes32[]"
        },
        {
          "name": "playerXs",
          "type": "address[]"
        },
        {
          "name": "playerOs",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "players",
      "outputs": [
        {
          "name": "name",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "gameId",
          "type": "uint256"
        }
      ],
      "name": "startGame",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "wasSuccess",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "message",
          "type": "string"
        }
      ],
      "name": "GameCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "wasSuccess",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "playerName",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "Joined",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "wasSuccess",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "playerName",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "Left",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "wasSuccess",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "message",
          "type": "string"
        }
      ],
      "name": "GameStarted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "success",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "x",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "y",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "MoveMade",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "wasSuccess",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "betId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "message",
          "type": "string"
        }
      ],
      "name": "BetCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "wasSuccess",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "betId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "JoinedBet",
      "type": "event"
    }
  ],

  CONTRACT_ADDRESS: '0xadB164ca4A38d607e7Ae89eFeB9458F73400f5BD'
  // CONTRACT_ADDRESS: '0x5ad4a8ae67476ff3fc40bc351faabfd6a1e88718'
};

export default ContractProps;