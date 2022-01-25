import smtplib
import ssl


class User:
    def __init__(self, name, email, password, from_email, from_password):
        self.name = name
        self.email = email
        self.password = password
        self.from_email = from_email
        self.from_password = from_password

    def reset_password(self):
        """ Só com isso a função não irá funcionar! O email em
        questão não existe e costuma ser necessário configurar
        permissões no servidor de email para o envio ocorrer. Se
        quiser, explore isso como exercício bônus! (Por segurança,
        crie uma nova conta de e-mail para testar).
        Por hora, basta entender a lógica aqui! """

        subject = "Reset your password"
        message = "Instruções para resetar a senha, com o link de resetar"
        body = f"Subject:{subject}\n\n{message}".encode('utf-8')
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User("Valentino Trocatapa",
                "valentino@tinytoons.com",
                "Grana",
                "password_reset@teste.com",
                "myverysafepassword")
meu_user.reset_password()