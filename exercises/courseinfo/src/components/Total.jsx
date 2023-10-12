const Total = ({parts}) => {
    const sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
    
    return <div> Total of {sum} exercises </div>
}

export default Total