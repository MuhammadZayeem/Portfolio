import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === "";
    const isEmailEmpty = email.trim() === "";
    const isMessageEmpty = message.trim() === "";

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (isNameEmpty || isEmailEmpty || isMessageEmpty) {
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      const response = await emailjs.send(
        "service_qyg1i0r",
        "template_qkz6ntw",
        templateParams,
        "TCMk6-XlxZkxYRBwV"
      );

      console.log("SUCCESS!", response.status, response.text);

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const textFieldStyle = {
    "& .MuiInputBase-input": {
      color: "#000",
      fontSize: "16px",
    },
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>

          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                fullWidth
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={textFieldStyle}
              />

              <TextField
                fullWidth
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                error={emailError}
                helperText={
                  emailError
                    ? "Please enter your email or phone number"
                    : ""
                }
                sx={textFieldStyle}
              />
            </div>

            <TextField
              fullWidth
              required
              multiline
              rows={10}
              className="body-form"
              label="Message"
              placeholder="Send me any inquiries or questions"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
              error={messageError}
              helperText={
                messageError ? "Please enter your message" : ""
              }
              sx={textFieldStyle}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;