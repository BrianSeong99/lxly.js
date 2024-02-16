const { getLxLyClient } = require('../../utils_lxly');

const execute = async () => {
    const bridgeTransactionHash = "0xd2cd7b4faf3b07da4fc3057598961cdf070061d4cf6dd6ff262c95424a0b9796";

    const client = await getLxLyClient();

    const isBridged = await client.isBridged(bridgeTransactionHash, 0, 1);
    console.log("isBridged", isBridged);
}
execute().then(() => {
}).catch(err => {
    console.error("err", err);
}).finally(_ => {
    process.exit(0);
});
