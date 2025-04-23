const Cards = ({ notes, other }) => {
  
  const removeCard = async (id) => {
    await fetch(`http://localhost:7070/notes/${id}`, {
      method: "DELETE",
    });
    update();
  };

  const update = async () => {
    const response = await fetch("http://localhost:7070/notes");
    if (response.ok) {
      const data = await response.json();

      other(data);
    }
  };

  return (
    <>
      <div className="cards">
        {notes.map((note) => {
          return (
            <div className="cards_item" key={note.id}>
              {note.content}
              <button onClick={() => removeCard(note.id)}>
                Кнопка удаления
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
