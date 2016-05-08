package businessLogic.services;

import java.io.ByteArrayOutputStream;
import java.util.Properties;
import javax.activation.DataHandler;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;

/**
 * Created by Gerardth on 29/04/2016.
 */
public class MailService {

    public boolean sendEmail(ByteArrayOutputStream file, String destinatario, String subject, String cuerpoMensaje) {

        Properties props = new Properties();

        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getDefaultInstance(props, null);

        try {

            BodyPart text = new MimeBodyPart();
            text.setText(cuerpoMensaje);

            BodyPart adjunto = new MimeBodyPart();
            adjunto.setDataHandler(new DataHandler(new ByteArrayDataSource(file.toByteArray(), "application/vnd.ms-excel")));
            adjunto.setFileName("archivo1.xls");

            MimeMultipart multiParte = new MimeMultipart();
            multiParte.addBodyPart(text);
            multiParte.addBodyPart(adjunto);

            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("nueveinvitado@gmail.com")); // Se rellena el From

            message.addRecipient(Message.RecipientType.TO, new InternetAddress(destinatario));// Se rellena el destinatario
            message.setSubject(subject); // Se rellena el subject
            message.setContent(multiParte); // Se mete el texto y el archivo adjunto.

            Transport t = session.getTransport("smtp");
            t.connect("nueveinvitado@gmail.com", "nueve12345");
            t.sendMessage(message, message.getAllRecipients());
            t.close();

            return true;

        } catch (MessagingException e) {
            return false;
        }
    }
}