import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Success = ({ name }) => {
  const history = useHistory();
  const params = useParams();
  return (
    <div>
      <h1>Bem-vindo, {params.name}.</h1>
      <Button variant="contained" onClick={() => history.push("/")}>
        Voltar
      </Button>
    </div>
  );
};

export default Success;
