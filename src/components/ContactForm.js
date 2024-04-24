import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can add further logic to send this data to a backend server or any other actions
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        background: "linear-gradient(90deg, #af2676 0%, #441b45 100%), #ffffff",
      }}
    >
      <form className="mt-4 flex flex-col items-center" onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom className="text-white">
          Contact Form
        </Typography>
        <TextField
          className="w-full my-1"
          // label="Full Name"
          placeholder="Enter your full name..."
          InputLabelProps={{ className: "text-white" }}
          InputProps={{
            classes: {
              root: "text-white  border-solid border-[0.5px]",
              notchedOutline: "text-white",
            },
          }}
          variant="outlined"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <TextField
          className="w-full my-1"
          label="Email"
          InputLabelProps={{ className: "text-white" }}
          InputProps={{
            classes: { root: "text-white", notchedOutline: "text-white" },
          }}
          variant="outlined"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          className="w-full my-1"
          label="Subject"
          InputLabelProps={{ className: "text-white" }}
          InputProps={{
            classes: { root: "text-white", notchedOutline: "text-white" },
          }}
          variant="outlined"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <TextField
          className="w-full my-1"
          label="Message"
          InputLabelProps={{ className: "text-white" }}
          InputProps={{
            classes: { root: "text-white", notchedOutline: "text-white" },
          }}
          variant="outlined"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          className="my-2 w-full"
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
