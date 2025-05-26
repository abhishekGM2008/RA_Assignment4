import { useState } from "react";
import Header from "../components/Headers";
import useBooksContext from "../contexts/BookContext";

export default AddNewBooks = () => {
  const { booksData, setBooksData } = useBooksContext();
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookStatus, setBookStatus] = useState("");
  const [showAddBookSuccess, setSuccessMsg] = useState(false);

  const addNew = (e) => {
    e.preventDefault();
    if (bookTitle !== "" && bookAuthor !== "" && bookStatus !== "") {
      const newBookData = {
        title: bookTitle,
        author: bookAuthor,
        status: bookStatus,
      };
      setBooksData((bookData) => [...bookData, newBookData]);
      setSuccessMsg(true);
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
        <form onSubmit={addNew}>
          <label for="bookTitle">Book Title:</label>
          <input
            id="bookTitle"
            type={"text"}
            required
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <br />
          <br />
          <label for="bookAuthor">Author:</label>
          <input
            id="bookAuthor"
            type={"text"}
            required
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
          <br />
          <br />
          <label for="bookStatus">Status:</label>
          <select
            id="bookStatus"
            required
            onChange={(e) => setBookStatus(e.target.value)}
          >
            <option value={""}>Select</option>
            <option value={"Read"}>Read</option>
            <option value={"Unread"}>UnRead</option>
          </select>
          <br />
          <br />
          <button className="btn btn-success" type="submit">
            Add New Book
          </button>
        </form>
        {showAddBookSuccess && <p>New Book Added Successfully</p>}
      </div>
    </div>
  );
};
