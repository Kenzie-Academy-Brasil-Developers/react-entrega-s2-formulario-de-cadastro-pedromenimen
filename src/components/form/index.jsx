import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormButton from "../button";
import { useHistory } from "react-router";


export default function Form({name, setName}) {
  const history = useHistory()
  const formSchema = yup.object().shape({
    name: yup.string().required().matches("^[A-Za-z\\s]+$", "Campo inválido"),
    email: yup
      .string()
      .matches(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
        "Campo inválido"
      )
      .required(),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
        "Campo inválido"
      )
      .required("Campo obrigatório"),
    passwordConf: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const dataAdd = () => {
    history.push(`/success/${name}`)
  }
  return (
    <Box
    margin="15vh auto"
    border="solid black 3px"
    width="300px"
    borderRadius="10px"
    backgroundColor="whitesmoke"
    padding="15px 0"
    boxShadow="14px 14px 5px"
      onSubmit={handleSubmit(dataAdd)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        {...register("name")}
        label="Nome"
        variant="outlined"
        error={!!errors.name}
        onChange={evt => setName(evt.target.value)}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="E-mail"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("password")}
        type="password"
        label="Senha"
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password?.message}
        />
      <TextField
        {...register("passwordConf")}
        type="password"
        label="Confirmar Senha"
        variant="outlined"
        error={!!errors.passwordConf}
        helperText={errors.passwordConf?.message}
        />
      <FormButton />
    </Box>
  );
}
