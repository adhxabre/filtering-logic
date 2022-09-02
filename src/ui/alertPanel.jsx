import { useEditor } from "build-ui"

const AlertPanel = ({
    id,
}) => {
    const editor = useEditor({
        id: id
    })

    return <div>
        <input
            name = 'alertText'
            value = {editor.props.alertText}
            onChange = {editor.handleUpdate}
        />
    </div>
}

export default AlertPanel