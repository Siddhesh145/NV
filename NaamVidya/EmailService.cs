using NVAPI;
using RestSharp;
using RestSharp.Authenticators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Http;


namespace NaamVidya
{
    public static class NVEmailService
    {

        public static bool SendMail(string toId,string toName, string subject,string body)
        {
            bool b = false;
            string host = "email-smtp.us-east-1.amazonaws.com";
            string username = "AKIAII2GZ65YZC6QP3XQ";
            string pwd = "Av+Cvgm+/+5gRs+F+ya8BMJ5s8UxaiElN1Lss88NpOF5";
            string fromid = "alerts@naamvidya.in";
            int port = 587;
            try
            {
                SmtpClient client = new SmtpClient();
                client.Host = host;
                client.Port = port;
                client.Credentials = new System.Net.NetworkCredential(username, pwd);

                MailMessage mailmsg = new MailMessage();

                mailmsg.From = new MailAddress(fromid, "NaamVidya Notification");
                mailmsg.To.Add(new MailAddress(toId, toName));

                mailmsg.Subject = subject;
                mailmsg.Body = body;
                mailmsg.IsBodyHtml = true;
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.Send(mailmsg);
			    //object obj = new object();
               //client.SendAsync(mailmsg, obj);
                b = true;
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
                b = false;
            }
            return b;
        }


        public static bool SendMail(string toId, string toName, string bccEmailId, string subject, string body)
        {
            bool b = false;
            string host = "email-smtp.us-east-1.amazonaws.com";
            string username = "AKIAII2GZ65YZC6QP3XQ";
            string pwd = "Av+Cvgm+/+5gRs+F+ya8BMJ5s8UxaiElN1Lss88NpOF5";
            string fromid = "alerts@naamvidya.in";
            //string bccEmailId ="anil.nandalike@naamvidya.in"
            int port = 587;
            try
            {
                SmtpClient client = new SmtpClient();
                client.Host = host;
                client.Port = port;
                client.Credentials = new System.Net.NetworkCredential(username, pwd);

                MailMessage mailmsg = new MailMessage();

                mailmsg.From = new MailAddress(fromid, "NaamVidya Notification");
                mailmsg.To.Add(new MailAddress(toId, toName));

                mailmsg.Bcc.Add(new MailAddress(bccEmailId));// adding BCC email id

                mailmsg.Subject = subject;
                mailmsg.Body = body;
                mailmsg.IsBodyHtml = true;
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.Send(mailmsg);
                //object obj = new object();
                //client.SendAsync(mailmsg, obj);
                b = true;
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
                b = false;
            }
            return b;
        }
        //public static void SendMail(){
        //    API sendinBlue = new mailinblue.API("ncXKYax1F7DLr9Wd", 5000);    //Optional parameter: Timeout in MS
            
        //    Dictionary<string, Object> data = new Dictionary<string, Object>();
        //    Dictionary<string, string> to = new Dictionary<string, string>();
        //    to.Add("jaikishan.pillai@comflextech.com", "to whom!");
        //    List<string> from_name = new List<string>();
        //    from_name.Add("from@email.com");
        //    from_name.Add("from email!");
        //    //List<string> attachment = new List<string>();
        //    //attachment.Add("https://domain.com/path-to-file/filename1.pdf");
        //    //attachment.Add("https://domain.com/path-to-file/filename2.jpg");

        //    data.Add("to", to);
        //    data.Add("from", from_name);
        //    data.Add("subject", "My subject");
        //    data.Add("html", "This is the <h1>HTML</h1>");
        //    //data.Add("attachment", attachment);

        //    Object sendEmail = sendinBlue.send_email(data);
        //    Console.WriteLine(sendEmail);

        //}

    }
}