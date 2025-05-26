import { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext();
const useBooksContext = () => useContext(BooksContext);
export default useBooksContext;

export function BooksProvider({ children }) {
  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      status: "Read",
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      status: "Read",
    },
    {
      title: "A Man Called Ove",
      author: "Fredrik Backman",
      status: "Read",
    },
    {
      title: "The Shadow of the Wind",
      author: "Carlos Ruiz Zafón",
      status: "Read",
    },
  ];

  const getDataFromLocal = () => {
    try {
      const booksDataLocal = localStorage.getItem("bookItem");
      const parsed = JSON.parse(booksDataLocal);
      return Array.isArray(parsed) ? parsed : books;
    } catch (error) {
      return books;
    }
  };
  const [booksData, setBooksData] = useState(getDataFromLocal);
  useEffect(() => {
    localStorage.setItem("bookItem", JSON.stringify(booksData));
  }, [booksData]);
  return (
    <BooksContext.Provider value={{ booksData, setBooksData }}>
      {children}
    </BooksContext.Provider>
  );
}
