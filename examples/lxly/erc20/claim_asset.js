const { getLxLyClient, tokens, configuration, from } = require('../../utils_lxly');

const execute = async () => {
    const bridgeTransactionHash = "0xe80c84456d6e77dec4fb07e21242e714c42fabf382b6c538258cf2c7dc312f60";
    const client = await getLxLyClient('testnet');

    const token = client.erc20(tokens[0].ether, 0);
    const sourceNetworkId = 1;

    const result = await token.claimAsset(bridgeTransactionHash, sourceNetworkId, {returnTransaction: false});
    console.log("result", result);
    const txHash = await result.getTransactionHash();
    console.log("txHash", txHash);
    const receipt = await result.getReceipt();
    console.log("receipt", receipt);

}

execute().then(() => {
}).catch(err => {
    console.error("err", err);
}).finally(_ => {
    process.exit(0);
});
