const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body

  // Configura el transporter para el servicio de correo electrónico
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "arcilacamila08@gmail.com", // Cambia esto con tu correo electrónico
    },
  })

  // Configura el correo electrónico
  const mailOptions = {
    from: email,
    to: "arcilacamila08@gmail.com", // Cambia esto con tu correo electrónico
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  }

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res.status(500).send("Error al enviar el correo electrónico")
    } else {
      console.log("Correo electrónico enviado: " + info.response)
      res.status(200).send("¡El correo electrónico se envió correctamente!")
    }
  })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
