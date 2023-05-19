interface INewTodoFormProps {
  title: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const NewTodoForm: React.FC<INewTodoFormProps> = ({
  title,
  updateText,
  handleAction,
}) => {
  return (
    <label>
      <input
        placeholder="new todo"
        type="text"
        value={title}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add Todo</button>
    </label>
  );
};

export default NewTodoForm;
