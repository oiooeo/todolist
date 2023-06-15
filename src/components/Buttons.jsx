export const DeleteButton = ({ item, clickDeleteButtonHandler, children }) => {
  return (
    <button
      onClick={() => clickDeleteButtonHandler(item.id)}
      className="deleteBtn"
    >
      {children}
    </button>
  );
};

export const UpdateButton = ({ item, clickUpdateButtonHandler, children }) => {
  return (
    <button
      onClick={() => clickUpdateButtonHandler(item.id)}
      className="updateBtn"
    >
      {children}
    </button>
  );
};
