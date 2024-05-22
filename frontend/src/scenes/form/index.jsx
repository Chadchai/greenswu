import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="กรอกข้อมูลรายเดือน" subtitle="โปรดกรอกให้ครบถ้วน" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="การใช้น้ำมันสำหรับงานอาคาร - Diesel (Generator) "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="Diesel (Generator) "
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="การใช้น้ำมันสำหรับงานอาคาร - Diesel (Fire pump) "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="การใช้น้ำมันสำหรับงานอาคาร - Diesel (Fire pump) "
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="การใช้น้ำมันสำหรับการเดินทาง (รถตู้  รถมอเตอร์ไซค์) - น้ำมัน Diesel "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="การใช้น้ำมันสำหรับการเดินทาง (รถตู้  รถมอเตอร์ไซค์) -น้ำมัน Diesel "
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="การใช้น้ำมันสำหรับการเดินทาง (รถตู้  รถมอเตอร์ไซค์) -น้ำมัน Gasohol 91, E20, E85"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="การใช้น้ำมันสำหรับการเดินทาง (รถตู้  รถมอเตอร์ไซค์) -น้ำมัน Gasohol 91, E20, E85"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="การใช้น้ำมันสำหรับการเดินทาง (รถตู้  รถมอเตอร์ไซค์) -น้ำมัน Gasohol 95"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="การใช้น้ำมันสำหรับการเดินทาง (รถตู้  รถมอเตอร์ไซค์) -น้ำมัน Gasohol 95"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="การใช้สารดับเพลิง (CO2)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="การใช้สารดับเพลิง (CO2)"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
                  <TextField
                fullWidth
                variant="filled"
                type="text"
                label="การใช้สารดับเพลิง (CO2)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="การใช้สารดับเพลิง (CO2)"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button type="submit" color="secondary" variant="contained" size="large">
                ส่งข้อมูล
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
