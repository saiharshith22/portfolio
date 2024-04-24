import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  InputLabel,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message and border when the user starts typing in the field
    if (!value) {
      setFormErrors({
        ...formErrors,
        [name]: true,
      });
    } else {
      setFormErrors({
        ...formErrors,
        [name]: false,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for any unfilled required fields
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        errors[key] = true;
      }
    });
    setFormErrors(errors);

    // If there are no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      // Handle form submission here
      console.log(formData);
      // You can add further logic to send this data to a backend server or any other actions
    }
  };

  const textFieldClassesStyles = (borderOpacity) => ({
    root: `text-white border-solid border border-white border-opacity-${borderOpacity} p-0`,
    notchedOutline: "text-white",
    focused: "Mui-focused border-opacity-0",
    input: "p-[10px]",
  });

  return (
    <Container
      maxWidth="sm"
      className="py-4 shadow-[#dd3b9ae0] shadow-sm rounded-md"
      sx={{
        background: "linear-gradient(90deg, #af2676 0%, #441b45 100%), #ffffff",
      }}
    >
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <Typography
          variant="h5"
          gutterBottom
          className="text-white ibmSansSemiBold"
        >
          Ready to connect? Drop me a line below and let's take it further..
        </Typography>
        <div className="w-full my-2">
          <InputLabel required htmlFor="fullName" className="text-white">
            Full Name
          </InputLabel>
          <TextField
            fullWidth
            placeholder="Enter your full name..."
            id="fullName"
            InputProps={{
              classes: textFieldClassesStyles(formErrors.fullName ? 0 : 50),
            }}
            variant="outlined"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={formErrors.fullName}
            helperText={
              formErrors.fullName ? (
                <span className="text-white ibmSansSemiBold">
                  * Please enter your full name
                </span>
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="w-full my-2">
          <InputLabel required htmlFor="email" className="text-white">
            Email
          </InputLabel>
          <TextField
            fullWidth
            placeholder="Enter your email..."
            id="email"
            InputProps={{
              classes: textFieldClassesStyles(formErrors.email ? 0 : 50),
            }}
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
            helperText={
              formErrors.email ? (
                <span className="text-white ibmSansSemiBold">
                  * Please enter your email
                </span>
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="w-full my-2">
          <InputLabel required htmlFor="subject" className="text-white">
            Subject
          </InputLabel>
          <TextField
            fullWidth
            multiline
            placeholder="Enter subject..."
            id="subject"
            InputProps={{
              classes: textFieldClassesStyles(formErrors.subject ? 0 : 50),
            }}
            variant="outlined"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            error={formErrors.subject}
            helperText={
              formErrors.subject ? (
                <span className="text-white ibmSansSemiBold">
                  * Please enter a subject
                </span>
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="w-full my-2">
          <InputLabel required htmlFor="message" className="text-white">
            Message
          </InputLabel>
          <TextField
            fullWidth
            placeholder="Enter your message..."
            id="message"
            InputProps={{
              classes: textFieldClassesStyles(formErrors.message ? 0 : 50),
            }}
            variant="outlined"
            name="message"
            multiline
            minRows={3}
            maxRows={5}
            value={formData.message}
            onChange={handleChange}
            error={formErrors.message}
            helperText={
              formErrors.message ? (
                <span className="text-white ibmSansSemiBold">
                  * Please enter a message
                </span>
              ) : (
                ""
              )
            }
          />
        </div>
        <Button
          className="my-2 w-full bg-pfDark hover:bg-pfBg hover:opacity-[0.8]"
          variant="contained"
          type="submit"
        >
          SEND MESSAGE
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
