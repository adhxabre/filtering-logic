import React from "react"

const Alert = ({
    message,
    text,
    ...rest
}) => {
    const handleAlert = () => {
        alert(message)
    }

    return <button
        onClick={handleAlert}
        {...rest}
    >
        {text}
    </button>
}

export default Alert