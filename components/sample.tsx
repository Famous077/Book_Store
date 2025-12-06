import { useState, useEffect } from "react";
import { ethers } from "ethers";
import BookReportABI from "@/contract/bookReportABI.json";

const CONTRACT_ADDRESS = "0xD6bB77091337ADF3F148d28f27542Cd3080Fa725";

export default function useContract() {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // ------------------------------
  // Connect Wallet
  // ------------------------------
  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWalletAddress(accounts[0]);
  };

  // ------------------------------
  // Load Contract
  // ------------------------------
  useEffect(() => {
    if (!walletAddress || !window.ethereum) return;

    const provider = new ethers.BrowserProvider(window.ethereum);
    provider.getSigner().then((signer) => {
      const bookContract = new ethers.Contract(CONTRACT_ADDRESS, BookReportABI, signer);
      setContract(bookContract);
    });
  }, [walletAddress]);

  // -------------------------------------------------------------------
  // Contract Functions
  // -------------------------------------------------------------------

  const publishBook = async (bookId: number, title: string, description: string, price: number) => {
    if (!contract) return;
    const tx = await contract.publishBook(bookId, title, description, price);
    return await tx.wait();
  };

  const buyBook = async (bookId: number, amount: number) => {
    if (!contract) return;
    const value = ethers.parseEther(amount.toString());
    const tx = await contract.buyBook(bookId, { value });
    return await tx.wait();
  };

  // 🔥 FIXED — Now accepts rating also!
  const addReview = async (bookId: number, review: string, rating: number) => {
    if (!contract) return;
    const tx = await contract.addReview(bookId, review, rating);
    return await tx.wait();
  };

  const getBook = async (bookId: number) => {
    if (!contract) return null;
    return await contract.getBook(bookId);
  };

  const getBookReviews = async (bookId: number) => {
    if (!contract) return [];
    return await contract.getBookReviews(bookId);
  };

  const getMyBooks = async () => {
    if (!contract) return [];
    return await contract.getMyBooks();
  };

  return {
    walletAddress,
    connectWallet,
    publishBook,
    buyBook,
    addReview,
    getBook,
    getBookReviews,
    getMyBooks,
  };
}
