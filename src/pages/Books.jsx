import { useState } from "react";
import Header from "../components/Headers";
import useBooksContext from "../contexts/BookContext";

export default Books = () => {
  const { booksData, setBooksData } = useBooksContext();
  const [selectedFilter, setSelectedFilter] = useState("all");
  console.log(booksData);
  const filteredbookData =
    selectedFilter === "all"
      ? booksData
      : booksData.filter((bI) => bI.status === selectedFilter);

  const changeBooksStatus = (bookTitle) => {
    const updatedBooksData = booksData.map((bI) => {
      if (bI.title === bookTitle) {
        return { ...bI, status: bI.status === "Read" ? "UnRead" : "Read" };
      }
      return bI;
    });
    setBooksData(updatedBooksData);
  };

  const deleteTheBook = (bookTitle) => {
    const updatedBooksData = booksData.filter((bI) => bI.title !== bookTitle);
    setBooksData(updatedBooksData);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <h1>List Of Books</h1>
        <label for="bookStatus">Filter By Book Status:</label> <br />
        <select
          id="bookStatus"
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value={"all"}>All Books</option>
          <option value={"Read"}>Read</option>
          <option value={"UnRead"}>UnRead</option>
        </select>
        <div className="mt-3">
          {filteredbookData.length > 0 ? (
            filteredbookData.map((bI, index) => (
              <div className="row col-md-6" key={index}>
                <div className="card mb-3">
                  <div className="card-body">
                    <p>
                      <strong>Name: </strong>
                      {bI.title}
                    </p>
                    <p>
                      <strong>Author: </strong>
                      {bI.author}
                    </p>
                    <p>
                      <strong>Status: </strong>
                      {bI.status}
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => changeBooksStatus(bI.title)}
                    >
                      Change Status
                    </button>
                    <button
                      className="btn btn-warning ms-3"
                      onClick={() => deleteTheBook(bI.title)}
                    >
                      Delete The Book
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Books in the To Display</p>
          )}
        </div>
      </div>
    </div>
  );
};
