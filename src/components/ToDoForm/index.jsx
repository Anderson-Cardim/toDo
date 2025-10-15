import "./todo-form.style.css";
import { TextInput } from "../Textinput";
import { Button } from "../Button";

export function ToDoForm({ onSubmit, defaultValue }) {
  return (
    <form className="form" action={onSubmit}>
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      />
      <Button>Salvar item</Button>
    </form>
  );
}
