import React from "react"
import { DnDBuilder, useEditor } from "build-ui"
import Alert from "./alert"

const AlertView = ({
    id,
    ...props
}) => {
    const editor = useEditor({
        id: id
    })

    return <DnDBuilder
        onDragStart = {editor.handleDragStart}
        onDragEnd = {editor.handleDragEnd}
        draggable
    >
        <Alert {...props} />
    </DnDBuilder>
}

export default AlertView