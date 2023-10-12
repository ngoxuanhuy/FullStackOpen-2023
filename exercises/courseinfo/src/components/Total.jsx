const Total = ({parts}) => {
    const sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
    
    return <div><strong>Total of {sum} exercises </strong></div>
}

export default Total