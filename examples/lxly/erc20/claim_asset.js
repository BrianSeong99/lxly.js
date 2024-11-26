const { getLxLyClient, tokens, configuration, from } = require('../../utils_lxly');

const execute = async () => {
    const bridgeTransactionHash = "0x6f312627ea607a39f494f49e8b40e9a71c61ad3173a6876f09dd9de7b540c040";
    const client = await getLxLyClient();

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
