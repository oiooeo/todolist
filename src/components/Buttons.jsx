const DeleteButton = ({ item, clickDeleteButtonHandler, children }) => {
  return (
    <button
      onClick={() => clickDeleteButtonHandler(item.id)}
      className="deleteBtn"
    >
      {children}
    </button>
  );
};

export default DeleteButton;
