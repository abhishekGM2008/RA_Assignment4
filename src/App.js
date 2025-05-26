import Header from "./components/Headers";
import useBooksContext from "./contexts/BookContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function App() {
  const { booksData } = useBooksContext();
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="pt-3">Total No Of Books: {booksData.length}</h1>
        <Link to={"/books"} className="btn btn-success">
          View Books
        </Link>
      </div>
    </div>
  );
}
