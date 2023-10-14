const PersonForm = ({handleSubmit, inputName, inputPhoneNumber, handleNameChange, handlePhoneChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div> Name: <input value={inputName} onChange={handleNameChange} /></div>
            <div> Number: <input value={inputPhoneNumber} onChange={handlePhoneChange} /></div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm