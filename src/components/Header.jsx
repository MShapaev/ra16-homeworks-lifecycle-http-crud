const Header = ({ title, other }) => {
  const reloadedCards = async () => {
    const response = await fetch("http://localhost:7070/notes");
    if (response.ok) {
      const data = await response.json();
      other(data);
    }
  };

  return (
    <>
      <div className="header">
        <h1 className="header_title">{title}</h1>
        <button onClick={reloadedCards}>Кнопка обновления</button>
      </div>
    </>
  );
};

export default Header;
