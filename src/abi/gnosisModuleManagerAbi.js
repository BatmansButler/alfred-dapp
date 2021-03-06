const gnosisModuleManagerAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract Module",
				"name": "module",
				"type": "address"
			}
		],
		"name": "DisabledModule",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "contract Module",
				"name": "module",
				"type": "address"
			}
		],
		"name": "EnabledModule",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "module",
				"type": "address"
			}
		],
		"name": "ExecutionFromModuleFailure",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "module",
				"type": "address"
			}
		],
		"name": "ExecutionFromModuleSuccess",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "contract Module",
				"name": "prevModule",
				"type": "address"
			},
			{
				"internalType": "contract Module",
				"name": "module",
				"type": "address"
			}
		],
		"name": "disableModule",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "contract Module",
				"name": "module",
				"type": "address"
			}
		],
		"name": "enableModule",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			},
			{
				"internalType": "enum Enum.Operation",
				"name": "operation",
				"type": "uint8"
			}
		],
		"name": "execTransactionFromModule",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			},
			{
				"internalType": "enum Enum.Operation",
				"name": "operation",
				"type": "uint8"
			}
		],
		"name": "execTransactionFromModuleReturnData",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			},
			{
				"internalType": "bytes",
				"name": "returnData",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getModules",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
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
				"internalType": "address",
				"name": "start",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "pageSize",
				"type": "uint256"
			}
		],
		"name": "getModulesPaginated",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "array",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "next",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

module.exports = gnosisModuleManagerAbi;
