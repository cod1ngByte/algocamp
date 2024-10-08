export default function ListItems({ items, handleClick }) {
    return (
        <>
            {items.map((item, idx) => {
                return (
                    <li key={`${item}-${idx + 1}`}>
                        {item}{" "}
                        <button
                            onClick={handleClick}
                            value={`${item}-${idx + 1}`}
                        >
                            delete
                        </button>
                    </li>
                );
            })}
        </>
    );
}
