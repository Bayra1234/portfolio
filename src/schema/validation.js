import * as yup from "yup";

export const validationSchemaForm = yup.object({
  name: yup
    .string()
    .min(3, "Name must be atleast 3 characters")
    .matches(/^[^\s].+[^\s]$/, "Enter valid name")
    .matches(/^[a-zA-Z\s]*$/, "Enter valid name")
    .required("Name is required")
    .max(50),
  email: yup
    .string("")
    .email("Enter valid email")
    .required("Email is required"),

  organ: yup
    .string()
    .min(3, "Organisation must be atleast 3 characters")
    .matches(/^[^\s].+[^\s]$/, "Enter valid Organisation")
    .matches(/^[a-zA-Z\s]*$/, "Enter valid Organisation")
    .required("Organisation is required")
    .max(100, "Organisation exceeds the limit 100 characters"),
  describe: yup
    .string()
    .min(10, "Message must be atleast 10 characters")
    .matches(/^[^\s].+[^\s]$/, "Enter valid Message")
    .matches(/^[a-zA-Z\s]*$/, "Enter valid Message")
    .required("Message is required")
    .max(500, "Message exceeds the limit 500 characters"),
});
