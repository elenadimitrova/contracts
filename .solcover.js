module.exports = {
  skipFiles: [
    'Migrations.sol',
    'child/BaseERC20.sol',
    'child/bor/StateReceiver.sol',
    'child/bor/StateSyncerVerifier.sol',
    'child/ChildChain.sol',
    'child/ChildERC20.sol',
    'child/ChildERC721.sol',
    'child/ChildERC721Mintable.sol',
    'child/ChildToken.sol',
    'child/MaticChildERC20.sol',
  ],
  testCommand: '../node_modules/.bin/truffle test --network coverage',
  testrpcOptions: "--port 8555 -i 15002 --mnemonic 'clock radar mass judge dismiss just intact mind resemble fringe diary casino' --noVMErrorsOnRPCResponse --allowUnlimitedContractSize"
};
