import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email().typeError().required(),
  password: yup
    .string()
    .required()
    .min(8, "Password is too be 8 chars minimum"),
  rePassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
  checked: yup.boolean().required(),
});

export const fieldScema = (feildName, matchValue) => {
  switch (feildName) {
    case "email":
      return yup.string().email().typeError().required();
    case "password":
      return yup
        .string()
        .required()
        .min(8, "Password is too be 8 chars minimum");
    case "rePassword":
      return yup
        .string()
        .typeError()
        .required()
        .oneOf([matchValue], "password must match");
    case "checked":
      return yup.boolean().required();
    default:
      throw new Error("invalid feildName");
  }
};
