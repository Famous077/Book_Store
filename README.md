# 📚 Web3 Book DApp

A decentralized application (DApp) that allows users to **publish, buy, and review books** on the blockchain. Built using **Ethereum smart contracts**, **TypeScript**, and **React**.  

---

## 🚀 Features

- **Publish Books:** Add new books with title, author, ISBN, description, and cover image.  
- **Buy Books:** Purchase books securely with cryptocurrency.  
- **Add Reviews:** Submit reviews with ratings for purchased books.  
- **View Book Details:** Check book information, average rating, and total reviews.  
- **View Reviews:** Fetch all reviews for a specific book.  
- **Wallet Integration:** Connect Ethereum wallet (MetaMask) for transactions.  

---

## 🏗 Technology Stack

- **Frontend:** React, TypeScript, Tailwind CSS (optional styling)  
- **Smart Contract:** Solidity  
- **Blockchain:** Ethereum-compatible (Flare Coston2 network)  
- **Web3 Library:** Ethers.js  

---

## 📄 Contract Details

**Contract Address:**  
`0xD6bB77091337ADF3F148d28f27542Cd3080Fa725`

**Core Functions:**

| Function | Description |
|----------|-------------|
| `publishBook(title, author, isbn, description, coverURI)` | Publish a new book on the blockchain. |
| `buyBook(bookId)` | Purchase a book by its ID. |
| `addReview(bookId, rating, content)` | Add a review and rating for a book. |
| `getBook(bookId)` | Fetch book details including title, author, ISBN, average rating, total reviews, and owner. |
| `getBookReviews(bookId)` | Retrieve all reviews for a specific book. |
| `getMyBooks(userAddress)` | Get all book IDs owned by a user. |
| `nextBookId()` | Returns the next book ID. |
| `nextReviewId()` | Returns the next review ID. |

**Events:**

- `BookPublished(bookId, title, publisher)`  
- `BookPurchased(bookId, buyer)`  
- `ReviewAdded(reviewId, bookId, reviewer, rating)`  

---

## ⚡ Quick Start

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd web3-book-dapp
