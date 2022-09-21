const IPFS = require("ipfs-http-client");
const INFURAID = "2EqQOA86xc81K15Se5gOhzocB2g";
const APIKEY = "7a85cb8e830e64fc78fea46ea40d05fb";
const auth = "Basic " + Buffer.from(INFURAID + ":" + APIKEY).toString("base64");
const ipfs = IPFS({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
  headers: { authorization: auth },
});

//const ipfs = IPFS({ host: "ipfs.infura.io", port: "8081", protocol: "http" });
export default ipfs;
