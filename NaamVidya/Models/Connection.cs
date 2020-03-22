using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace NaamVidya.Models
{
    public class Connection
    {
        public static string GetWebapiConnection()
        {
            string _webapiConnection = string.Empty;
            try
            {
                DataSet ds = new DataSet();

                ds.ReadXml(AppDomain.CurrentDomain.BaseDirectory + "\\Connection");

                _webapiConnection = ds.Tables["Webapi"].Rows[0]["url"].ToString();
            }
            catch (Exception e)
            {
            }
            return _webapiConnection;
        }

        public static PayUMoneyURLModel GetPayUMoneyUrls()
        {
            PayUMoneyURLModel obj = new PayUMoneyURLModel();
            try
            {
                DataSet ds = new DataSet();

                ds.ReadXml(AppDomain.CurrentDomain.BaseDirectory + "\\Connection");

                obj.furl = ds.Tables["PayUMoney"].Rows[0]["furl"].ToString();
                obj.surl = ds.Tables["PayUMoney"].Rows[0]["surl"].ToString();
            }
            catch (Exception e)
            {
            }
            return obj;
        }

    }
}