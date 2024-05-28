const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

// Configuração do transporte do NodeMailer
const transporter = nodemailer.createTransport({
  service: 'seu provedor de email',
  auth: {
    user: 'seu email',
    pass: 'sua senha'
  }
});

// Endpoint para receber dados e enviar email
app.post('/enviar-email', (req, res) => {
  const { emailDestinatario, phoneNumber, message } = req.body;

  // Gerar link do WhatsApp com base nos dados recebidos
  const linkWhatsApp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Configuração do e-mail
  const mailOptions = {
    from: 'conecti.gp10@gmail.com',
    to: emailDestinatario,
    subject: 'Inicie a conversa no WhatsApp',
    html: `<p>Clique no link abaixo para iniciar a conversa no WhatsApp:</p><a href="${linkWhatsApp}">Iniciar Conversa</a>`
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).send('Erro ao enviar o e-mail');
    } else {
      console.log('E-mail enviado:', info.response);
      res.status(200).send('E-mail enviado com sucesso');
    }
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
