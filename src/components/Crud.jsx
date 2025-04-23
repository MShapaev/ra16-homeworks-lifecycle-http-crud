import Cards from "./Cards";
import Header from "./Header.jsx";
import { useState, useEffect } from "react";

const Crud = () => {
  const [value, setValue] = useState();
  const [notes, setNotes] = useState([]);

  const addCard = (e) => {
    e.preventDefault();
    if (value) {
      fetch("http://localhost:7070/notes", {
        method: "POST",
        body: JSON.stringify({
          content: value,
        }),
      });
      newCard();
    }
    setValue("");
  };

  const newCard = async () => {
    const response = await fetch("http://localhost:7070/notes");
    if (response.ok && value) {
      const data = await response.json();
      setNotes(data);
    }
  };



  useEffect(() => {
    fetch(`http://localhost:7070/notes`)
    .then(response => response.json())
    .then(data => setNotes(prevNotes => prevNotes = data))
}, [])

  return (
    <>
      <Header title={"Notes"} other={setNotes} />
      <Cards notes={notes} other={setNotes} />
      <form>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addCard}>Кнопка добавления</button>
      </form>
    </>
  );
};

export default Crud;
