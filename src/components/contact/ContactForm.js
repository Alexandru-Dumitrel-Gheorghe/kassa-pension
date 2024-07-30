import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material"; // importam componentele necesare din material-ui pentru a construi interfata
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // importam iconite din react-icons pentru a afisa informatii de contact si retele sociale
import emailjs from "emailjs-com"; // importam libraria emailjs pentru trimiterea de emailuri
import "./ContactForm.css"; // importam stilurile personalizate pentru componenta

const ContactForm = () => {
  // initializam starea pentru datele formularului
  const [formData, setFormData] = useState({
    name: "", // numele complet al utilizatorului
    email: "", // adresa de email
    subject: "", // subiectul mesajului
    message: "", // continutul mesajului
  });

  // functie pentru a actualiza starea formularului la fiecare modificare a unui camp
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // functie pentru a gestiona trimiterea formularului
  const handleSubmit = (e) => {
    e.preventDefault(); // prevenim reincarcarea paginii

    // folosim emailjs pentru a trimite emailul
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text); // afisam un mesaj de succes in consola
          alert("Email trimis cu succes!"); // notificam utilizatorul ca emailul a fost trimis
        },
        (err) => {
          console.log("FAILED...", err); // afisam un mesaj de eroare in consola in caz de esec
          alert("Trimiterea emailului a esuat."); // notificam utilizatorul ca trimiterea emailului a esuat
        }
      );

    // resetam formularul dupa trimitere
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="md">
      {" "}
      {/* containerul principal pentru pagina */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="custom-title"
      >
        Contacteaza-ne {/* titlul paginii */}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {" "}
          {/* sectiunea formularului */}
          <Paper elevation={3} className="form-container">
            <Box p={3}>
              <form onSubmit={handleSubmit}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className="custom-subtitle"
                >
                  Trimite-ne un mesaj {/* subtitlul sectiunii */}
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
                  label="Adresa de email"
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
                    Trimite Mesajul {/* butonul de trimitere a mesajului */}
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
          {/* sectiunea informatiilor de contact */}
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
                Informatii Suplimentare {/* subtitlul sectiunii */}
              </Typography>
              <Box className="custom-info-item" mb={2}>
                <FaPhone />
                <Typography>+40 123 456 789</Typography>{" "}
                {/* numar de telefon */}
              </Box>
              <Box className="custom-info-item" mb={2}>
                <FaEnvelope />
                <Typography>contact@exemplu.com</Typography>{" "}
                {/* adresa de email */}
              </Box>
              <Box className="custom-info-item" mb={2}>
                <FaMapMarkerAlt />
                <Typography>
                  Strada Exemplu, Nr. 1, Bucuresti, Romania
                </Typography>{" "}
                {/* adresa fizica */}
              </Box>
              <Typography variant="h6" gutterBottom className="custom-subtitle">
                Urmareste-ne {/* subtitlul sectiunii pentru retele sociale */}
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
                <FaLinkedin className="social-icon" />{" "}
                {/* iconite pentru retele sociale */}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
