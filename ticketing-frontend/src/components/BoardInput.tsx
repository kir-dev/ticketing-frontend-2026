interface BoardInputProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    onAdd: () => void;
}

export default function BoardInput(props: BoardInputProps) {
    const { inputValue, setInputValue, onAdd } = props;
    return(
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border-black border-2"
            />
            <button onClick={onAdd}>
                Add
            </button>
        </div>
    )
}