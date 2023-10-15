const Notification = ({ message, infoType }) => {
    if (message === null) {
        return null
    }

    return <div className={infoType}>{message}</div>

}

export default Notification