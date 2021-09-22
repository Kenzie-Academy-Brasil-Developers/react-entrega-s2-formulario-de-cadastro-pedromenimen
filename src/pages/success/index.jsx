import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"

const Success = ({name}) => {
    return (
        <div>
            Bem-vindo, {name}.
        </div>
    )
}

export default Success