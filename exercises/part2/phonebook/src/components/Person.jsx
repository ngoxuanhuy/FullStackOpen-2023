const Person = ({ name, number, handleContact }) => {
    return (
        <div>
            {name} {number}
            <button onClick={handleContact}> delete</button>
        </div>
    )
}

export default Person