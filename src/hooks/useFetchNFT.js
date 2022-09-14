import { useEffect, useState } from "react";
import CONFIG from "./../abi/config.json";

const useFetchNFT = (account, fetchNFTs, setFetchNFTs) => {
  const [nft, setNFT] = useState(null);
  const fetchWalletNFTs = async (account) => {
    try {
      console.log(
        CONFIG.NFT_CONTRACT,
        process.env.REACT_APP_ALCHEMY_ENDPOINT,
        account
      );
      if (account) {
        const endpoint = process.env.REACT_APP_ALCHEMY_ENDPOINT;
        const nfts = await fetch(
          `${endpoint}/getNFTs/?owner=${account}&contractAddresses[]=${CONFIG.NFT_CONTRACT}`,
          {
            method: "GET",
            redirect: "follow",
          }
        );
        const response = await nfts.json();
        console.log(response);
        setNFT(response);
        setFetchNFTs(false);
      }
    } catch (e) {
      console.log(e);
      setFetchNFTs(false);
    }
  };

  useEffect(() => {
    if (fetchNFTs) {
      fetchWalletNFTs(account);
    }
  }, [account, fetchNFTs]);

  return nft;
};

export default useFetchNFT;
