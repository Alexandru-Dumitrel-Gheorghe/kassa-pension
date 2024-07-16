import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email trimis cu succes!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Trimiterea emailului a eșuat.");
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="custom-title"
      >
        Contactează-ne
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="form-container">
            <Box p={3}>
              <form onSubmit={handleSubmit}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className="custom-subtitle"
                >
                  Trimite-ne un mesaj
                </Typography>
                <TextField
                  fullWidth
                  label="Nume complet"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Adresă de email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Subiect"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Mesaj"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                  required
                />
                <Box textAlign="center" mt={2}>
                  <Button
                    variant="contained"
                    type="submit"
                    className="custom-button"
                  >
                    Trimite Mesajul
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="info-container">
            <Box
              p={3}
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
            >
              <Typography variant="h6" gutterBottom className="custom-subtitle">
                Informații Suplimentare
              </Typography>
              <Box className="custom-info-item" mb={2}>
                <FaPhone />
                <Typography>+40 123 456 789</Typography>
              </Box>
              <Box className="custom-info-item" mb={2}>
                <FaEnvelope />
                <Typography>contact@exemplu.com</Typography>
              </Box>
              <Box className="custom-info-item" mb={2}>
                <FaMapMarkerAlt />
                <Typography>
                  Strada Exemplu, Nr. 1, București, România
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom className="custom-subtitle">
                Urmărește-ne
              </Typography>
              <Box
                className="social-icons"
                display="flex"
                justifyContent="center"
                mt={2}
              >
                <FaFacebook className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaLinkedin className="social-icon" />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
