using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text;
using System.Security.Cryptography;
using CaptchaImage;
using System.Text.RegularExpressions;
using NaamVidya.Models;
using Newtonsoft.Json;
using System.Web.Security;
using System.Threading.Tasks;
using NVAPI;
using System.Net;
using System.Net.NetworkInformation;
using System.Globalization;
using PayPal.Api;
using NaamVidya.Paypal.Utilities;
using NaamVidya.Paypal;
using paytm;
using System.Net.Http;
namespace NaamVidya.Controllers
{
    public class RoutesController : Controller
    {
        public static string GetUserIP()
        {
            string ipList = System.Web.HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (!string.IsNullOrEmpty(ipList))
            {
                return ipList.Split(',')[0];
            }
            return System.Web.HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
        }
        // GET: Routes
        public ActionResult Header()
        {
            //EmailService1.SendMail();
            return View();
        }
        public ActionResult Footer()
        {
            return View();
        }
        public ActionResult Home()
        {
            return View();
        }
        public ActionResult name()
        {
            return View();
        }
        public ActionResult registration()
        {
            return View();
        }
        public ActionResult myname(string name)
        {
            return View();
        }
        public ActionResult about()
        {
            ViewBag.Title = "About | Naamvidya";
            ViewBag.Description = "NaamVidya, Naam Vidya, Baby Name, Adult Name, Child Name, Spouse Name, Name Change, Numerology, Nominative Determinism, Hindu Baby Name, Muslim Baby Name, Name and destiny, Name Analysis, astrology, Chaldean, name correction, changing names, name meaning, consciousness, Purpose of life, Karma, why names matter, how to choose a name, personality, nature, purpose of life";
            ViewBag.Keywords = "A name can bring success or struggle in life. Take a free first name and full name analysis to see how it has affected you or your baby. Understand why a naming ceremony was a ritual and why saints took up a new name on their spiritual journeys";
            return View();
        }
        public ActionResult faq()
        {
            return View();
        }
        public ActionResult theImportanceOfName()
        {
            return View();
        }
        public ActionResult Blog()
        {
            return View();
        }
        public ActionResult OrderPlatinumCombo()
        {
            return View();
        }
        public ActionResult NumNumerologyMain()
        {
            return View();
        }
        public ActionResult NumerologyNumber()
        {
            return View();
        }
        public ActionResult Numerology()
        {
            return View();
        }
        public ActionResult Numerologist()
        {
            return View();
        }
        public ActionResult NumNumerology1()
        {
            return View();
        }
        public ActionResult NumNumerology2()
        {
            return View();
        }
        public ActionResult NumNumerology3()
        {
            return View();
        }
        public ActionResult NumNumerology4()
        {
            return View();
        }
        public ActionResult NumNumerology5()
        {
            return View();
        }
        public ActionResult NumNumerology6()
        {
            return View();
        }
        public ActionResult NumNumerology7()
        {
            return View();
        }
        public ActionResult NumNumerology8()
        {
            return View();
        }
        public ActionResult NumNumerology9()
        {
            return View();
        }
        public ActionResult NumNumerology11()
        {
            return View();
        }
        public ActionResult Gift()
        {
            return View();
        }
        public ActionResult childnamecorrection()
        {
            return View();
        }
        public ActionResult howitwork()
        {
            return View();
        }
        public ActionResult pendingOrder()
        {
            return View();
        }
        public ActionResult dashboard()
        {
            return View();
        }
        public ActionResult freeReports()
        {
            return View();
        }
        public ActionResult choosingbabyname()
        {
            return View();
        }
        public ActionResult orderbabyname()
        {
            return View();
        }
        public ActionResult orderbabynamealt()
        {
            return View();
        }
        public ActionResult orderbabynamegift()
        {
            return View();
        }
        public ActionResult namecorrection()
        {
            return View();
        }
        public ActionResult privacypolicy()
        {
            return View();
        }
        public ActionResult spouse()
        {
            return View();
        }
        public ActionResult termsandconditions()
        {
            return View();
        }
        public ActionResult whatisbalancedname()
        {
            return View();
        }
        public ActionResult whynamesmatter()
        {
            return View();
        }
        public ActionResult WhyUseNumerology()
        {
            return View();
        }
        public ActionResult doesNumerologyWork()
        {
            return View();
        }
        public ActionResult chooseRightNameForBaby()
        {
            return View();
        }
        public ActionResult BalancedName()
        {
            return View();
        }
        public ActionResult BusinessName()
        {
            return View();
        }
        public ActionResult Ethics()
        {
            return View();
        }
        public ActionResult LifePath()
        {
            return View();
        }
        public ActionResult NamesMatter()
        {
            return View();
        }
        public ActionResult Newborn()
        {
            return View();
        }
        public ActionResult Others()
        {
            return View();
        }
        public ActionResult login()
        {
            return View();
        }
        public ActionResult newRegistration()
        {
            return View();
        }
        public ActionResult newRegistrationConfirmation()
        {
            return View();
        }
        public ActionResult orderStatusRpt()
        {
            return View();
        }
        public ActionResult orderDetails()
        {
            return View();
        }
        public ActionResult detailedreport()
        {
            return View();
        }
        public ActionResult MyCartDetail()
        {
            return View();
        }
        public ActionResult orderProcess()
        {
            return View();
        }
        public ActionResult orderDetailsAdmin()
        {
            return View();
        }
        public ActionResult changePassword()
        {
            return View();
        }
        public ActionResult orderdetailinfo()
        {
            return View();
        }
        public ActionResult sku()
        {
            return View();
        }
        public ActionResult detailinfopage()
        {
            return View();
        }
        public ActionResult babynameprime()
        {
            return View();
        }
        public ActionResult businessdetailinfopage()
        {
            return View();
        }
        public ActionResult ordernamecorrection()
        {
            return View();
        }

        public ActionResult getMyGiftDetail(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetailModel = new List<NaamvidyaDetailModel>();
                DataTable dt = new DataTable();
                string v_data1 = "";
                string data;
                try
                {

                    if (NaamvidyaModel.REGN_GUID == null)
                    {
                        NaamvidyaModel.REGN_GUID = "";
                    }


                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;


                    cmd.CommandText = "NV_SP_GetMyGiftDetail";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);

                    DataSet ds = db.ReturnDataset(cmd);

                    if (ds.Tables.Count > 0)
                    {
                        v_data1 = Convert.ToString(ds.Tables[0].Rows[0]["data"]);

                    }


                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(v_data1);
            }


        }
        public ActionResult giftlogin()
        {
            return View();
        }
        public ActionResult moreinfopage()
        {
            return View();
        }
        // [HttpPost]
        // public ActionResult registration(freerptparam freerptparam)
        // {
        // DAL db = new DAL();
        // SqlCommand cmd = new SqlCommand();
        // cmd.CommandType = System.Data.CommandType.StoredProcedure;
        // cmd.CommandText = "NV_SP_FREEREPORT";
        // cmd.Parameters.AddWithValue("@FName", freerptparam.firstName);
        // cmd.Parameters.AddWithValue("@MName", freerptparam.middleName);
        // cmd.Parameters.AddWithValue("@LName", freerptparam.lastName);
        // cmd.Parameters.AddWithValue("@DOB", freerptparam.dob);
        // cmd.Parameters.AddWithValue("@Gender", freerptparam.gender);
        // cmd.Parameters.AddWithValue("@REGN_GUID",Convert.ToString( Session["REGN_GUID"]));
        // DataSet ds = db.ReturnDataset(cmd);
        // freerptdata freerpt = new freerptdata();
        // freerpt.fName = Convert.ToString(ds.Tables[0].Rows[0]["FN"]);
        // freerpt.mName = Convert.ToString(ds.Tables[0].Rows[0]["MN"]);
        // freerpt.lName = Convert.ToString(ds.Tables[0].Rows[0]["LN"]);
        // freerpt.dob  = Convert.ToDateTime(ds.Tables[0].Rows[0]["DOB"]);
        // List<rptdataitem> list = new List<rptdataitem>();
        // foreach (DataRow item in ds.Tables[1].Rows)
        // {
        // rptdataitem data = new rptdataitem();
        // data.Section = Convert.ToInt32(item["Section"]);
        // data.SrNo = Convert.ToInt32(item["SrNo"]);
        // data.SeqNo = Convert.ToInt32(item["Seq_No"]);
        // data.ParaDesc = Convert.ToString(item["Para_Desc"]);
        // list.Add(data);
        // }
        // freerpt.listitems = list;
        // return Json(freerpt);
        // }
        [HttpPost]
        public JsonResult authenticatesso(profile profile)
        {
            JsonResult s = new JsonResult();
            try
            {
                logindata data = new logindata();
                data.flag = false;
                s = Json(data);
                //if (profile.Provider != "FB" && profile.Provider != "G")
                //{
                //    string Captcha = profile.Captcha;
                //    string SCaptcha = Session["captchaText"].ToString();
                //    if (Captcha != SCaptcha)
                //    {
                //        data.flag = false;
                //        data.msg = "Invalid Capcha. Please Try Again.";
                //        return Json(data);
                //    }
                //}
                using (DAL db = new DAL())
                {
                    try
                    {
                        SqlCommand cmd = new SqlCommand();
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.CommandText = "NV_SP_AUTHENTICATESSO";
                        cmd.Parameters.AddWithValue("@Provider", profile.Provider);
                        cmd.Parameters.AddWithValue("@ProfileId", profile.ProfileId);
                        cmd.Parameters.AddWithValue("@Name", profile.Name);
                        cmd.Parameters.AddWithValue("@Email", profile.Email);
                        DataTable dt = db.ReturnDataTable(cmd);
                        if (dt != null)
                        {
                            if (dt.Rows.Count > 0)
                            {
                                data.flag = true;
                                data.msg = "";
                                data.EmailId = Convert.ToString(dt.Rows[0]["EmailId"]);
                                data.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                                data.REGN_GUID = Convert.ToString(dt.Rows[0]["REGN_GUID"]);
                                Session["EmailId"] = Convert.ToString(dt.Rows[0]["EmailId"]);
                                Session["FirstName"] = Convert.ToString(dt.Rows[0]["FirstName"]);
                                Session["REGN_GUID"] = Convert.ToString(dt.Rows[0]["REGN_GUID"]);
                            }
                            else
                            {
                                data.flag = false;
                                data.msg = "";
                            }
                        }
                        s = Json(data);
                    }
                    catch (Exception ex)
                    {
                        Nlogger.nLoggerMsg(ex);
                    }
                    finally
                    {
                        db.Dispose();
                    }
                }
            }
            catch (Exception e)
            {
                Nlogger.nLoggerMsg(e);
            }
            return s;
        }
        [HttpPost]
        public JsonResult monthYear()
        {
            using (DAL db = new DAL())
            {
                JsonResult s = new JsonResult();
                try
                {
                    string data = "", month = "", year = "";
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_YearMonth";
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        var month1 = (from a in ds.Tables[0].AsEnumerable()
                                      select new
                                      {
                                          MonthNumber = a["MonthNumber"],
                                          MonthNames = a["MonthNames"]
                                      }).ToList();
                        var year1 = (from a in ds.Tables[1].AsEnumerable()
                                     select new
                                     {
                                         Years = a["Years"],
                                     }).ToList();
                        s = Json(new { month = month1, year = year1 });
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return s;
            }
            //return json;
        }
        [HttpPost]
        public ActionResult registration(freerptparam freerptparam)
        {
            //if (Convert.ToString(Session["REGN_GUID"]) == "")
            //{
            //    return Redirect("/login");
            //}
            ////else
            using (DAL db = new DAL())
            {
                freerptdata freerpt = new freerptdata();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_FREEREPORT";
                    cmd.Parameters.AddWithValue("@FName", Convert.ToString(freerptparam.firstName) + "");
                    cmd.Parameters.AddWithValue("@MName", Convert.ToString(freerptparam.middleName) + "");
                    cmd.Parameters.AddWithValue("@LName", Convert.ToString(freerptparam.lastName) + "");
                    cmd.Parameters.AddWithValue("@DOB", freerptparam.dob);
                    cmd.Parameters.AddWithValue("@Gender", Convert.ToString(freerptparam.gender));
                    // cmd.Parameters.AddWithValue("@Email", Convert.ToString(freerptparam.email));
                    cmd.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
                    DataSet ds = db.ReturnDataset(cmd);
                    int cnt = Convert.ToInt16(ds.Tables[2].Rows[0]["TotalCount"]);
                    int limit = Convert.ToInt16(ds.Tables[2].Rows[0]["Limit"]);
                    freerpt.fName = Convert.ToString(ds.Tables[0].Rows[0]["FN"]);
                    freerpt.mName = Convert.ToString(ds.Tables[0].Rows[0]["MN"]);
                    freerpt.lName = Convert.ToString(ds.Tables[0].Rows[0]["LN"]);
                    freerpt.dob = Convert.ToDateTime(ds.Tables[0].Rows[0]["DOB"]).ToString("dd-MMM-yyyy");
                    freerpt.flag = Convert.ToString(ds.Tables[0].Rows[0]["Flag"]);
                    freerpt.allow = (cnt >= limit ? false : true);
                    freerpt.count = cnt;
                    List<rptdataitem> list = new List<rptdataitem>();
                    foreach (DataRow item in ds.Tables[1].Rows)
                    {
                        rptdataitem data = new rptdataitem();
                        data.Section = Convert.ToInt32(item["Section"]);
                        data.SrNo = Convert.ToInt32(item["SrNo"]);
                        data.SeqNo = Convert.ToInt32(item["Seq_No"]);
                        data.ParaDesc = Convert.ToString(item["Para_Desc"]);
                        list.Add(data);
                    }
                    freerpt.listitems = list;
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(freerpt);
            }
        }
        [HttpPost]
        public ActionResult AddFnameDetails(freerptparam freerptparam)
        {
            //if (Convert.ToString(Session["REGN_GUID"]) == "")
            //{
            //    return Redirect("/login");
            //}
            ////else
            using (DAL db = new DAL())
            {
                freerptdata freerpt = new freerptdata();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_INVALID_FREEREPORT_ADD_DETAILS";
                    cmd.Parameters.AddWithValue("@FName", Convert.ToString(freerptparam.firstName) + "");
                    cmd.Parameters.AddWithValue("@MName", Convert.ToString(freerptparam.middleName) + "");
                    cmd.Parameters.AddWithValue("@LName", Convert.ToString(freerptparam.lastName) + "");
                    cmd.Parameters.AddWithValue("@DOB", freerptparam.dob);
                    cmd.Parameters.AddWithValue("@Gender", Convert.ToString(freerptparam.gender));
                    cmd.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
                 
                    cmd.Parameters.AddWithValue("@email", Convert.ToString(freerptparam.email) + "");
                    cmd.Parameters.AddWithValue("@mobile", Convert.ToString(freerptparam.mobile) + "");
                  
                    DataSet ds = db.ReturnDataset(cmd);


                    //int cnt = Convert.ToInt16(ds.Tables[2].Rows[0]["TotalCount"]);
                    //int limit = Convert.ToInt16(ds.Tables[2].Rows[0]["Limit"]);
                    //freerpt.fName = Convert.ToString(ds.Tables[0].Rows[0]["FN"]);
                    //freerpt.mName = Convert.ToString(ds.Tables[0].Rows[0]["MN"]);
                    //freerpt.lName = Convert.ToString(ds.Tables[0].Rows[0]["LN"]);
                    //freerpt.dob = Convert.ToDateTime(ds.Tables[0].Rows[0]["DOB"]).ToString("dd-MMM-yyyy");
                    freerpt.flag = Convert.ToString(ds.Tables[0].Rows[0]["Flag"]);
                    freerpt.msg = Convert.ToString(ds.Tables[0].Rows[0]["msg"]);
                    freerpt.email = Convert.ToString(ds.Tables[0].Rows[0]["EMailID"]);
                    //freerpt.allow = (cnt >= limit ? false : true);
                    //freerpt.count = cnt;
                    //List<rptdataitem> list = new List<rptdataitem>();
                    //foreach (DataRow item in ds.Tables[1].Rows)
                    //{
                    //    rptdataitem data = new rptdataitem();
                    //    data.Section = Convert.ToInt32(item["Section"]);
                    //    data.SrNo = Convert.ToInt32(item["SrNo"]);
                    //    data.SeqNo = Convert.ToInt32(item["Seq_No"]);
                    //    data.ParaDesc = Convert.ToString(item["Para_Desc"]);
                    //    list.Add(data);
                    //}
                    //freerpt.listitems = list;
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(freerpt);
            }
        }
        [HttpPost]
        public ActionResult invalidReportEntry(freerptparam freerptparam)
        {
            //if (Convert.ToString(Session["REGN_GUID"]) == "")
            //{
            //    return Redirect("/login");
            //}
            ////else
            using (DAL db = new DAL())
            {
                freerptdata freerpt = new freerptdata();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_INVALID_FREEREPORT";
                    cmd.Parameters.AddWithValue("@FName", Convert.ToString(freerptparam.firstName) + "");
                    cmd.Parameters.AddWithValue("@MName", Convert.ToString(freerptparam.middleName) + "");
                    cmd.Parameters.AddWithValue("@LName", Convert.ToString(freerptparam.lastName) + "");
                    cmd.Parameters.AddWithValue("@DOB", freerptparam.dob);
                    cmd.Parameters.AddWithValue("@Gender", Convert.ToString(freerptparam.gender));
                    // cmd.Parameters.AddWithValue("@Email", Convert.ToString(freerptparam.email));
                    cmd.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
                    DataSet ds = db.ReturnDataset(cmd);
                    //int cnt = Convert.ToInt16(ds.Tables[2].Rows[0]["TotalCount"]);
                    //int limit = Convert.ToInt16(ds.Tables[2].Rows[0]["Limit"]);
                    //freerpt.fName = Convert.ToString(ds.Tables[0].Rows[0]["FN"]);
                    //freerpt.mName = Convert.ToString(ds.Tables[0].Rows[0]["MN"]);
                    //freerpt.lName = Convert.ToString(ds.Tables[0].Rows[0]["LN"]);
                    //freerpt.dob = Convert.ToDateTime(ds.Tables[0].Rows[0]["DOB"]).ToString("dd-MMM-yyyy");
                    freerpt.flag = Convert.ToString(ds.Tables[0].Rows[0]["Flag"]);
                    freerpt.msg = Convert.ToString(ds.Tables[0].Rows[0]["msg"]);
                    //freerpt.allow = (cnt >= limit ? false : true);
                    //freerpt.count = cnt;
                    //List<rptdataitem> list = new List<rptdataitem>();
                    //foreach (DataRow item in ds.Tables[1].Rows)
                    //{
                    //    rptdataitem data = new rptdataitem();
                    //    data.Section = Convert.ToInt32(item["Section"]);
                    //    data.SrNo = Convert.ToInt32(item["SrNo"]);
                    //    data.SeqNo = Convert.ToInt32(item["Seq_No"]);
                    //    data.ParaDesc = Convert.ToString(item["Para_Desc"]);
                    //    list.Add(data);
                    //}
                    //freerpt.listitems = list;
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(freerpt);
            }
        }
        //[HttpPost]
        //public ActionResult registration(freerptparam freerptparam)
        //{
        //    // if (Convert.ToString(Session["REGN_GUID"]) == "")
        //    // {
        //        // return Redirect("/login");
        //    // }
        //    // else
        //    using (DAL db = new DAL())
        //    {
        //        freerptdata freerpt = new freerptdata();
        //        try
        //        {
        //              string id=""; string firstNm=""; string REGN_GUID=""; int UserFlag=0;
        //              string RanPass = GeneratePassword().ToString();
        //              string EncPass = Encrypt(RanPass).ToString();
        //            SqlCommand cmd = new SqlCommand();
        //            cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //            cmd.CommandText = "NV_SP_FREEREPORT_SID";
        //            cmd.Parameters.AddWithValue("@FName", Convert.ToString(freerptparam.firstName) + "");
        //            cmd.Parameters.AddWithValue("@MName", Convert.ToString(freerptparam.middleName) + "");
        //            cmd.Parameters.AddWithValue("@LName", Convert.ToString(freerptparam.lastName) + "");
        //            cmd.Parameters.AddWithValue("@DOB", freerptparam.dob);
        //            cmd.Parameters.AddWithValue("@Gender", Convert.ToString(freerptparam.gender));
        //            cmd.Parameters.AddWithValue("@Email", Convert.ToString(freerptparam.email));
        //             //if (Session["EmailId"] != null)
        //             //   {
        //             //       cmd.Parameters.AddWithValue("@Email", Convert.ToString(Session["EmailId"]));
        //             //   }
        //             //   else
        //             //   {
        //             //    cmd.Parameters.AddWithValue("@Email", Convert.ToString(freerptparam.email));
        //             //   }
        //                cmd.Parameters.AddWithValue("@Pass",EncPass);
        //            cmd.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
        //            DataSet ds = db.ReturnDataset(cmd);
        //            if (Convert.ToBoolean(ds.Tables[2].Rows[0]["reportCnt"]) == true)
        //            {
        //                id = "";
        //                firstNm = "tempUser";
        //                REGN_GUID = "";
        //                UserFlag = 0;
        //                Session["EmailId"] = id;
        //                Session["FirstName"] = firstNm;
        //                Session["REGN_GUID"] = REGN_GUID;
        //                Session["UserFlag"] = UserFlag;
        //                freerpt.id = id;
        //                freerpt.firstNm = firstNm;
        //                freerpt.REGN_GUID = REGN_GUID;
        //                freerpt.UserFlag = UserFlag;
        //            }
        //            else
        //            {
        //                id = Convert.ToString(ds.Tables[2].Rows[0]["EmailId"]);
        //                firstNm = Convert.ToString(ds.Tables[2].Rows[0]["FirstName"]);
        //                REGN_GUID = Convert.ToString(ds.Tables[2].Rows[0]["REGN_GUID"]);
        //                UserFlag = (Convert.IsDBNull(ds.Tables[2].Rows[0]["UserFlag"])) ? 0 : Convert.ToInt32(ds.Tables[2].Rows[0]["UserFlag"]);//Convert.ToInt32(dt.Rows[0]["UserFlag"]);
        //                Session["EmailId"] = id;
        //                Session["FirstName"] = firstNm;
        //                Session["REGN_GUID"] = REGN_GUID;
        //                Session["UserFlag"] = UserFlag;
        //                freerpt.id = id;
        //                freerpt.firstNm = firstNm;
        //                freerpt.REGN_GUID = REGN_GUID;
        //                freerpt.UserFlag = UserFlag;
        //            }
        //            int cnt = Convert.ToInt16(ds.Tables[2].Rows[0]["TotalCount"]);
        //            int limit = Convert.ToInt16(ds.Tables[2].Rows[0]["Limit"]);
        //            freerpt.fName = Convert.ToString(ds.Tables[0].Rows[0]["FN"]);
        //            freerpt.mName = Convert.ToString(ds.Tables[0].Rows[0]["MN"]);
        //            freerpt.lName = Convert.ToString(ds.Tables[0].Rows[0]["LN"]);
        //            freerpt.dob = Convert.ToDateTime(ds.Tables[0].Rows[0]["DOB"]).ToString("dd-MMM-yyyy");
        //            freerpt.flag = Convert.ToString(ds.Tables[0].Rows[0]["Flag"]);
        //            freerpt.allow = (cnt >= limit ? false : true);
        //            freerpt.count = cnt;
        //            List<rptdataitem> list = new List<rptdataitem>();
        //            foreach (DataRow item in ds.Tables[1].Rows)
        //            {
        //                rptdataitem data = new rptdataitem();
        //                data.Section = Convert.ToInt32(item["Section"]);
        //                data.SrNo = Convert.ToInt32(item["SrNo"]);
        //                data.SeqNo = Convert.ToInt32(item["Seq_No"]);
        //                data.ParaDesc = Convert.ToString(item["Para_Desc"]);
        //                list.Add(data);
        //            }
        //            freerpt.listitems = list;
        //            if (Convert.ToBoolean(ds.Tables[2].Rows[0]["flag"]) == true)
        //            {
        //                string body = "<html><body>Dear " + freerptparam.firstName + ",<br><br>Thank you for registering at www.naamvidya.com.<br><br>Please use the below Password to validate your account and read your personalised report.<br><br><b>" + Convert.ToString(RanPass) + "</b><br><br>By proceeding further you are agreeing to our Terms and Condition and Privacy policy.<br><br>If you have received this email by mistake, please ignore it.<br><br>Regards,<br>NaamVidya</body></html>";
        //                NVEmailService.SendMail(freerptparam.email, freerptparam.firstName, "Password for Naam Vidya Registration", body);
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            Nlogger.nLoggerMsg(ex);
        //        }
        //        finally
        //        {
        //            db.Dispose();
        //        }
        //        return Json(freerpt);
        //    }
        //}
        [HttpPost]
        public ActionResult name(FirstNameData data)
        {
            DataTable blank_dt = new DataTable();
            using (DAL db = new DAL())
            {
                string result = "";
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_ADDNEWFIRSTNAME";
                    cmd.Parameters.AddWithValue("@firstName", data.firstName);
                    cmd.Parameters.AddWithValue("@ethnicity", data.ethnicity);
                    cmd.Parameters.AddWithValue("@emailid", data.emailid);
                    cmd.Parameters.AddWithValue("@gender", data.gender);
                    DataTable dt = db.ReturnDataTable(cmd);
                    result = Convert.ToString(dt.Rows[0][0]);
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(result);
            }
        }
        public string RenderViewToString(string viewName, object model)
        {
            using (var sw = new StringWriter())
            {
                try
                {
                    ViewData.Model = model;
                    var viewResult = ViewEngines.Engines.FindPartialView(ControllerContext, viewName);
                    var viewContext = new ViewContext(ControllerContext, viewResult.View, ViewData, TempData, sw);
                    viewResult.View.Render(viewContext, sw);
                    viewResult.ViewEngine.ReleaseView(ControllerContext, viewResult.View);
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                return sw.GetStringBuilder().ToString();
            }
        }
        public static string GetLocalIPAddress()
        {
            string LocalIp = string.Empty;
            string Host = System.Net.Dns.GetHostName();
            if (!System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                return null;
            }
            System.Net.IPHostEntry host = System.Net.Dns.GetHostEntry(System.Net.Dns.GetHostName());
            foreach (System.Net.IPAddress ip in host.AddressList)
            {
                if (ip.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
                {
                    LocalIp = ip.ToString();
                    break;
                }
            }
            return LocalIp;
        }
        [HttpPost]
        public ActionResult Home(data data)
        {
            string fileName = "";
            string Session_ID = "";
            DataTable blank_dt = new DataTable();
            using (DAL db = new DAL())
            {
                try
                {
                    //fileName = "~/first-name-analysis/Files/" + data.firstName + ".HTML";
                    //string path = System.Web.Hosting.HostingEnvironment.MapPath(fileName);

                    //if (System.IO.File.Exists(path))
                    //{
                    //    fileName = data.firstName + ".HTML";
                    //    Session_ID = Request.RequestContext.HttpContext.Session.SessionID.ToString();
                    //    Nlogger.DebugLogger("SessionID [file exist] : " + Session_ID + " | " + "FirstName : " + data.firstName);
                    //}
                    //else
                    //{
                        SqlCommand cmd = new SqlCommand();
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.CommandText = "Select dbo.FN_GET1(@firtname)";
                        cmd.Parameters.AddWithValue("@firtname", data.firstName);
                        DataTable dt = db.ReturnDataTable(cmd);
                        string myIP = GetUserIP();
                        fileName = Convert.ToString(dt.Rows[0][0]);
                        Session_ID = Request.RequestContext.HttpContext.Session.SessionID.ToString();
                        //Nlogger.DebugLogger("SessionID :" + Session_ID + " | " + "FirstName : " + data.firstName);
                    //}
                    if (fileName != "" && Session_ID != "")
                    {
                        SqlCommand cmd1 = new SqlCommand();
                        cmd1.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd1.CommandText = "NV_SP_FirstNameReport";
                        cmd1.Parameters.AddWithValue("@firstname", data.firstName);
                        cmd1.Parameters.AddWithValue("@session_id", Session_ID);
                        DataTable dt1 = db.ReturnDataTable(cmd1);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }

            }
            return Json(fileName);
        }
        [HttpPost]
        public ActionResult login(login login)
        {
            using (DAL db = new DAL())
            {
                List<logindata> logindt = new List<logindata>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    Session["emailOrderId"] = login.emailOrderId;
                    logindata data = new logindata();
                    string Captcha = login.Captcha;
                    string SCaptcha = Session["captchaText"].ToString();
                    //if (Captcha != SCaptcha)
                    //{
                    //    data.flag = false;
                    //    data.msg = "Invalid Capcha. Please Try Again.";
                    //    logindt.Add(data);
                    //    return Json(logindt);
                    //}
                    string pwd = Encrypt(login.Password).ToString();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_LoginValidation";
                    cmd.Parameters.AddWithValue("@emailId", login.EmailId);
                    cmd.Parameters.AddWithValue("@password", pwd);
                    DataTable dt = db.ReturnDataTable(cmd);
                    if (dt.Rows.Count > 0)
                    {
                        data.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                        data.REGN_GUID = Convert.ToString(dt.Rows[0]["REGN_GUID"]);
                        data.EmailId = Convert.ToString(dt.Rows[0]["EmailId"]);
                        data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                        data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                        data.UserFlag = (Convert.IsDBNull(dt.Rows[0]["UserFlag"])) ? 0 : Convert.ToInt32(dt.Rows[0]["UserFlag"]);
                        logindt.Add(data);
                        FormsAuthentication.SetAuthCookie(data.EmailId, false);
                        string id = login.EmailId;
                        string firstNm = Convert.ToString(dt.Rows[0]["FirstName"]);
                        string REGN_GUID = Convert.ToString(dt.Rows[0]["REGN_GUID"]);
                        int UserFlag = (Convert.IsDBNull(dt.Rows[0]["UserFlag"])) ? 0 : Convert.ToInt32(dt.Rows[0]["UserFlag"]);//Convert.ToInt32(dt.Rows[0]["UserFlag"]);
                        Session["EmailId"] = id;
                        Session["FirstName"] = firstNm;
                        Session["REGN_GUID"] = REGN_GUID;
                        Session["UserFlag"] = UserFlag;
                    }
                    else
                    {
                        data.msg = "Your Registration Process was not complete. Please Register again.";
                        data.flag = false;
                        logindt.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(logindt);
            }
        }
        [HttpPost]
        public ActionResult logout(login login)
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return Redirect("/login");
        }
        [HttpPost]
        public ActionResult forgotPassword(forgotPassword forgotPassword)
        {
            using (DAL db = new DAL())
            {
                List<forgotpwdData> pwddt = new List<forgotpwdData>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    forgotpwdData data = new forgotpwdData();
                    string Captcha = forgotPassword.Captcha;
                    string SCaptcha = Session["captchaText"].ToString();
                    string NewPwd = "", NewEPwd = "";
                    //if (Captcha != SCaptcha)
                    //{
                    //    data.flag = false;
                    //    data.msg = "Invalid Capcha. Please Try Again.";
                    //    pwddt.Add(data);
                    //    return Json(pwddt);
                    //}
                    //else
                    //{
                    int pwdlenght = 6;
                    NewPwd = Security.CreateRandomPassword(pwdlenght);
                    NewEPwd = Encrypt(NewPwd).ToString();
                    //}
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_forgotPassword";
                    cmd.Parameters.AddWithValue("@emailId", forgotPassword.EmailId);
                    cmd.Parameters.AddWithValue("@NewEPwd", NewEPwd);
                    DataTable dt = db.ReturnDataTable(cmd);
                    if (dt.Rows.Count > 0)
                    {
                        if (Convert.ToBoolean(dt.Rows[0]["flag"]) == false)
                        {
                            data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                            data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                            pwddt.Add(data);
                        }
                        else
                        {
                            data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                            data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                            data.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                            pwddt.Add(data);
                            // data.otp = Convert.ToString(dt.Rows[0]["OTP"]);
                            // data.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                            // int id = Convert.ToInt32(dt.Rows[0]["Id"]);
                            // string Password = Encrypt(Convert.ToString(dt.Rows[0]["OTP"])).ToString();
                            // SqlCommand cmd1 = new SqlCommand();
                            // cmd1.CommandType = System.Data.CommandType.StoredProcedure;
                            // cmd1.CommandText = "NV_SP_updatePassword";
                            // cmd1.Parameters.AddWithValue("@password", Password);
                            // cmd1.Parameters.AddWithValue("@id", id);
                            // DataTable dt1 = db.ReturnDataTable(cmd1);
                            // if (dt1.Rows.Count > 0)
                            // {
                            // data.msg = Convert.ToString(dt1.Rows[0]["msg"]);
                            // data.flag = Convert.ToBoolean(dt1.Rows[0]["flag"]);
                            // pwddt.Add(data);
                            // }
                            string body = "<html><body>Dear " + data.FirstName + ",<br><br>You recently requested a password reset for your NaamVidya registration.<br><br> Your New Password details are as follows<br><br>User ID : " + forgotPassword.EmailId + "<br><br>Password : " + NewPwd + "<br><br>If you did not request for this reset, please ignore this mail.<br><br>Thank you,<br>NaamVidya</body></html>";
                            // NVEmailService.SendMail(forgotPassword.EmailId, data.FirstName, "Password Recovery", body);
                            Boolean result = NVEmailService.SendMail(forgotPassword.EmailId, data.FirstName, "Password Recovery", body);
                            if (result == false)
                            {
                                data.msg = "Failure sending Password Recovery mail. Please try again later";
                                data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                                data.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                                pwddt.Add(data);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(pwddt);
            }
        }
        [HttpPost]
        public ActionResult changePassword(changePassword changePassword)
        {
            using (DAL db = new DAL())
            {
                List<changePwdData> changePwdData = new List<changePwdData>();
                try
                {
                    string EmailID = Session["EmailId"].ToString();
                    string Opwd = Encrypt(changePassword.OPassword).ToString();
                    string pwd = Encrypt(changePassword.Password).ToString();
                    SqlCommand cmd = new SqlCommand();
                    changePwdData data = new changePwdData();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_ChangePassword";
                    cmd.Parameters.AddWithValue("@EmailId", EmailID);
                    cmd.Parameters.AddWithValue("@OPassword", Opwd);
                    cmd.Parameters.AddWithValue("@Password", pwd);
                    cmd.Parameters.AddWithValue("@REGN_GUID", changePassword.REGN_GUID);
                    DataTable dt = db.ReturnDataTable(cmd);
                    data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                    data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                    changePwdData.Add(data);
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(changePwdData);
            }
        }
        [HttpPost]
        public ActionResult newRegistration(newRegistration newRegistration)
        {
            using (DAL db = new DAL())
            {
                List<newRegisData> newRegisData = new List<newRegisData>();
                try
                {
                    string pwd = Encrypt(newRegistration.password).ToString();
                    SqlCommand cmd = new SqlCommand();
                    newRegisData data = new newRegisData();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_RegisterUsers";
                    cmd.Parameters.AddWithValue("@firstName", newRegistration.firstName);
                    cmd.Parameters.AddWithValue("@lastName", newRegistration.lastName);
                    cmd.Parameters.AddWithValue("@emailId", newRegistration.emailId);
                    cmd.Parameters.AddWithValue("@password", pwd);
                    DataTable dt = db.ReturnDataTable(cmd);
                    if (Convert.ToBoolean(dt.Rows[0]["flag"]) == true)
                    {
                        data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                        data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                        data.otp = Convert.ToInt32(dt.Rows[0]["otp"]);
                        newRegisData.Add(data);
                        string newid = Convert.ToString(dt.Rows[0]["id"]);
                        Session["newid"] = newid;
                        if (Convert.ToBoolean(dt.Rows[0]["flag"]) == true)
                        {
                            string body = "<html><body>Dear " + newRegistration.firstName + ",<br><br>Thank you for registering at www.naamvidya.com.<br><br>You are just one step away from your detailed name analysis report.<br><br> Please use the below OTP to validate your account and read your personalised report.<br><br><b>" + Convert.ToInt32(dt.Rows[0]["otp"]) + "</b><br><br>By proceeding further you are agreeing to our Terms and Condition and Privacy policy.<br><br>If you have received this email by mistake, please ignore it.<br><br>Regards,<br>NaamVidya</body></html>";
                            NVEmailService.SendMail(newRegistration.emailId, newRegistration.firstName, "OTP for Naam Vidya Registration", body);
                        }
                    }
                    else
                    {
                        if (Convert.ToInt32(dt.Rows[0]["otp"]) == 0)
                        {
                            data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                            data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                            newRegisData.Add(data);
                        }
                        else
                        {
                            data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                            data.flag = Convert.ToBoolean(true);
                            string body = "<html><body>Dear " + newRegistration.firstName + ",<br><br>Thank you for registering at www.naamvidya.com.<br><br>You are just one step away from your detailed name analysis report.<br><br> Please use the below OTP to validate your account and read your personalised report.<br><br><b>" + Convert.ToInt32(dt.Rows[0]["otp"]) + "</b><br><br>By proceeding further you are agreeing to our Terms and Condition and Privacy policy.<br><br>If you have received this email by mistake, please ignore it.<br><br>Regards,<br>NaamVidya</body></html>";
                            NVEmailService.SendMail(newRegistration.emailId, newRegistration.firstName, "OTP for Naam Vidya Registration", body);
                            newRegisData.Add(data);
                            string newid = Convert.ToString(dt.Rows[0]["id"]);
                            Session["newid"] = newid;
                        }
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(newRegisData);
            }
        }
        [HttpPost]
        public ActionResult footermail(footermail footermail)
        {
            string msg = "";
            string Name = footermail.Name;
            string ToId = "reachus@naamvidya.com";//"hasti.kenia@comflextech.com";
            //string ToId = "hasti.kenia@comflextech.com";
            string EmailId = footermail.EmailId;
            string Message = footermail.Message;
            string body = "<html><body>Dear NaamVidya,<br/><br/>Name -" + Name + " <br><br>Email Id - " + EmailId + "<br/><br/>Message -  " + Message + " <br/><br/> Thank you</body></html>";
            Boolean result = NVEmailService.SendMail(ToId, "Naam Vidya", "Message from Naam Vidya Home Page", body);
            if (result == false)
            {
                msg = "Mail Not Send.";
            }
            else
            {
                msg = "Thank You for contacting us.";
            }
            return Json(msg);
        }
        [HttpPost]
        public ActionResult validateOTP(validateOTP validateOTP)
        {
            using (DAL db = new DAL())
            {
                List<vOTP> vOTP = new List<vOTP>();
                try
                {
                    vOTP data = new vOTP();
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_ValidateOTP";
                    cmd.Parameters.AddWithValue("@otp", validateOTP.ValOtp);
                    cmd.Parameters.AddWithValue("@newid", Session["newid"].ToString());
                    DataTable dt = db.ReturnDataTable(cmd);
                    data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                    data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                    vOTP.Add(data);
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(vOTP);
            }
        }
        public string Encrypt(string toEncrypt)
        {
            ASCIIEncoding textConverter = new ASCIIEncoding();
            byte[] key = textConverter.GetBytes("2a1c907916add59edffb3a2c");
            byte[] toEncryptArray = UTF8Encoding.UTF8.GetBytes(toEncrypt);
            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = key;
            tdes.Mode = CipherMode.CBC;
            tdes.Padding = PaddingMode.PKCS7;
            tdes.IV = new byte[] { 12, 34, 56, 78, 90, 87, 65, 43 };
            ICryptoTransform cTransform = tdes.CreateEncryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
            tdes.Clear();
            //Return the encrypted data into unreadable string format
            toEncrypt = Convert.ToBase64String(resultArray, 0, resultArray.Length);
            string pwd = toEncrypt.ToString();
            return pwd;
        }
        public string GeneratePassword()
        {
            string strPwdchar = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string strPwd = "";
            Random rnd = new Random();
            for (int i = 0; i <= 5; i++)
            {
                int iRandom = rnd.Next(0, strPwdchar.Length - 1);
                strPwd += strPwdchar.Substring(iRandom, 1);
            }
            return strPwd;
        }
        public ActionResult generateCaptcha()
        {
            try
            {
                System.Drawing.FontFamily family = new System.Drawing.FontFamily("Arial");
                CaptchaImage.CaptchaImage img = new CaptchaImage.CaptchaImage(150, 50, family);
                string text = img.CreateRandomText(4);// +img.CreateRandomText(3);
                //text = Regex.Replace(text, @"\s+", "");
                img.SetText(text);
                img.GenerateImage();
                img.Image.Save(Server.MapPath("~") + this.Session.SessionID.ToString() + ".png", System.Drawing.Imaging.ImageFormat.Png);
                Session["captchaText"] = text;
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
            }
            return Json(this.Session.SessionID.ToString() + ".png?t=" +
                DateTime.Now.Ticks, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult getOrders(getOrders getOrders)
        {
            using (DAL db = new DAL())
            {
                List<getOrders> Orders = new List<getOrders>();
                try
                {
                    string REGN_GUID = Session["REGN_GUID"].ToString();
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_OrderStatus";
                    cmd.Parameters.AddWithValue("@REGN_GUID", REGN_GUID);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        getOrders data = new getOrders();
                        data.OrderId = Convert.ToInt32(dr["OrderId"]);
                        data.OrderNo = Convert.ToString(dr["OrderNo"]);
                        data.OrderDate = Convert.ToString(dr["OrderDate"]);
                        data.ProductId = Convert.ToInt32(dr["ProductId"]);
                        data.ProductName = Convert.ToString(dr["ProductName"]);
                        data.FirstName = Convert.ToString(dr["FirstName"]);
                        data.MiddleName = Convert.ToString(dr["MiddleName"]);
                        data.LastName = Convert.ToString(dr["LastName"]);
                        data.Name1 = Convert.ToString(dr["Name1"]);
                        data.Name2 = Convert.ToString(dr["Name2"]);
                        data.Name3 = Convert.ToString(dr["Name3"]);
                        data.Name4 = Convert.ToString(dr["Name4"]);
                        data.Name5 = Convert.ToString(dr["Name5"]);
                        data.PreferedAlphabets = Convert.ToString(dr["PreferedAlphabets"]);
                        data.REGN_GUID = Convert.ToString(dr["REGN_GUID"]);
                        Orders.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(Orders);
            }
        }
        public ActionResult getSurnames(Surnames Surnames)
        {
            using (DAL db = new DAL())
            {
                List<Surnames> Surname = new List<Surnames>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_GetSurnames";
                    cmd.Parameters.AddWithValue("@OrderId", Surnames.OrderId);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        Surnames data = new Surnames();
                        data.OrderId = Convert.ToInt32(dr["Order_ID"]);
                        data.LName = Convert.ToString(dr["LName"]);
                        Surname.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(Surname);
            }
        }
        public ActionResult getListBySurnames(ListBySurnames ListBySurnames)
        {
            using (DAL db = new DAL())
            {
                List<ListBySurnames> SurnameL = new List<ListBySurnames>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_GetListBySurname";
                    cmd.Parameters.AddWithValue("@OrderId", ListBySurnames.OrderId);
                    cmd.Parameters.AddWithValue("@LName", ListBySurnames.LName);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        ListBySurnames data = new ListBySurnames();
                        data.OrderId = Convert.ToInt32(dr["Order_ID"]);
                        data.FName = Convert.ToString(dr["FName"]);
                        data.MName = Convert.ToString(dr["MName"]);
                        data.LName = Convert.ToString(dr["LName"]);
                        SurnameL.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(SurnameL);
            }
        }
        public ActionResult saveInfoDetails(saveInfoDetails saveInfoDetails)
        {
            using (DAL db = new DAL())
            {
                List<InfoDetails> InfoDetails = new List<InfoDetails>();
                try
                {
                    //string REGN_GUID = Session["REGN_GUID"].ToString();
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    /*
"orderID":"10040","firstName":"","middleName":"Harishchandra","lastName":"Pawar","dob":"2016 - Feb - 01","birthTime":"","gender":"M","mobileno":"7875401395","remarks":"Baby name","Name1":"Harish","Name2":"Kedar","Name3":"","Name4":"","Name5":"","PreferedAlphabets":"","rhymewithparents":false,"MaxLengthName":15,"OrderStatus":"5","REGN_GUID":"3D3883DC1CC54DA8AEB9D657975136AC"}'                    
*/
                    //changed by sonu 2018 - 01 - 30
                    string x = saveInfoDetails.OrderId;
                    int value;
                    if (!int.TryParse(x, out value))
                    {
                        string OrderId = Convert.ToString(saveInfoDetails.OrderId);
                        saveInfoDetails.OrderId = Decrypt(Server.UrlDecode(OrderId));
                    }
                    //changed by sonu 2018 - 01 - 30
                    cmd.CommandText = "NV_SP_saveInfoDetails";
                    cmd.Parameters.AddWithValue("@OrderId", saveInfoDetails.OrderId);
                    cmd.Parameters.AddWithValue("@firstName", saveInfoDetails.firstName != null ? saveInfoDetails.firstName : "");
                    cmd.Parameters.AddWithValue("@middleName", saveInfoDetails.middleName != null ? saveInfoDetails.middleName : "");
                    cmd.Parameters.AddWithValue("@lastName", saveInfoDetails.lastName != null ? saveInfoDetails.lastName : "");
                    cmd.Parameters.AddWithValue("@dob", saveInfoDetails.dob != null ? saveInfoDetails.dob : DateTime.Now);
                    cmd.Parameters.AddWithValue("@placeOfBirth", saveInfoDetails.placeOfBirth != null ? saveInfoDetails.placeOfBirth : "");
                    cmd.Parameters.AddWithValue("@birthCity", saveInfoDetails.birthCity != null ? saveInfoDetails.birthCity : "");
                    cmd.Parameters.AddWithValue("@birthTime", saveInfoDetails.birthTime != null ? saveInfoDetails.birthTime : "");
                    cmd.Parameters.AddWithValue("@gender", saveInfoDetails.gender);
                    cmd.Parameters.AddWithValue("@mobileno", saveInfoDetails.mobileno);
                    cmd.Parameters.AddWithValue("@remarks", saveInfoDetails.remarks != null ? saveInfoDetails.remarks : "");
                    cmd.Parameters.AddWithValue("@Name1", saveInfoDetails.Name1 != null ? saveInfoDetails.Name1 : "");
                    cmd.Parameters.AddWithValue("@Name2", saveInfoDetails.Name2 != null ? saveInfoDetails.Name2 : "");
                    cmd.Parameters.AddWithValue("@Name3", saveInfoDetails.Name3 != null ? saveInfoDetails.Name3 : "");
                    cmd.Parameters.AddWithValue("@Name4", saveInfoDetails.Name4 != null ? saveInfoDetails.Name4 : "");
                    cmd.Parameters.AddWithValue("@Name5", saveInfoDetails.Name5 != null ? saveInfoDetails.Name5 : "");
                    cmd.Parameters.AddWithValue("@AlterNameSpell", saveInfoDetails.AlterNameSpell);
                    cmd.Parameters.AddWithValue("@AlterLNameSpell", saveInfoDetails.AlterLNameSpell);
                    cmd.Parameters.AddWithValue("@PreferedAlphabets", saveInfoDetails.PreferedAlphabets != null ? saveInfoDetails.PreferedAlphabets : "");
                    cmd.Parameters.AddWithValue("@Criteria", saveInfoDetails.Criteria != null ? saveInfoDetails.Criteria : "");
                    cmd.Parameters.AddWithValue("@rhymewithparents", saveInfoDetails.rhymewithparents);
                    cmd.Parameters.AddWithValue("@MotherName", saveInfoDetails.MotherName != null ? saveInfoDetails.MotherName : "");
                    cmd.Parameters.AddWithValue("@FatherName", saveInfoDetails.FatherName != null ? saveInfoDetails.FatherName : "");
                    cmd.Parameters.AddWithValue("@Sibling1", saveInfoDetails.Sibling1 != null ? saveInfoDetails.Sibling1 : "");
                    cmd.Parameters.AddWithValue("@Sibling2", saveInfoDetails.Sibling2 != null ? saveInfoDetails.Sibling2 : "");
                    cmd.Parameters.AddWithValue("@Sibling3", saveInfoDetails.Sibling3 != null ? saveInfoDetails.Sibling3 : "");
                    cmd.Parameters.AddWithValue("@MaxLengthName", saveInfoDetails.MaxLengthName != null ? saveInfoDetails.MaxLengthName : "");
                    cmd.Parameters.AddWithValue("@OptionalmiddleName", saveInfoDetails.OptionalmiddleName != null ? saveInfoDetails.OptionalmiddleName : "");
                    // cmd.Parameters.AddWithValue("@OptionalmiddleName", saveInfoDetails.OptionalmiddleName != null ? saveInfoDetails.OptionalmiddleName : "");
                    cmd.Parameters.AddWithValue("@OrderStatus", saveInfoDetails.OrderStatus);
                    cmd.Parameters.AddWithValue("@REGN_GUID", saveInfoDetails.REGN_GUID);
                    DataTable dt = db.ReturnDataTable(cmd);
                    InfoDetails data = new InfoDetails();
                    data.msg = Convert.ToString(dt.Rows[0]["msg"]);
                    data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                    InfoDetails.Add(data);
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(InfoDetails);
            }
        }
        [HttpPost]
        public ActionResult getOrderIDByReguid(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetail = new List<NaamvidyaDetailModel>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetOrderID";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    DataSet ds = db.ReturnDataset(cmd);
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                        data.OrderId = Convert.ToString(item["OrderId"]);
                        data.ProductId = Convert.ToInt32(item["ProductId"]);
                        NaamvidyaDetail.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetail);
            }
        }
        public void RequestToPaypal(DataTable CartDetails, string custom, string sTxnId)
        {
            using (DAL db = new DAL())
            {
                try
                {
                    var apiContext = Configuration.GetAPIContext();
                    string payerId = Request.Params["PayerID"];
                    string tax = "0", shipping = "0", subtotal = "0", currency = "USD", total = "0", TotalDisct = "0";
                    if (string.IsNullOrEmpty(payerId))
                    {
                        var itemList = new ItemList();
                        List<Item> items = new List<Item>();
                        //var items = new List<Item>();
                        // Nlogger.DebugLogger("step-1");
                        //Nlogger.DebugLogger("Dr");
                        foreach (DataRow dr in CartDetails.Rows)
                        {
                            Item o = new Item();
                            o.name = Convert.ToString(dr["ProductName"]);
                            o.currency = currency;
                            o.price = Convert.ToString(dr["DollerPrice"]);
                            o.quantity = "1";
                            o.sku = Convert.ToString(dr["ProductName"]);
                            subtotal = Convert.ToString(dr["DTotalPrice"]);
                            total = Convert.ToString(dr["DFianlAmout"]);
                            TotalDisct = Convert.ToString(dr["TotalDisct"]);
                            //Nlogger.DebugLogger(dr["ProductName"].ToString());
                            //Nlogger.DebugLogger(currency.ToString());
                            //Nlogger.DebugLogger(dr["DollerPrice"].ToString());
                            //Nlogger.DebugLogger(dr["DTotalPrice"].ToString());
                            //Nlogger.DebugLogger(dr["DFianlAmout"].ToString());
                            //Nlogger.DebugLogger(dr["TotalDisct"].ToString());
                            items.Add(o);
                        }
                        itemList.items = items;
                        // ###Details
                        // Let's you specify details of a payment amount.
                        //Nlogger.DebugLogger("step-2");
                        // Nlogger.DebugLogger("details");
                        var details = new Details()
                        {
                            // tax = tax,
                            //shipping = shipping,
                            shipping_discount = TotalDisct,
                            subtotal = subtotal
                        };
                        //Nlogger.DebugLogger(TotalDisct.ToString());
                        // Nlogger.DebugLogger(subtotal.ToString());
                        // ###Amount
                        // Let's you specify a payment amount.
                        //Nlogger.DebugLogger("step-3");
                        //Nlogger.DebugLogger("amount");
                        var amount = new Amount()
                        {
                            currency = currency,
                            total = total, // Total must be equal to sum of shipping, tax and subtotal.
                            details = details,
                        };
                        //Nlogger.DebugLogger(currency.ToString());
                        // Nlogger.DebugLogger(total.ToString());
                        // ###Payer
                        // A resource representing a Payer that funds a payment
                        // Payment Method
                        // as `paypal`
                        var payer = new Payer() { payment_method = "paypal" };
                        // ###Redirect URLS
                        // These URLs will determine how the user is redirected from PayPal once they have either approved or canceled the payment.
                        var C_baseURI = Request.Url.Scheme + "://" + Request.Url.Authority + "/Failure?";
                        var R_baseURI = Request.Url.Scheme + "://" + Request.Url.Authority + "/success?";
                        var guid = Convert.ToString((new Random()).Next(100000));
                        var redirectUrl = C_baseURI + "guid=" + guid;
                        var redirUrls = new RedirectUrls()
                        {
                            cancel_url = redirectUrl + "&cancel=true",
                            return_url = R_baseURI + "guid=" + guid
                        };
                        // ###Transaction
                        // A transaction defines the contract of a
                        // payment - what is the payment for and who
                        // is fulfilling it. 
                        var transactionList = new List<Transaction>();
                        // The Payment creation API requires a list of
                        // Transaction; add the created `Transaction`
                        // to a List
                        transactionList.Add(new Transaction()
                        {
                            custom = custom,
                            description = "Naamvidya Checkout.",
                            //invoice_number = Common.GetRandomInvoiceNumber(),
                            invoice_number = sTxnId,
                            amount = amount,
                            item_list = itemList
                        });
                        //Nlogger.DebugLogger(sTxnId.ToString());
                        //Nlogger.DebugLogger(custom.ToString());
                        // ###Payment
                        // A Payment Resource; create one using
                        // the above types and intent as `sale` or `authorize`
                        var payment = new Payment()
                        {
                            intent = "sale",
                            payer = payer,
                            transactions = transactionList,
                            redirect_urls = redirUrls
                        };
                        // ^ Ignore workflow code segment
                        #region Track Workflow
                        //this.flow.AddNewRequest("Create PayPal payment", payment);
                        #endregion
                        //Nlogger.DebugLogger(apiContext.ToString());
                        // Create a payment using a valid APIContext
                        var createdPayment = payment.Create(apiContext);
                        // ^ Ignore workflow code segment
                        #region Track Workflow
                        // this.flow.RecordResponse(createdPayment);
                        #endregion
                        // Using the `links` provided by the `createdPayment` object, we can give the user the option to redirect to PayPal to approve the payment.
                        var links = createdPayment.links.GetEnumerator();
                        NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
                        SqlCommand cmd = new SqlCommand();
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.CommandText = "NV_SP_SaveFailPaypalOrder";
                        cmd.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
                        cmd.Parameters.AddWithValue("@PayuMoneyId", createdPayment.id);
                        cmd.Parameters.AddWithValue("@BillDetail", custom);
                        cmd.Parameters.AddWithValue("@txnid", sTxnId);
                        cmd.Parameters.AddWithValue("@guid", guid);
                        DataSet ds = db.ReturnDataset(cmd);
                        //Nlogger.DebugLogger(links.ToString());
                        //Nlogger.DebugLogger("step-4");
                        while (links.MoveNext())
                        {
                            // Nlogger.DebugLogger("step-5");
                            var link = links.Current;
                            if (link.rel.ToLower().Trim().Equals("approval_url"))
                            {
                                //Nlogger.DebugLogger("step-4");
                                // Nlogger.DebugLogger(link.href);
                                Response.Redirect(link.href);
                                //this.flow.RecordRedirectUrl("Redirect to PayPal to approve the payment...", link.href);
                            }
                        }
                        Nlogger.DebugLogger("step-7");
                        Session.Add(guid, createdPayment.id);
                        // Session.Add("flow-" + guid, this.flow);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLogger(ex);
                    throw;
                }
            }
        }
        public void ExcutePaypalPay()
        {
            var apiContext = Configuration.GetAPIContext();
            string payerId = Request.Params["PayerID"];
            //Nlogger.DebugLogger(payerId);
            if (!string.IsNullOrEmpty(payerId))
            {
                var guid = Request.Params["guid"];
                // ^ Ignore workflow code segment
                #region Track Workflow
                // this.flow = Session["flow-" + guid] as RequestFlow;
                // this.RegisterSampleRequestFlow();
                // this.flow.RecordApproval("PayPal payment approved successfully.");
                #endregion
                // Using the information from the redirect, setup the payment to execute.
                var paymentId = Session[guid] as string;
                var paymentExecution = new PaymentExecution() { payer_id = payerId };
                var payment = new Payment() { id = paymentId };
                // ^ Ignore workflow code segment
                #region Track Workflow
                //this.flow.AddNewRequest("Execute PayPal payment", payment);
                #endregion
                // Execute the payment.
                var executedPayment = payment.Execute(apiContext, paymentExecution);
                // ^ Ignore workflow code segment
                #region Track Workflow
                //this.flow.RecordResponse(executedPayment);
                #endregion
                // For more information, please visit [PayPal Developer REST API Reference](https://developer.paypal.com/docs/api/).
            }
        }
        public TransactionSuccessModel RemoveDetail(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                TransactionSuccessModel objTran = new TransactionSuccessModel();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_RemoveTempDetail";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@PayuMoneyId", NaamvidyaModel.PayUMoney_Id);
                    //cmd.Parameters.AddWithValue("@BillDetail", NaamvidyaModel.BillAddress1);
                    cmd.Parameters.AddWithValue("@txnid", NaamvidyaModel.txnid);
                    DataSet ds = db.ReturnDataset(cmd);
                    List<Saveorderdetail> Saveorderdetail = new List<Saveorderdetail>();
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return objTran;
            }
        }
        public TransactionSuccessModel SaveCartDetail(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                TransactionSuccessModel objTran = new TransactionSuccessModel();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_SaveCheckOutCartDetail";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@PayuMoneyId", NaamvidyaModel.PayUMoney_Id);
                    cmd.Parameters.AddWithValue("@BillDetail", NaamvidyaModel.BillAddress1);
                    cmd.Parameters.AddWithValue("@txnid", NaamvidyaModel.txnid);
                    cmd.Parameters.AddWithValue("@PStatus", NaamvidyaModel.PStatus);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        if (Convert.ToString(NaamvidyaModel.ClientsEmailId) != "" && NaamvidyaModel.userflag == "1")
                        {
                            objTran.Trans_Id = ds.Tables[0].Rows[0]["BillNo"].ToString();
                            if (NaamvidyaModel.PStatus == false)
                            {
                                List<Saveorderdetail> Saveorderdetail = new List<Saveorderdetail>();
                                foreach (DataRow item in ds.Tables[0].Rows)
                                {
                                    Saveorderdetail data = new Saveorderdetail();
                                    objTran.Trans_Id = Convert.ToString(item["BillNo"]);
                                    data.OrderNo = Convert.ToString(item["BillNo"]);
                                    data.OrderNoCommaSepratd = Convert.ToString(item["OrderNos"]);
                                    SendOrderConfirmationMail(data.OrderNoCommaSepratd, NaamvidyaModel.ClientsEmailId, NaamvidyaModel.FirstName);
                                }
                            }
                        }
                        else
                        {
                            List<Saveorderdetail> Saveorderdetail = new List<Saveorderdetail>();
                            foreach (DataRow item in ds.Tables[0].Rows)
                            {
                                Saveorderdetail data = new Saveorderdetail();
                                //OrderId
                                //PayumoneyId
                                objTran.Trans_Id = Convert.ToString(item["BillNo"]);
                                data.OrderNo = Convert.ToString(item["BillNo"]);
                                data.OrderNoCommaSepratd = Convert.ToString(item["OrderNos"]);
                                // For Sending Asynk Mail
                                SendOrderConfirmationMail(data.OrderNoCommaSepratd, NaamvidyaModel.Email_Id, NaamvidyaModel.FirstName);
                                //data.Orderstatus = Convert.ToString(item["OrderStatus"]);
                                //= Convert.ToString(item["ProductId"]);
                                //data.productname = Convert.ToString(item["ProductName"]);
                                //data.price = Convert.ToDecimal(item["Price"]);
                                //data.finalprice = Convert.ToDecimal(item["FinalPrice"]);
                                //data.name = Convert.ToString(item["FirstName"]);
                                //data.emailid = Convert.ToString(item["Email"]);
                                //orderdetail.Add(data);
                            }
                            foreach (DataRow item in ds.Tables[1].Rows)
                            {
                                Saveorderdetail data = new Saveorderdetail();
                                //OrderId
                                //PayumoneyId
                                //objTran.Trans_Id = Convert.ToString(item["BillNo"]);
                                //data.OrderNo = Convert.ToString(item["BillNo"]);
                                data.OrderNoCommaSepratd = Convert.ToString(item["OrderNo"]);
                                data.OrderId = Convert.ToString(item["OrderId"]);
                                data.To_EmailId = Convert.ToString(item["To_EmailId"]);
                                data.Message = Convert.ToString(item["Message"]);
                                data.To_Name = Convert.ToString(item["To_Name"]);
                                data.FirstName = Convert.ToString(item["FirstName"]);
                                data.ProductName = Convert.ToString(item["ProductName"]);
                                data.ProductId = Convert.ToString(item["ProductId"]);
                                // For Sending Asynk Mail
                                SendOrderConfirmationGift(data.OrderNoCommaSepratd, data.OrderId, data.To_EmailId, data.Message, data.To_Name, data.FirstName, data.ProductName, data.ProductId);
                                //data.Orderstatus = Convert.ToString(item["OrderStatus"]);
                                //= Convert.ToString(item["ProductId"]);
                                //data.productname = Convert.ToString(item["ProductName"]);
                                //data.price = Convert.ToDecimal(item["Price"]);
                                //data.finalprice = Convert.ToDecimal(item["FinalPrice"]);
                                //data.name = Convert.ToString(item["FirstName"]);
                                //data.emailid = Convert.ToString(item["Email"]);
                                //orderdetail.Add(data);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return objTran;
            }
        }
        //public async Task SendOrderConfirmationMail(string OrderNos
        public void SendOrderConfirmationMail(string OrderNos, string EmailId, string FirstName)
        {
            try
            {
                string body = "<html>" +
    "<body>" +
        "Dear " + FirstName + "," +
        "<br><br>" +
            "Thank you for your order number '" + OrderNos + "'." +
        "<br><br> " +
            "We will soon be assigning a Name Specialist to your order who will work with you to arrive upon a balanced name." +
        "<br><br>" +
            "For any questions and clarifications please write to orders@naamvidya.com " +
        "<br><br>" +
            "Thank you," +
        "<br>" +
        "NaamVidya" +
    "</body></html>";
                //anil.nandalike@naamvidya.com     //Live
                //siddhesh.pawar@comflextech.com  //Test
                //NVEmailService.SendMail(Convert.ToString(Session["EmailId"]), Convert.ToString(Session["FirstName"]), "Order Confirmation", body);
                //Boolean result = NVEmailService.SendMail(Convert.ToString(Session["EmailId"]), Convert.ToString(Session["FirstName"]), "Order Confirmation", body);
                //NVEmailService.SendMail(EmailId, FirstName, "Order Confirmation", body);
                Boolean result = NVEmailService.SendMail(EmailId, FirstName, "anil.nandalike@naamvidya.com", "Order Confirmation", body);
                if (result == false)
                {
                    //data.msg = "Failure sending Password Recovery mail. Please try again later";
                    //data.flag = Convert.ToBoolean(dt.Rows[0]["flag"]);
                    //data.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
                    //pwddt.Add(data);
                }
                else
                {
                }
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
            }
            finally
            {
            }
        }
        public string encrypt(string encryptString)
        {
            string EncryptionKey = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            byte[] clearBytes = Encoding.Unicode.GetBytes(encryptString);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] {  
            0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76  
        });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    encryptString = Convert.ToBase64String(ms.ToArray());
                }
            }
            return encryptString;
        }
        public void SendOrderConfirmationGift(string OrderNos, string OrderId, string EmailId, string Message, string To_Name, string FirstName, string ProductName, string ProductId)
        {
            string dis9 = "";
            string dis10 = "";
            string body = "";
            string EncEmailId = "";
            try
            {
                OrderId = encrypt(OrderId).ToString().Trim();
                EncEmailId = encrypt(EmailId).ToString().Trim();
                if (ProductId == "9")
                {
                    dis10 = "display:none;";
                }
                if (ProductId == "10")
                {
                    dis9 = "display:none;";
                }
                //"To complete your order  <a href=\"http://localhost:2991/gift-login?id=" + OrderId + "\">Click Here </a> " + //Local
                //"To complete your order  <a href=\"http://66.70.152.185:88/gift-login?id=" + OrderId + "\">Click Here </a> " + //test server
                //"To complete your order  <a href=\"https://www.naamvidya.com/more-order-information?id=" + OrderId + "\">Click Here </a> " + //Live
                //string abc = "<html><body>Dear " +  ",<br><br>You recently requested a password reset for your NaamVidya registration.<br><br> <br>NaamVidya</body></html>";

                body = "<html><head><link href='https://fonts.googleapis.com/css?family=Montserrat:400,600,700,900' rel='stylesheet'>" +
                                        "<style>" +
                                       "body {font-family: 'Montserrat', sans-serif; color: #403F41; margin: 0; padding: 0;}" +
                                       "p{margin: 0; padding: 0;line-height: 130%;}</style>" +
                                        "<title>Mailer</title>" +
                                    "</head><body>" +
                                        "<table cellpadding='0' cellspacing='0' style='height: 100%; width:100%;border:0;'>" +
                                            "<tr><td align='middle'>" +
                                                    "<table border='0' cellpadding='0' cellspacing='0' width='640' bgcolor='#FCF4E3'>" +
                                                        "<tr><td><img border='0' width='640' src='https://www.naamvidya.com/images/nv_header.png' alt='Naam Vidya' /></td></tr>" +
                                                        "<tr><td>" +
                                                        "<table><tr><td width='30'></td><td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='margin-bottom: 10px;'>Dear <span style='color:#BC3D80 '>" + To_Name + "</span>,</p>" +
                                                        "<p style='margin-bottom: 10px;'>Greetings from NaamVidya!</p>" +
                    //if Product id is 9 i.e Gold Baby Name Gift
                                                            "<p style='margin-bottom: 10px;" + dis9 + "'>Congratulations, <span style='color:#BC3D80 '>" + FirstName + "</span> has gifted you a Baby Name Gold Package from NaamVidya.</p>" +
                    //if Product id is 10 i.e Platinum Baby Name Gift
                                                             "<p style='margin-bottom: 10px;" + dis10 + "'>Congratulations, <span style='color:#BC3D80 '>" + FirstName + "</span> has gifted you a Baby Name Platinum Package from NaamVidya.</p>" +
                                                             "<p style='margin-bottom: 10px;'>Message:<i>" + Message + "</i></p>" +
                    //<a ui-sref="contacts.detail({contactId: id})">

                                                             //"<p style='margin-bottom: 10px;'>As part of <strong>" + ProductName + "</strong> package, you are entitled to:</p>" +

                                                              //if Product id is 9 i.e Gold Baby Name Gift
                                                             "<p style='margin-bottom: 10px;" + dis9 + "'>As part of <strong>Gold Baby Name</strong> package, you are entitled to:</p>" +
                    //if Product id is 10 i.e Platinum Baby Name Gift
                                                             "<p style='margin-bottom: 10px;" + dis10 + "'>As part of <strong>Platinum Baby Name</strong> package, you are entitled to:</p>" +

                                                        //if Product id is 9 i.e Gold Baby Name Gift
                                                             "<ul style='color: #D5A53A; line-height: 25px; margin-bottom: 10px;" + dis9 + "'>" +
                                                             "<li type='square'><span style='color:#BC3D80'>Get up to 5 baby names (given by you) checked for Numerological Balance.</span> </li>" +
                                                             "<li type='square'><span style='color:#BC3D80'>Get Correction of the names (suggested by you and found unbalanced).</span> </li>" +
                                                             "<li type='square'><span style='color:#BC3D80'>Suggestion on the business signature to be used with the name.</span></li>" +
                                                             "<li type='square'><span style='color:#BC3D80'>Report on the ﬁnalized name.</span></li>" +
                                                             "<li type='square'><span style='color:#BC3D80'>Certificate of Name Assignment from NaamVidya.</span></li>" +
                                                             "</ul>" +
                    //if Product id is 10 i.e Platinum Baby Name Gift
                                                             "<ul style='color: #D5A53A; line-height: 25px; margin-bottom: 10px;" + dis10 + "'>" +
                                                        "<li type='square'><span style='color:#BC3D80'>Get up to 5 baby names (given by you) checked for Numerological Balance.</span> </li>" +
                                                        "<li type='square'><span style='color:#BC3D80'>Correction of the names (suggested by you and found unbalanced).</span> </li>" +
                                                        "<li type='square'><span style='color:#BC3D80'>Get 10-15 additional Balanced name suggestions from us.</span></li>" +
                                                        "<li type='square'><span style='color:#BC3D80'>Suggestion on the business signature to be used with the name.</span></li>" +
                                                        "<li type='square'><span style='color:#BC3D80'>Report on the ﬁnalized name.</span></li>" +
                                                        "<li type='square'><span style='color:#BC3D80'>Dedicated Name Specialist to help you.</span></li>" +
                                                        "</ul>" +
                                                        "<p style='font-size: 20px; margin-bottom: 15px; text-align: center;font-weight: bold;'>" +
                                                        "To claim your Gift Card <a href=\"https://www.naamvidya.com/gift-login?id=" + OrderId + "&EmailId=" + EncEmailId + "\"><span style='color:blue'>Click Here</span></a> " +
                                                        //"To complete your order  <a href=\"http://localhost:2991/gift-login?id=" + OrderId + "&EmailId=" + EncEmailId + "\"><span style='color:blue'>Click Here</span></a> " +
                                                        "</p>" +
                                                        "<p style='font-size: 14px; margin-bottom: 15px; text-align: center;font-weight: bold;'>" +
                                                            "If you have any issues claiming this card, please send a mail to orders@naamvidya.com " +
                                                         "</p>" +
                                                        "<p>Thanks</p>" +
                                                        "<p>Team NaamVidya</p>" +
                                                    "</td>" +
                                                    "<td width='30'><p style='margin-bottom: 10px;'></p</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><strong style='font-size: 11px;'>Terms and Conditions: </strong> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>These terms and conditions apply to NaamVidya Gift Cards ('Gift Cards') issued by Asterria Consulting Services Private Limited ('NaamVidya'). NaamVidya is a private limited company organized under the laws of India, and is the issuer of Gift Cards. By purchasing or using a Gift Card, you are agreeing to and accept these terms and conditions.</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                                 "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'>1. Redemption. </b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>Gift Cards may only be redeemed toward the purchase of eligible service on www.naamvidya.com No fees or charges apply to Gift Cards. NaamVidya may provide Gift Card purchasers with information about the redemption status of Gift Cards that they purchase or use.</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'>2. Limitations. </b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>Gift Cards, including any unused Gift Card, expire one year from the date of issuance. Gift Cards cannot be resold, transferred for value or redeemed for cash. Unused Gift Card associated with an NaamVidya account may not be transferred to another NaamVidya account. No interest will be payable by NaamVidya on any Gift Card. NaamVidya makes no representation or warranty that www.naamvidya will always be accessible without interruption.</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                                 "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'>3. Fraud. </b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>NaamVidya is not responsible if a Gift Card is lost, stolen, destroyed or used without permission. NaamVidya will have the right to close customer accounts and take payment from alternative forms of payment if a fraudulently obtained Gift Card is redeemed and/or used to make purchases on www.naamvidya.com</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                                 "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'>4. Governing Law and Jurisdiction. </b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>These terms and conditions are governed by and construed in accordance with the laws of India. You and NaamVidya each agree to submit to the exclusive jurisdiction of the courts at Mumbai. You agree to indemnify NaamVidya for all claims brought by a third party against it or its affiliates arising out of or in connection with a breach of any of these terms and conditions.</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                                   "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'>5. Limitation of Liability. </b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>NEITHER NAAMVIDYA OR ITS PARTNERS MAKE ANY WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO GIFT CARDS, INCLUDING WITHOUT LIMITATION, ANY EXPRESS OR IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. IN THE EVENT A GIFT CARD IS NON-FUNCTIONAL, YOUR SOLE REMEDY WILL BE THE REPLACEMENT OF SUCH GIFT CARD. IF APPLICABLE LAW DOES NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                                   "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'>6. General Terms. </b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>The NaamVidya.com Terms & Conditions & Privacy Policy apply to Gift Cards. NaamVidya reserves the right to change these Gift Card terms and conditions from time to time in its discretion and without prior notice to you. All terms and conditions are applicable to the extent permitted by law.</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                                 "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'>7. NaamVidya Contact Information. </b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>Customer Service contact number: +91 82919 19698</p>" +
                                                        "<p style='color:grey;font-size: 11px;'>email: orders@naamvidya.com</p>" +
                                                        "<p style='color:grey;font-size: 11px;'>website: www.naamvidya.com</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +


                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'>8. Erroneous Email </b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;'>In case you believe you have received this gift-card by mistake or you are not the correct recipient of this email, or wish to unsubscribe , please send your request for correction to orders@naamvidya.com</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                      "<p style=''><b style='font-size: 11px;'></b> </p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +
                                                  "<tr>" +
                                                    "<td width='30'></td>" +
                                                    "<td style='font-size: 14px;line-height: 25px;'>" +
                                                        "<p style='color:grey;font-size: 11px;text-align:left'></p>" +
                                                        "<p style='color:grey;font-size: 11px;text-align:right'>Order Number: " + OrderId + "</p>" +
                                                    "</td>" +
                                                    "<td width='30'></td>" +
                                                "</tr>" +

                                            "</table>" +
                                        "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                        "<td>" +
                                            "<table style='float: left' width='640' cellpadding='0' cellspacing='0' border='0' bgcolor=''>" +
                                                "<tr>" +
                                                    "<td width='93'><img border='0' src='https://www.naamvidya.com/images/footer_decoration_1.png' style='display:block; float: left;' /></td>" +
                                                    "<td style='font-size: 12px;'>" +
                                                        "<p style='font-size: 12px; text-align: center; color:#555; margin: 0; padding: 0;'></p>" +
                                                    "</td>" +
                                                "</tr>" +
                                            "</table>" +
                                            "<table style='float: left' width='640' cellpadding='0' cellspacing='0' border='0' bgcolor='#E7E9EC'>" +
                                                "<tr>" +
                                                    "<td width='193'><img border='0' src='https://www.naamvidya.com/images/footer_decoration.png' style='display:block;float: left;'/></td>" +
                                                    "<td align='right'>" +
                                                        "<a href='https://www.facebook.com/naamvidya/' border='0'><img src='https://www.naamvidya.com/images/gfb.png' border='0'/></a>" +
                                                        "<a href='https://www.instagram.com/naamvidya/' border='0'><img src='https://www.naamvidya.com/images/insta.png' border='0'/></a>" +
                                                        "<a href='https://plus.google.com/115484702926110129373' border='0'><img src='https://www.naamvidya.com/images/gp.png' border='0'/></a>" +
                                                        "<a href='https://www.naamvidya.com/blog' border='0'><img src='https://www.naamvidya.com/images/gblogger.png' border='0'/></a>" +
                                                        "<img src='https://www.naamvidya.com/images/spacer.png' border='0' width='20' />" +
                                                    "</td>" +
                                                "</tr>" +
                                            "</table>" +
                                        "</td>" +
                                    "</tr>" +
                                "</table>" +
                            "</td>" +
                        "</tr>" +
                    "</table>" +
                "</body>" +
                "</html>";



               
                //anil.nandalike@naamvidya.com
                //NVEmailService.SendMail(Convert.ToString(Session["EmailId"]), Convert.ToString(Session["FirstName"]), "Order Confirmation", body);
                //Boolean result = NVEmailService.SendMail(Convert.ToString(Session["EmailId"]), Convert.ToString(Session["FirstName"]), "Order Confirmation", body);
                NVEmailService.SendMail(EmailId, FirstName, "Congratulations! You have received a NaamVidya Voucher", body);
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
            }
            finally
            {
            }
        }
        public ActionResult CheckoutOrder(NaamvidyaDetailModel NaamvidyaModel)
        {
            String Voucher = "";
            string Country_flag = "I", MycartDatainJsonStr = "";
            DataTable dt = new DataTable();
            //TEMP_GUID = "", REGN_GUID = "", ProductId= "", FirstName= "", LastName= "", Date_Of_Birth, Gender, MobileNo, CartId, ProductInfo, Price, CGST, SGST, IGST, TotalAmt;
            try
            {
                //string Country_flag = NaamvidyaModel.Country_flag;
                Country_flag = NaamvidyaModel.getCountry_flag();

                if (Session["REGN_GUID"] == null)
                {
                    //return View("Login", "Login");
                    return Redirect("/login");
                }
                else
                {
                    using (DAL db = new DAL())
                    {
                        try
                        {
                            SqlCommand cmd1 = new SqlCommand();
                            //DataSet ds = db.ReturnDataset(cmd1);
                            NaamvidyaModel.REGN_GUID = Convert.ToString(Session["REGN_GUID"]);
                            // NaamvidyaModel.Email_Id = Convert.ToString(Session["EmailId"]);
                            NaamvidyaModel.FirstName = Convert.ToString(Session["FirstName"]);
                            //Voucher = Convert.ToString(Session["Voucher"]);

                            if (NaamvidyaModel.TEMP_GUID == null)
                            {
                                NaamvidyaModel.TEMP_GUID = "";
                            }
                            if (NaamvidyaModel.Voucher == null)
                            {
                                NaamvidyaModel.Voucher = "0";
                            }
                            if (NaamvidyaModel.Voucher == null)
                            {
                                NaamvidyaModel.Voucher = "0";
                            }
                            cmd1.CommandType = System.Data.CommandType.StoredProcedure;
                            cmd1.CommandText = "NV_SP_GetMyCartDetail";
                            cmd1.Parameters.AddWithValue("@TEMP_GUID", NaamvidyaModel.TEMP_GUID);
                            cmd1.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                            cmd1.Parameters.AddWithValue("@Coupon_code", NaamvidyaModel.Voucher);
                            cmd1.Parameters.AddWithValue("@Country_flag", NaamvidyaModel.Country_flag);

                            dt = db.ReturnDataTable(cmd1);
                            MycartDatainJsonStr = db.ConvertTableToJson(dt);

                            foreach (DataRow dr in dt.Rows)
                            {
                                NaamvidyaModel.PayUMoney_Amt = Convert.ToDecimal(dr["FinalAmout"]);
                                NaamvidyaModel.PayPal_Amt = Convert.ToDecimal(dr["DFianlAmout"]);
                            }
                        }
                        catch (Exception ex)
                        {
                            Nlogger.nLoggerMsg(ex);
                        }
                        finally
                        {
                            db.Dispose();
                        }
                    }

                    string sHashCode = string.Empty;
                    string sTxnId = string.Empty;
                    sTxnId = GenerateTxnNo();

                    string firstName = NaamvidyaModel.FirstName;
                    string amount = NaamvidyaModel.PayUMoney_Amt.ToString();
                    string productInfo = "NaamVidya"; //(NaamvidyaModel.ProductId.ToString());
                    string email = NaamvidyaModel.Email_Id;
                    string phone = NaamvidyaModel.MobileNo;

                    //Merchant Key: oGlQyoew
                    //Merchant Salt: tMB9AfHJXi
                    //Merchant ID: 5830347

                    string udf1 = NaamvidyaModel.REGN_GUID;
                    //---- Extra added saving parameter
                    string middleName = NaamvidyaModel.MiddleName;
                    string lastName = NaamvidyaModel.LastName;
                    string price = Convert.ToString(NaamvidyaModel.Price);
                    string gender = Convert.ToString(NaamvidyaModel.Gender);
                    string dob = Convert.ToString(NaamvidyaModel.Date_Of_Birth);
                    string voucher = Convert.ToString(NaamvidyaModel.Voucher);
                    string discount = Convert.ToString(NaamvidyaModel.Discount);

                    if (NaamvidyaModel.State == null)
                    {
                        NaamvidyaModel.State = "0";
                    }
                    if (NaamvidyaModel.BillAddress2 == null)
                    {
                        NaamvidyaModel.BillAddress2 = "";
                    }
                    if (NaamvidyaModel.BillAddress3 == null)
                    {
                        NaamvidyaModel.BillAddress3 = "";
                    }
                    //------- 
                    string udf2 = Convert.ToString(NaamvidyaModel.BillTo) + '|' + Convert.ToString(NaamvidyaModel.Email_Id) + '|'
                            + Convert.ToString(NaamvidyaModel.BillAddress1) + '|' + Convert.ToString(NaamvidyaModel.Country) + '|' +
                            Convert.ToString(NaamvidyaModel.State) + '|' + Convert.ToString(NaamvidyaModel.BillAddress2)
                            + '|' + Convert.ToString(NaamvidyaModel.BillAddress3) + '|' + Convert.ToString(NaamvidyaModel.Voucher);
                    //---- End Extra added saving parameter
                    //string udf2 = Convert.ToString(NaamvidyaModel.ProductId);//middleName;

                    string udf3 = NaamvidyaModel.Email_Id; //lastName;
                    string udf4 = NaamvidyaModel.FirstName; //price;
                    string udf5 = gender;
                    string udf6 = dob;
                    string udf7 = voucher;
                    string udf8 = discount;

                    Session["ClientsEmailId"] = NaamvidyaModel.ClientsEmailId;
                    Session["PayumoneyTranId"] = NaamvidyaModel.PayumoneyTranId;

                    if (Convert.ToString(NaamvidyaModel.ClientsEmailId) != "" && Convert.ToString(Session["UserFlag"]) == "1")
                    {
                        string udf2forAdmin = Convert.ToString(NaamvidyaModel.BillTo) + '|' + Convert.ToString(NaamvidyaModel.ClientsEmailId) + '|'
                            + Convert.ToString(NaamvidyaModel.BillAddress1) + '|' + Convert.ToString(NaamvidyaModel.Country) + '|' +
                            Convert.ToString(NaamvidyaModel.State) + '|' + Convert.ToString(NaamvidyaModel.BillAddress2)
                            + '|' + Convert.ToString(NaamvidyaModel.BillAddress3) + '|' + Convert.ToString(NaamvidyaModel.Voucher);
                    

                        NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
                        RoutesController objRoutes = new RoutesController();
                        TransactionSuccessModel objTran = new TransactionSuccessModel();
                        if (NaamvidyaModel.PayumoneyTranId == "" || NaamvidyaModel.PayumoneyTranId == null)
                        {
                            obj.PStatus = true;
                            obj.PayumoneyTranId = "Unpaid";
                            NaamvidyaModel.PayumoneyTranId = "Unpaid";
                            Session["PayumoneyTranId"] = "Unpaid";
                        }
                        else
                        {
                            obj.PStatus = false;
                        }
                        obj.PayUMoney_Id = NaamvidyaModel.PayumoneyTranId;
                        obj.REGN_GUID = NaamvidyaModel.REGN_GUID;
                        obj.BillAddress1 = Convert.ToString(udf2forAdmin);
                        obj.txnid = sTxnId;
                        obj.userflag = Convert.ToString(Session["UserFlag"]);
                        obj.ClientsEmailId = NaamvidyaModel.ClientsEmailId;
                        objTran = objRoutes.SaveCartDetail(obj);
                        ViewBag.TrasactionId = objTran.Trans_Id;
                        Session["Trans_Id"] = objTran.Trans_Id;
                        return RedirectToAction("Success");
                    }
                    else
                    {
                        if (Country_flag == "O")//paypal
                        {
                            string custom = Convert.ToString(NaamvidyaModel.BillTo) +
                                        '|' + Convert.ToString(NaamvidyaModel.Email_Id) +
                                        '|' + Convert.ToString(NaamvidyaModel.BillAddress1) +
                                        '|' + Convert.ToString(NaamvidyaModel.Country) +
                                        '|' + Convert.ToString(NaamvidyaModel.State) +
                                        '|' + Convert.ToString(NaamvidyaModel.BillAddress2) +
                                        '|' + Convert.ToString(NaamvidyaModel.BillAddress3) +
                                        '|' + Convert.ToString(NaamvidyaModel.Voucher);

                            RequestToPaypal(dt, custom, sTxnId);
                        }
                        else if (Country_flag == "I")//payU money
                        {
                            PayUMoneyURLModel objUrl = new PayUMoneyURLModel();

                            objUrl = GetPayUMoneyUrl();

                            string salt = "tMB9AfHJXi";
                            string key = "oGlQyoew";

                            RemotePost myremotepost = new RemotePost();
                            myremotepost.Url = "https://secure.payu.in/_payment";

                            myremotepost.Add("key", key);
                            myremotepost.Add("txnid", sTxnId);
                            myremotepost.Add("amount", amount);
                            myremotepost.Add("productinfo", productInfo);
                            myremotepost.Add("firstname", firstName);
                            myremotepost.Add("phone", phone);
                            myremotepost.Add("email", email);
                            myremotepost.Add("surl", objUrl.surl);
                            myremotepost.Add("furl", objUrl.furl);
                            myremotepost.Add("udf1", udf1);
                            myremotepost.Add("service_provider", "payu_paisa");
                            myremotepost.Add("udf2", udf2);
                            myremotepost.Add("udf3", udf3);
                            myremotepost.Add("udf4", udf4);
                            myremotepost.Add("udf5", udf5);
                            myremotepost.Add("udf6", udf6);
                            myremotepost.Add("udf7", udf7);
                            myremotepost.Add("udf8", udf8);

                            string hashString = key + "|" + sTxnId + "|" + amount + "|" + productInfo + "|" + firstName + "|" + email + "|" + udf1 + "|" + udf2 + "|" + udf3 + "|" + udf4 + "|" + udf5 + "|" + udf6 + "|" + udf7 + "|" + udf8 + "|||" + salt;
                            string hash = Generatehash512(hashString);
                            myremotepost.Add("hash", hash);

                            myremotepost.Post();



                            /* To skip Payment for testing Start

                  NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
                  RoutesController objRoutes = new RoutesController();
                  TransactionSuccessModel objTran = new TransactionSuccessModel();
                  //obj = (NaamvidyaDetailModel)Session["NaamVidyaModel"];
                  Random ran = new Random();

                  obj.PayUMoney_Id = Convert.ToString(ran.Next(10000, 99999));

                  obj.REGN_GUID = udf1;
                  obj.BillAddress1 = Convert.ToString(udf2);
                  obj.FirstName = Convert.ToString(udf4);
                  obj.Email_Id = Convert.ToString(udf3);
                  obj.txnid = Convert.ToString(sTxnId);
                  Session["EmailId"] = udf3; ;
                  Session["FirstName"] = udf4;
                  Session["REGN_GUID"] = udf1;
                  //obj.Price = Convert.ToDecimal(form["udf4"]);
                  //obj.Gender = form["udf5"];
                  //obj.Date_Of_Birth = form["udf6"];
                  //obj.Voucher = form["udf7"];
                  //obj.Discount = Convert.ToDecimal(form["udf8"]);

                  ViewBag.PaymentId = obj.PayUMoney_Id;
                  objTran = objRoutes.SaveDetail(obj);
                  objTran = objRoutes.SaveCartDetail(obj);
                  ViewBag.TrasactionId = objTran.Trans_Id;

                            //To skip Payment for testing End 
                            */
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
            }
            finally
            {

            }
            return View();

        }

        [HttpPost]
        public JObject validateClientId(NaamvidyaDetailModel NaamvidyaModel)
        {
            string v_data = "[]";
            Boolean flag = false;
            JObject json = new JObject();
            using (DAL db = new DAL())
            {
                try
                {
                    if (NaamvidyaModel.REGN_GUID == null)
                    {
                        NaamvidyaModel.REGN_GUID = "";
                    }
                    if (NaamvidyaModel.ClientsEmailId == null)
                    {
                        NaamvidyaModel.ClientsEmailId = "";
                    }
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_ValidateClientId";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@Clients_EmailId", NaamvidyaModel.ClientsEmailId);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        v_data = Convert.ToString(ds.Tables[0].Rows[0]["msg"]);
                        flag = Convert.ToBoolean(ds.Tables[0].Rows[0]["flag"]);
                    }

                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"msg\":\"" + v_data + "\",\"flag\":\"" + flag + "\"}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }

        [HttpPost]
        public JObject checkRefId(NaamvidyaDetailModel NaamvidyaModel)
        {
            string v_data = "[]";
            Boolean flag = false;
            JObject json = new JObject();
            using (DAL db = new DAL())
            {
                try
                {
                    if (NaamvidyaModel.REGN_GUID == null)
                    {
                        NaamvidyaModel.REGN_GUID = "";
                    }
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_CheckRefId";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@RefId", NaamvidyaModel.PayumoneyTranId);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds.Tables[0].Rows.Count > 0)
                    {
                        v_data = Convert.ToString(ds.Tables[0].Rows[0]["msg"]);
                        flag = Convert.ToBoolean(ds.Tables[0].Rows[0]["flag"]);
                    }

                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"msg\":\"" + v_data + "\",\"flag\":\"" + flag + "\"}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        public TransactionSuccessModel SaveFailCartDetail(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                TransactionSuccessModel objTran = new TransactionSuccessModel();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_FailSaveCheckOutCartDetail";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@PayuMoneyId", NaamvidyaModel.PayUMoney_Id);
                    cmd.Parameters.AddWithValue("@txnid", NaamvidyaModel.txnid);
                    DataSet ds = db.ReturnDataset(cmd);
                    List<Saveorderdetail> Saveorderdetail = new List<Saveorderdetail>();
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        Saveorderdetail data = new Saveorderdetail();
                        //OrderId
                        //PayumoneyId
                        objTran.Trans_Id = Convert.ToString(item["PayuMoneyId"]);
                        data.OrderNo = Convert.ToString(item["PayuMoneyId"]);
                        //data.Orderstatus = Convert.ToString(item["OrderStatus"]);
                        //= Convert.ToString(item["ProductId"]);
                        //data.productname = Convert.ToString(item["ProductName"]);
                        //data.price = Convert.ToDecimal(item["Price"]);
                        //data.finalprice = Convert.ToDecimal(item["FinalPrice"]);
                        //data.name = Convert.ToString(item["FirstName"]);
                        //data.emailid = Convert.ToString(item["Email"]);
                        //orderdetail.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return objTran;
            }
        }
        [HttpPost]
        public JObject getOrderStepDetails(inputJsonData jsondata)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                string v_data1 = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "getOrderDetails";
                    cmd.Parameters.AddWithValue("@Json_Data", jsondata.data);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = true;
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["data"]);
                            v_data1 = Convert.ToString(ds.Tables[0].Rows[0]["stepdetail"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\",\"stepdetail\":" + v_data1 + "}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        [HttpPost]
        public JObject GetMyDiscount(inputJsonData jsondata)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                string v_data1 = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetMyDiscount";
                    cmd.Parameters.AddWithValue("@Json_Data", jsondata.data);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = true;
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["data"]);
                            v_data1 = Convert.ToString(ds.Tables[0].Rows[0]["stepdetail"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\",\"stepdetail\":" + v_data1 + "}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        [HttpPost]
        public JObject getOrderDetailsforAdmin(inputJsonData jsondata)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                string v_data1 = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "getOrderDetailsforAdmin";
                    cmd.Parameters.AddWithValue("@Json_Data", jsondata.data);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = true;
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["data"]);
                            v_data1 = Convert.ToString(ds.Tables[0].Rows[0]["stepdetail"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\",\"stepdetail\":" + v_data1 + "}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        [HttpPost]
        public JObject getOrderDetailsbyOrderId(inputJsonData jsondata)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_getOrderbyOrderId";
                    cmd.Parameters.AddWithValue("@Json_Data", jsondata.data);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = true;
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["data"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\"}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        [HttpPost]
        public JObject getNewPendingOrderforAdmin(inputJsonData jsondata)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_getNewPendingOrderforAdmin";
                    cmd.Parameters.AddWithValue("@Json_Data", jsondata.data);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = true;
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["data"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\"}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        [HttpPost]
        public JObject SaveSelectedNamebyAdmin(inputJsonData jsondata)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_SaveSelectedNamebyAdmin";
                    cmd.Parameters.AddWithValue("@Json_Data", jsondata.data);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = true;
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["data"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\"}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        [HttpPost]
        public JObject Single_CHECKNAME(inputJsonData jsondata)
        {
            using (DAL db = new DAL())
            {
                JObject Data = JObject.Parse(jsondata.data);
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NUM_SP_CHECKNAME";
                    cmd.Parameters.AddWithValue("@FName", Convert.ToString(Data.GetValue("FName")));
                    cmd.Parameters.AddWithValue("@MName", Convert.ToString(Data.GetValue("MName")));
                    cmd.Parameters.AddWithValue("@LName", Convert.ToString(Data.GetValue("LName")));
                    cmd.Parameters.AddWithValue("@DOB", Convert.ToString(Data.GetValue("DOB")));
                    cmd.Parameters.AddWithValue("@Gender", Convert.ToString(Data.GetValue("Gender")));
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = true;
                            v_data = db.ConvertTableToJson(ds.Tables[0]);
                            // v_data = Convert.ToString(ds.Tables[0].Rows[0]["data"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\"}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        [HttpPost]
        public JObject CompleteOrderDetails(inputJsonData jsondata)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "CompleteOrderDetails";
                    cmd.Parameters.AddWithValue("@Json_Data", jsondata.data);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            //flag = true;
                            flag = Convert.ToBoolean(ds.Tables[0].Rows[0]["flag"]);
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["data"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\"}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        //--------------- Huzaifa Retiwala ---------------
        [HttpPost]
        public ActionResult getCriteria()
        {
            using (DAL db = new DAL())
            {
                List<Criteria> Criteria = new List<Criteria>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetCriteria";
                    DataSet ds = db.ReturnDataset(cmd);
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        Criteria data = new Criteria();
                        data.Criteria_ID = Convert.ToInt16(item["Criteria_ID"]);
                        data.Criteria_Name = Convert.ToString(item["Criteria_Name"]);
                        data.rowno = Convert.ToInt16(item["rowno"]);
                        data.Checked = Convert.ToBoolean(item["Checked"]);
                        Criteria.Add(data);
                    }
                    RenderViewToString("about", "");
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(Criteria);
            }
        }
        [HttpPost]
        public ActionResult getProduct()
        {
            using (DAL db = new DAL())
            {
                List<Product> Product = new List<Product>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetProduct";
                    DataSet ds = db.ReturnDataset(cmd);
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        Product data = new Product();
                        data.ProductId = Convert.ToString(item["ProductId"]);
                        data.ProductName = Convert.ToString(item["ProductName"]);
                        Product.Add(data);
                    }
                    RenderViewToString("about", "");
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(Product);
            }
        }
        //public ActionResult SaveOrderDetail(NaamvidyaDetailModel NaamvidyaModel)
        //{
        //    TransactionSuccessModel objTran = new TransactionSuccessModel();
        //    DAL db = new DAL();
        //    Int32 productid = Convert.ToInt32(NaamvidyaModel.ProductId);
        //    NaamvidyaModel.REGN_GUID = Session["REGN_GUID"].ToString(); //"C82D6EB00092454C8F2B8B217745EFFD";
        //    //NaamvidyaModel.FirstName = "Hasti"; //Session["FirstName"].ToString();
        //    NaamvidyaModel.Email_Id = Session["EmailId"].ToString(); //"huzaifa.retiwala@comflextech.com";
        //    SqlCommand cmd1 = new SqlCommand();
        //    cmd1.CommandType = System.Data.CommandType.StoredProcedure;
        //    cmd1.CommandText = "NV_SP_GetOrderDetail";
        //    cmd1.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
        //    cmd1.Parameters.AddWithValue("@ProductId", productid);
        //    cmd1.Parameters.AddWithValue("@Voucher", "");
        //    //cmd.Parameters.AddWithValue("@MName", userdetail.middleName);
        //    //cmd.Parameters.AddWithValue("@LName", userdetail.lastName);
        //    //cmd.Parameters.AddWithValue("@DOB", userdetail.dob);
        //    //cmd.Parameters.AddWithValue("@Gender", userdetail.gender);
        //    DataSet ds1 = db.ReturnDataset(cmd1);
        //    List<orderdetail> orderdetail = new List<orderdetail>();
        //    foreach (DataRow item in ds1.Tables[0].Rows)
        //    {
        //        orderdetail data = new orderdetail();
        //        //NaamvidyaModel.ProductId = Convert.ToString(item["ProductId"]);
        //        NaamvidyaModel.ProductInfo = Convert.ToString(item["ProductName"]);
        //        NaamvidyaModel.Price = Convert.ToDecimal(item["Price"]);
        //        NaamvidyaModel.CGST = Convert.ToDecimal(item["cgst"]);
        //        NaamvidyaModel.SGST = Convert.ToDecimal(item["sgst"]);
        //        NaamvidyaModel.PayUMoney_Amt = Convert.ToDecimal(item["FinalPrice"]);
        //        orderdetail.Add(data);
        //    }
        //    if (NaamvidyaModel.FirstName == null)
        //    {
        //        NaamvidyaModel.FirstName = "";
        //    }
        //    if (NaamvidyaModel.MiddleName == null)
        //    {
        //        NaamvidyaModel.MiddleName = "";
        //    }
        //    if (NaamvidyaModel.MobileNo == null)
        //    {
        //        NaamvidyaModel.MobileNo = "";
        //    }
        //    if (NaamvidyaModel.Voucher == null)
        //    {
        //        NaamvidyaModel.Voucher = "";
        //    }
        //    if (NaamvidyaModel.Discount == null)
        //    {
        //        NaamvidyaModel.Discount = 0;
        //    }
        //    if (NaamvidyaModel.Name1 == null)
        //    {
        //        NaamvidyaModel.Name1 = "";
        //    }
        //    if (NaamvidyaModel.Name2 == null)
        //    {
        //        NaamvidyaModel.Name2 = "";
        //    }
        //    if (NaamvidyaModel.Name3 == null)
        //    {
        //        NaamvidyaModel.Name3 = "";
        //    }
        //    if (NaamvidyaModel.Name4 == null)
        //    {
        //        NaamvidyaModel.Name4 = "";
        //    }
        //    if (NaamvidyaModel.Name5 == null)
        //    {
        //        NaamvidyaModel.Name5 = "";
        //    }
        //    if (NaamvidyaModel.namespell == null)
        //    {
        //        NaamvidyaModel.namespell = false;
        //    }
        //    if (NaamvidyaModel.lastnamespell == null)
        //    {
        //        NaamvidyaModel.lastnamespell = false;
        //    }
        //    if (NaamvidyaModel.Alphabets == null)
        //    {
        //        NaamvidyaModel.Alphabets = "";
        //    }
        //    if (NaamvidyaModel.MotherName == null)
        //    {
        //        NaamvidyaModel.MotherName = "";
        //    }
        //    if (NaamvidyaModel.FatherName == null)
        //    {
        //        NaamvidyaModel.FatherName = "";
        //    }
        //    if (NaamvidyaModel.Sibling1 == null)
        //    {
        //        NaamvidyaModel.Sibling1 = "";
        //    }
        //    if (NaamvidyaModel.Sibling2 == null)
        //    {
        //        NaamvidyaModel.Sibling2 = "";
        //    }
        //    if (NaamvidyaModel.Sibling3 == null)
        //    {
        //        NaamvidyaModel.Sibling3 = "";
        //    }
        //    if (NaamvidyaModel.maxlength == null)
        //    {
        //        NaamvidyaModel.maxlength = "";
        //    }
        //    SqlCommand cmd = new SqlCommand();
        //    cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //    cmd.CommandText = "NV_SP_SaveOrderDetailTemp";
        //    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
        //    cmd.Parameters.AddWithValue("@MobileNo", NaamvidyaModel.MobileNo);
        //    cmd.Parameters.AddWithValue("@ProductId", NaamvidyaModel.ProductId);
        //    cmd.Parameters.AddWithValue("@Price", NaamvidyaModel.Price);
        //    cmd.Parameters.AddWithValue("@Voucher", NaamvidyaModel.Voucher);
        //    cmd.Parameters.AddWithValue("@Discount", NaamvidyaModel.Discount);
        //    cmd.Parameters.AddWithValue("@FinalPrice", NaamvidyaModel.PayUMoney_Amt);
        //    //cmd.Parameters.AddWithValue("@FirstName", NaamvidyaModel.FirstName);
        //    cmd.Parameters.AddWithValue("@MiddleName", NaamvidyaModel.MiddleName);
        //    cmd.Parameters.AddWithValue("@LastName", NaamvidyaModel.LastName);
        //    cmd.Parameters.AddWithValue("@DOB", NaamvidyaModel.Date_Of_Birth);
        //    cmd.Parameters.AddWithValue("@Gender", NaamvidyaModel.Gender);
        //    cmd.Parameters.AddWithValue("@Name1", NaamvidyaModel.Name1);
        //    cmd.Parameters.AddWithValue("@Name2", NaamvidyaModel.Name2);
        //    cmd.Parameters.AddWithValue("@Name3", NaamvidyaModel.Name3);
        //    cmd.Parameters.AddWithValue("@Name4", NaamvidyaModel.Name4);
        //    cmd.Parameters.AddWithValue("@Name5", NaamvidyaModel.Name5);
        //    cmd.Parameters.AddWithValue("@namespell", NaamvidyaModel.namespell);
        //    cmd.Parameters.AddWithValue("@lastnamespell", NaamvidyaModel.lastnamespell);
        //    cmd.Parameters.AddWithValue("@Alphabets", NaamvidyaModel.Alphabets);
        //    cmd.Parameters.AddWithValue("@MotherName", NaamvidyaModel.MotherName);
        //    cmd.Parameters.AddWithValue("@FatherName", NaamvidyaModel.FatherName);
        //    cmd.Parameters.AddWithValue("@Sibling1", NaamvidyaModel.Sibling1);
        //    cmd.Parameters.AddWithValue("@Sibling2", NaamvidyaModel.Sibling2);
        //    cmd.Parameters.AddWithValue("@Sibling3", NaamvidyaModel.Sibling3);
        //    cmd.Parameters.AddWithValue("@maxlength", NaamvidyaModel.maxlength);
        //    cmd.Parameters.AddWithValue("@CGSTAmt", NaamvidyaModel.CGST);
        //    cmd.Parameters.AddWithValue("@SGSTAmt", NaamvidyaModel.SGST);
        //    cmd.Parameters.AddWithValue("@ProductPrice", NaamvidyaModel.Price);
        //    cmd.Parameters.AddWithValue("@FirstName", NaamvidyaModel.FirstName);
        //    //cmd.Parameters.AddWithValue("@PayumoneyTranId", obj.PayUMoney_Id);
        //    DataSet ds = db.ReturnDataset(cmd);
        //    //List<Saveorderdetail> Saveorderdetail = new List<Saveorderdetail>();
        //    //foreach (DataRow item in ds.Tables[0].Rows)
        //    //{
        //    //    Saveorderdetail data = new Saveorderdetail();
        //    //    //OrderId
        //    //    //PayumoneyId
        //    //    data.OrderNo = Convert.ToString(item["OrderNo"]);
        //    //    data.Orderstatus = Convert.ToString(item["OrderStatus"]);
        //    //        //= Convert.ToString(item["ProductId"]);
        //    //    //data.productname = Convert.ToString(item["ProductName"]);
        //    //    //data.price = Convert.ToDecimal(item["Price"]);
        //    //    //data.finalprice = Convert.ToDecimal(item["FinalPrice"]);
        //    //    //data.name = Convert.ToString(item["FirstName"]);
        //    //    //data.emailid = Convert.ToString(item["Email"]);
        //    //    //orderdetail.Add(data);
        //    //}
        //    string sHashCode = string.Empty;
        //    string sTxnId = string.Empty;
        //    sTxnId = GenerateTxnNo();
        //    string firstName = NaamvidyaModel.FirstName;
        //    string amount = NaamvidyaModel.PayUMoney_Amt.ToString();
        //    string productInfo = (NaamvidyaModel.ProductId.ToString());
        //    string email = NaamvidyaModel.Email_Id;
        //    string phone = NaamvidyaModel.MobileNo;
        //    string sTragModel = string.Empty;
        //    NaamvidyaDetailModel NaamvidyaModel1 = new NaamvidyaDetailModel();
        //    NaamvidyaModel1 = NaamvidyaModel;
        //    Session["NaamVidyaModel"] = NaamvidyaModel1;
        //    //            Merchant Key: oGlQyoew
        //    //Merchant Salt: tMB9AfHJXi
        //    //Merchant ID: 5830347
        //    PayUMoneyURLModel objUrl = new PayUMoneyURLModel();
        //    objUrl = GetPayUMoneyUrl();
        //    string salt = "tMB9AfHJXi";
        //    string key = "oGlQyoew";
        //    string udf1 = NaamvidyaModel.REGN_GUID;
        //    //---- Extra added saving parameter
        //    string middleName = NaamvidyaModel.MiddleName;
        //    string lastName = NaamvidyaModel.LastName;
        //    string price = Convert.ToString(NaamvidyaModel.Price);
        //    string gender = Convert.ToString(NaamvidyaModel.Gender);
        //    string dob = Convert.ToString(NaamvidyaModel.Date_Of_Birth);
        //    string voucher = Convert.ToString(NaamvidyaModel.Voucher);
        //    string discount = Convert.ToString(NaamvidyaModel.Discount);
        //    //---- End Extra added saving parameter
        //    string udf2 = Convert.ToString(NaamvidyaModel.ProductId); //middleName;
        //    string udf3 = NaamvidyaModel.Email_Id; //lastName;
        //    string udf4 = NaamvidyaModel.FirstName; //price;
        //    string udf5 = gender;
        //    string udf6 = dob;
        //    string udf7 = voucher;
        //    string udf8 = discount;
        //    RemotePost myremotepost = new RemotePost();
        //    myremotepost.Url = "https://secure.payu.in/_payment";
        //    myremotepost.Add("key", key);
        //    myremotepost.Add("txnid", sTxnId);
        //    myremotepost.Add("amount", amount);
        //    myremotepost.Add("productinfo", productInfo);
        //    myremotepost.Add("firstname", firstName);
        //    myremotepost.Add("phone", phone);
        //    myremotepost.Add("email", email);
        //    myremotepost.Add("surl", objUrl.surl);
        //    myremotepost.Add("furl", objUrl.furl);
        //    myremotepost.Add("udf1", udf1);
        //    myremotepost.Add("service_provider", "payu_paisa");
        //    myremotepost.Add("udf2", udf2);
        //    myremotepost.Add("udf3", udf3);
        //    myremotepost.Add("udf4", udf4);
        //    myremotepost.Add("udf5", udf5);
        //    myremotepost.Add("udf6", udf6);
        //    myremotepost.Add("udf7", udf7);
        //    myremotepost.Add("udf8", udf8);
        //    string hashString = key + "|" + sTxnId + "|" + amount + "|" + productInfo + "|" + firstName + "|" + email + "|" + udf1 + "|" + udf2 + "|" + udf3 + "|" + udf4 + "|" + udf5 + "|" + udf6 + "|" + udf7 + "|" + udf8 + "|||" + salt;
        //    string hash = Generatehash512(hashString);
        //    myremotepost.Add("hash", hash);
        //    myremotepost.Post();
        //    return View();
        //}
        public ActionResult AddToCart(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetail = new List<NaamvidyaDetailModel>();
                try
                {
                    if (NaamvidyaModel.TEMP_GUID == null || NaamvidyaModel.TEMP_GUID == "null")
                    {
                        NaamvidyaModel.TEMP_GUID = "";
                    }
                    if (NaamvidyaModel.REGN_GUID == null)
                    {
                        NaamvidyaModel.REGN_GUID = "";
                    }
                    if (NaamvidyaModel.FirstName == null)
                    {
                        NaamvidyaModel.FirstName = "";
                    }
                    if (NaamvidyaModel.MiddleName == null)
                    {
                        NaamvidyaModel.MiddleName = "";
                    }
                    if (NaamvidyaModel.LastName == null)
                    {
                        NaamvidyaModel.LastName = "";
                    }
                    if (NaamvidyaModel.Date_Of_Birth == null)
                    {
                        NaamvidyaModel.Date_Of_Birth = "";
                    }
                    if (NaamvidyaModel.To_EmailId == null)
                    {
                        NaamvidyaModel.To_EmailId = "";
                    }
                    if (NaamvidyaModel.Gender == null)
                    {
                        NaamvidyaModel.Gender = "";
                    }
                    if (NaamvidyaModel.MobileNo == null)
                    {
                        NaamvidyaModel.MobileNo = "";
                    }
                    if (NaamvidyaModel.To_Name == null)
                    {
                        NaamvidyaModel.To_Name = "";
                    }
                    if (NaamvidyaModel.Name1 == null)
                    {
                        NaamvidyaModel.Name1 = "";
                    }
                    if (NaamvidyaModel.Name2 == null)
                    {
                        NaamvidyaModel.Name2 = "";
                    }
                    if (NaamvidyaModel.Name3 == null)
                    {
                        NaamvidyaModel.Name3 = "";
                    }
                    if (NaamvidyaModel.Name4 == null)
                    {
                        NaamvidyaModel.Name4 = "";
                    }
                    if (NaamvidyaModel.Name5 == null)
                    {
                        NaamvidyaModel.Name5 = "";
                    }
                    if (NaamvidyaModel.Remarks == null)
                    {
                        NaamvidyaModel.Remarks = "";
                    }
                    if (NaamvidyaModel.Message == null)
                    {
                        NaamvidyaModel.Message = "";
                    }
                    if (NaamvidyaModel.track == null)
                    {
                        NaamvidyaModel.track = "";
                    }
                    if (NaamvidyaModel.App_Date == null)
                    {
                        NaamvidyaModel.App_Date = "";
                    }
                    if (NaamvidyaModel.App_Time == null)
                    {
                        NaamvidyaModel.App_Time = "";
                    }
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_AddToCart";
                    cmd.Parameters.AddWithValue("@TEMP_GUID", NaamvidyaModel.TEMP_GUID);
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@ProductId", NaamvidyaModel.ProductId);
                    cmd.Parameters.AddWithValue("@FirstName", NaamvidyaModel.FirstName);
                    cmd.Parameters.AddWithValue("@MiddleName", NaamvidyaModel.MiddleName);
                    cmd.Parameters.AddWithValue("@LastName", NaamvidyaModel.LastName);
                    cmd.Parameters.AddWithValue("@Name1", NaamvidyaModel.Name1);
                    cmd.Parameters.AddWithValue("@Name2", NaamvidyaModel.Name2);
                    cmd.Parameters.AddWithValue("@Name3", NaamvidyaModel.Name3);
                    cmd.Parameters.AddWithValue("@Name4", NaamvidyaModel.Name4);
                    cmd.Parameters.AddWithValue("@Name5", NaamvidyaModel.Name5);
                    cmd.Parameters.AddWithValue("@DOB", NaamvidyaModel.Date_Of_Birth);
                    cmd.Parameters.AddWithValue("@Gender", NaamvidyaModel.Gender);
                    cmd.Parameters.AddWithValue("@MobileNo", NaamvidyaModel.MobileNo);
                    cmd.Parameters.AddWithValue("@App_Date", NaamvidyaModel.App_Date);
                    cmd.Parameters.AddWithValue("@App_Time", NaamvidyaModel.App_Time);
                    cmd.Parameters.AddWithValue("@Remarks", NaamvidyaModel.Remarks);
                    cmd.Parameters.AddWithValue("@Message", NaamvidyaModel.Message);
                    cmd.Parameters.AddWithValue("@To_EmailId", NaamvidyaModel.To_EmailId);
                    cmd.Parameters.AddWithValue("@To_Name", NaamvidyaModel.To_Name);
                    cmd.Parameters.AddWithValue("@track", NaamvidyaModel.track);
                    DataSet ds = db.ReturnDataset(cmd);
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                        data.REGN_GUID = Convert.ToString(item["GUID"]);
                        data.flag = Convert.ToBoolean(item["flag"]);
                        NaamvidyaDetail.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetail);
            }
            //return Json(NaamVidya);
        }
         [HttpPost]
        public ActionResult getGiftLoginDetail(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetailModel = new List<NaamvidyaDetailModel>();
                Int64 iOrderId;
                try
                {
                    NaamvidyaModel.OrderId = Server.UrlDecode(NaamvidyaModel.OrderId).Trim();
                    NaamvidyaModel.OrderId = Decrypt(NaamvidyaModel.OrderId);
                    NaamvidyaModel.To_EmailId = Server.UrlDecode(NaamvidyaModel.To_EmailId).Trim();
                    NaamvidyaModel.To_EmailId = Decrypt(NaamvidyaModel.To_EmailId);
                    iOrderId = Convert.ToInt64(NaamvidyaModel.OrderId);

                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetGiftLoginDetail";
                    cmd.Parameters.AddWithValue("@OrderId", iOrderId);
                    cmd.Parameters.AddWithValue("@To_EmailId", NaamvidyaModel.To_EmailId);
                   
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                    
                        data.ProductId = Convert.ToInt32(dr["ProductId"]);
                        data.FirstName = Convert.ToString(dr["FirstName"]);
                        data.OrderId = Convert.ToString(dr["OrderId"]);
                        data.Message = Convert.ToString(dr["Message"]);
                        data.To_EmailId = Convert.ToString(dr["To_EmailId"]);
                        data.To_Name = Convert.ToString(dr["To_Name"]);
                        data.To_Name = Convert.ToString(dr["To_Name"]);
                        data.ProductName = Convert.ToString(dr["ProductName"]);


                        NaamvidyaDetailModel.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetailModel);
            }
        }
         [HttpPost]
        public ActionResult getMyCartDetail(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetailModel = new List<NaamvidyaDetailModel>();
                try
                {
                    if (NaamvidyaModel.TEMP_GUID == null)
                    {
                        NaamvidyaModel.TEMP_GUID = "";
                    }
                    if (NaamvidyaModel.REGN_GUID == null)
                    {
                        NaamvidyaModel.REGN_GUID = "";
                    }
                    if (NaamvidyaModel.Voucher == null)
                    {
                        NaamvidyaModel.Voucher = "0";
                    }
                    Session["Voucher"] = Convert.ToString(NaamvidyaModel.Voucher);
                    //string REGN_GUID = Session["REGN_GUID"].ToString();
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetMyCartDetail";
                    cmd.Parameters.AddWithValue("@TEMP_GUID", NaamvidyaModel.TEMP_GUID);
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@Coupon_code", NaamvidyaModel.Voucher);
                    cmd.Parameters.AddWithValue("@Country_flag", NaamvidyaModel.Country_flag);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                        data.TEMP_GUID = Convert.ToString(dr["TEMP_GUID"]);
                        data.REGN_GUID = Convert.ToString(dr["REGN_GUID"]);
                        data.ProductId = Convert.ToInt32(dr["ProductId"]);
                        data.FirstName = Convert.ToString(dr["FirstName"]);
                        data.MiddleName = Convert.ToString(dr["MiddleName"]);
                        data.LastName = Convert.ToString(dr["LastName"]);
                        data.Date_Of_Birth = Convert.ToString(dr["DOB"]);
                        data.Gender = Convert.ToString(dr["Gender"]);
                        data.MobileNo = Convert.ToString(dr["MobileNo"]);
                        data.CartId = Convert.ToInt32(dr["CartId"]);
                        data.ProductInfo = Convert.ToString(dr["ProductName"]);
                        data.ProductType = Convert.ToString(dr["ProductType"]);
                        data.Price = Convert.ToDecimal(dr["Price"]);
                        data.DollerPrice = Convert.ToDecimal(dr["DollerPrice"]);
                        data.CGST = Convert.ToDecimal(dr["CGSTAmout"]);
                        data.SGST = Convert.ToDecimal(dr["SGSTAmout"]);
                        data.IGST = Convert.ToDecimal(dr["IGSTAmout"]);
                        data.SubTotal = Convert.ToDecimal(dr["SubTotal"]);
                        data.TotalAmt = Convert.ToDecimal(dr["TotalAmount"]);
                        data.Discount = Convert.ToDecimal(dr["TotalDisct"]);
                        data.Voucher = Convert.ToString(dr["Coupon_code"]);
                        data.msg = Convert.ToString(dr["msg"]);
                        data.FinalAmt = Convert.ToDecimal(dr["FinalAmout"]);
                        data.ExpressDelivery = Convert.ToBoolean(dr["ExpressDelivery"]);
                        //data.ExpressDeliveryDate = Convert.ToString(dr["ExpressDeliveryDate"]);
                        data.DTotalAmt = Convert.ToDecimal(dr["DTotalPrice"]);
                        data.DFinalAmt = Convert.ToDecimal(dr["DFianlAmout"]);
                        NaamvidyaDetailModel.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetailModel);
            }
        }
        public ActionResult getdateOnLoad(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetailModel = new List<NaamvidyaDetailModel>();
                try
                {
                    //if (NaamvidyaModel.TEMP_GUID == null)
                    //{
                    //    NaamvidyaModel.TEMP_GUID = "";
                    //}
                    //if (NaamvidyaModel.REGN_GUID == null)
                    //{
                    //    NaamvidyaModel.REGN_GUID = "";
                    //}
                    //if (NaamvidyaModel.Voucher == null)
                    //{
                    //    NaamvidyaModel.Voucher = "0";
                    //}
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetExpressDeliveryDate";
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                        data.ExpressDeliveryDate = Convert.ToString(dr["ExpressDeliveryDate"]);
                        NaamvidyaDetailModel.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetailModel);
            }
        }
        public ActionResult expressDelivery(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetailModel = new List<NaamvidyaDetailModel>();
                try
                {
                    //if (NaamvidyaModel.TEMP_GUID == null)
                    //{
                    //    NaamvidyaModel.TEMP_GUID = "";
                    //}
                    //if (NaamvidyaModel.REGN_GUID == null)
                    //{
                    //    NaamvidyaModel.REGN_GUID = "";
                    //}
                    //if (NaamvidyaModel.Voucher == null)
                    //{
                    //    NaamvidyaModel.Voucher = "0";
                    //}
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetExpressDelivery";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@TEMP_GUID", NaamvidyaModel.TEMP_GUID);
                    cmd.Parameters.AddWithValue("@ProductId", NaamvidyaModel.ProductId);
                    cmd.Parameters.AddWithValue("@CartId", NaamvidyaModel.CartId);
                    cmd.Parameters.AddWithValue("@ExpressDelivery", NaamvidyaModel.ExpressDelivery);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                        data.ExpressDeliveryDate = Convert.ToString(dr["ExpressDeliveryDate"]);
                        NaamvidyaDetailModel.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetailModel);
            }
        }
        public ActionResult DeleteMyCart(NaamvidyaDetailModel NaamvidyaModel)
        {
            //string REGN_GUID = Session["REGN_GUID"].ToString();
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetailModel = new List<NaamvidyaDetailModel>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_DeleteCartDetail";
                    cmd.Parameters.AddWithValue("@CartId", NaamvidyaModel.CartId);
                    DataTable dt = db.ReturnDataTable(cmd);
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetailModel);
            }
        }
        public ActionResult CountMyCart(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<getCartCount> getCartCount = new List<getCartCount>();
                try
                {
                    if (NaamvidyaModel.TEMP_GUID == null)
                    {
                        NaamvidyaModel.TEMP_GUID = "";
                    }
                    if (NaamvidyaModel.REGN_GUID == null)
                    {
                        NaamvidyaModel.REGN_GUID = "";
                    }
                    //string REGN_GUID = Session["REGN_GUID"].ToString();
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetMyCartCount";
                    cmd.Parameters.AddWithValue("@TEMP_GUID", NaamvidyaModel.TEMP_GUID);
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        getCartCount data = new getCartCount();
                        data.CartCount = Convert.ToInt32(dr["CartCount"]);
                        getCartCount.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(getCartCount);
            }
        }
        public TransactionSuccessModel SaveFailureDetail(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                TransactionSuccessModel objTran = new TransactionSuccessModel();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    //
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_SaveOrderDetailFailure";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@ProductId", NaamvidyaModel.ProductId);
                    cmd.Parameters.AddWithValue("@payuMoneyId", NaamvidyaModel.PayUMoney_Id);
                    DataSet ds = db.ReturnDataset(cmd);
                    List<Saveorderdetail> Saveorderdetail = new List<Saveorderdetail>();
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        Saveorderdetail data = new Saveorderdetail();
                        //OrderId
                        //PayumoneyId
                        objTran.Trans_Id = Convert.ToString(item["OrderNo"]);
                        data.OrderNo = Convert.ToString(item["OrderNo"]);
                        data.Orderstatus = Convert.ToString(item["OrderStatus"]);
                        //= Convert.ToString(item["ProductId"]);
                        //data.productname = Convert.ToString(item["ProductName"]);
                        //data.price = Convert.ToDecimal(item["Price"]);
                        //data.finalprice = Convert.ToDecimal(item["FinalPrice"]);
                        //data.name = Convert.ToString(item["FirstName"]);
                        //data.emailid = Convert.ToString(item["Email"]);
                        //orderdetail.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return objTran;
            }
        }
        public ActionResult Failure(FormCollection form)
        {
            using (DAL db = new DAL())
            {
                try
                {
                    var apiContext = Configuration.GetAPIContext();
                    bool status = Convert.ToBoolean(Request.Params["cancel"]);
                    if (status)
                    {
                        string gl = Request.Params["guid"];
                        string[] guid = gl.Split(',');
                        var paymentId = Session[guid[0]] as string;
                        SqlCommand cmd = new SqlCommand();
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.CommandText = "NV_SP_FailSavePaypalCheckOutCartDetail";
                        cmd.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
                        //cmd.Parameters.AddWithValue("@PayuMoneyId", NaamvidyaModel.PayUMoney_Id);
                        cmd.Parameters.AddWithValue("@guid", guid[0]);
                        DataSet ds = db.ReturnDataset(cmd);
                    }
                    else
                    {
                        NaamvidyaDetailModel ObjNaam = new NaamvidyaDetailModel();
                        PayUMoneyViewModel Obj = new PayUMoneyViewModel();
                        //Obj.MemberId = Convert.ToInt64(Session["iMemberId"]);
                        TransactionSuccessModel objTran = new TransactionSuccessModel();
                        RoutesController objRoutes = new RoutesController();
                        ObjNaam.PayUMoney_Id = form["payuMoneyId"];
                        ObjNaam.REGN_GUID = form["udf1"];
                        //ObjNaam.ProductId = Convert.ToInt16(form["udf2"]);
                        ObjNaam.txnid = Convert.ToString(form["txnid"]);
                        Session["EmailId"] = form["udf3"]; ;
                        Session["FirstName"] = form["udf4"];
                        Session["REGN_GUID"] = form["udf1"];
                        objTran = objRoutes.SaveFailCartDetail(ObjNaam);
                        Obj.TransactionId = form["txnid"].ToString();
                        //////////// If we want to Check saving part using cancle transaction ///////////////////////
                        //NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
                        //RoutesController objRoutes = new RoutesController();
                        //TransactionSuccessModel objTran = new TransactionSuccessModel();
                        //obj = (NaamvidyaDetailModel)Session["NaamVidyaModel"];
                        //obj.PayUMoney_Id = form["payuMoneyId"];
                        //obj.REGN_GUID = form["udf1"];
                        //obj.BillAddress1 = Convert.ToString(form["udf2"]);
                        //obj.FirstName = Convert.ToString(form["udf4"]);
                        //obj.Email_Id = Convert.ToString(form["udf3"]);
                        //obj.txnid = Convert.ToString(form["txnid"]);
                        //Session["EmailId"] = form["udf3"]; ;
                        //Session["FirstName"] = form["udf4"];
                        //Session["REGN_GUID"] = form["udf1"];
                        //ViewBag.PaymentId = obj.PayUMoney_Id;
                        //objTran = objRoutes.SaveDetail(obj);
                        //objTran = objRoutes.SaveCartDetail(obj);
                        //ViewBag.TrasactionId = objTran.Trans_Id; 
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                }
            }
            return View();
        }
        public ActionResult Success(FormCollection form)
        {

            try
            {
                
                    if (Convert.ToString(Session["ClientsEmailId"]) != "" && Convert.ToString(Session["UserFlag"]) == "1")
                    {
                        ViewBag.PaymentId = Convert.ToString(Session["PayumoneyTranId"]);
                        ViewBag.TrasactionId = Convert.ToString(Session["Trans_Id"]);
                        Session.Remove("PayumoneyTranId");
                        Session.Remove("Trans_Id");
                    }
                    else
                    {
                        //testing
                        //String merchantKey = "#aMCSJAr!w2qiv_G";


                        //Live
                        String merchantKey = "xSpzo8zLv5E0xDkN";

                        SqlCommand cmd = new SqlCommand();
                        DataTable dt = new DataTable();
                        Dictionary<string, string> parameters = new Dictionary<string, string>();


                        string paytmChecksum = "";
                        string CartId = "";
                        string Amount = "";
                        string Currency = "";
                        string TxnNo = "";
                        string Bank_Txnid = "";
                        string Txn_Date = "";
                        string Bank_Name = "";
                        string ResCode = "";
                        string ResMsg = "";

                        foreach (string key in Request.Form.Keys)
                        {
                            parameters.Add(key.Trim(), Request.Form[key].Trim());
                        }

                        TxnNo = parameters["ORDERID"];

                        if (parameters["STATUS"] != "TXN_FAILURE")
                        {
                            Dictionary<string, string> parameters1 = new Dictionary<string, string>();

                            string MID = parameters["MID"];
                            string ORDER_ID = parameters["ORDERID"];
                            parameters1.Add("MID", MID.ToString());
                            parameters1.Add("ORDER_ID", ORDER_ID.ToString());
                            string checksum = CheckSum.generateCheckSum(merchantKey, parameters1);

                         
                            string apiurl = string.Empty;
                            string json_data;
                            JObject json, jObj;

                            using (var client = new HttpClient())
                            {
                                try
                                {
                                    string jResult = string.Empty;
                                    string MainJson = "{'MID':'" + MID + "','ORDER_ID':'" + ORDER_ID + "','CHECKSUMHASH':'" + checksum + "'}";
                                    string getapi = "https://pguat.paytm.com/oltp/HANDLER_INTERNAL/getTxnStatus?JsonData=" + MainJson;

                                    MultipartFormDataContent content = new MultipartFormDataContent();
                                    StringContent s_Data = new StringContent(MainJson);
                                    content.Add(s_Data);

                                    HttpResponseMessage response = client.PostAsync(getapi, content).Result;

                                    if (response.IsSuccessStatusCode)
                                    {
                                        //jObj = response.Content.ReadAsAsync<JObject>().Result;
                                        //ResMsg = response.Content.ReadAsAsync<String>().Result;
                                        ResMsg = response.Content.ReadAsStringAsync().Result;
                                    }

                                }
                                catch (Exception e)
                                {

                                    // throw;
                                }
                            }


                            CartId = parameters["TXNID"];
                            TxnNo = parameters["ORDERID"];
                            Amount = parameters["TXNAMOUNT"];
                            Bank_Txnid = parameters["BANKTXNID"];
                            Currency = parameters["CURRENCY"];
                            Txn_Date = parameters["TXNDATE"];
                            Bank_Name = parameters["BANKNAME"];
                            ResCode = parameters["RESPCODE"];
                            ResMsg = parameters["RESPMSG"];
                        }

                        else
                        {
                            using (DAL db = new DAL())
                            {

                                NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
                                RoutesController objRoutes = new RoutesController();
                                TransactionSuccessModel objTran = new TransactionSuccessModel();
                                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                                var guid = Convert.ToString((new Random()).Next(100000));

                                SqlCommand cmd2 = new SqlCommand();
                                DataTable dt2 = new DataTable();
                                DAL db1 = new DAL();
                                string MycartDetailJsonStr = "";

                                cmd2.CommandType = System.Data.CommandType.StoredProcedure;
                                cmd2.CommandText = "NV_SP_GetDetailsToTemp";
                                cmd2.Parameters.AddWithValue("@TxnNo", TxnNo);

                                dt2 = db1.ReturnDataTable(cmd2);
                                MycartDetailJsonStr = db1.ConvertTableToJson(dt2);

                                foreach (DataRow dr in dt2.Rows)
                                {

                                    obj.BillTo = Convert.ToString(dr["BillTo"]);
                                    obj.Email_Id = Convert.ToString(dr["Email_ID"]);
                                    obj.BillAddress1 = Convert.ToString(dr["BillAddress1"]);
                                    obj.Country = Convert.ToString(dr["Country"]);
                                    obj.State = Convert.ToString(dr["State"]);
                                    obj.BillAddress2 = Convert.ToString(dr["BillAddress2"]);
                                    obj.BillAddress3 = Convert.ToString(dr["BillAddress3"]);
                                    obj.Voucher = Convert.ToString(dr["Voucher1"]);
                                    obj.REGN_GUID = Convert.ToString(dr["REGN_GUID"]);
                                    obj.MobileNo = Convert.ToString(dr["MobileNO"]);
                                    //obj.txnid = Convert.ToString(dr["TxnId"]); ;
                                    //obj.PayUMoney_Id = parameters["TXNID"];
                                }


                                string Billdetail = obj.BillTo + '|' + obj.Email_Id + '|'
                                         + obj.BillAddress1 + '|' + obj.Country + '|' +
                                         obj.State + '|' + obj.BillAddress2 + '|' + obj.BillAddress3 + '|' + obj.Voucher;


                                cmd.CommandText = "NV_SP_SaveFailPaytmOrder";
                                cmd.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
                                cmd.Parameters.AddWithValue("@PayuMoneyId", parameters["TXNID"]);
                                cmd.Parameters.AddWithValue("@BillDetail", Billdetail);
                                cmd.Parameters.AddWithValue("@txnid", TxnNo);
                                cmd.Parameters.AddWithValue("@guid", guid);
                                DataSet ds = db.ReturnDataset(cmd);

                                obj.txnid = Convert.ToString(TxnNo);

                                objTran = objRoutes.RemoveDetailPaytm(obj);
                                return Redirect("/my-cart-detail");
                            }
                        }

                        if (parameters.ContainsKey("CHECKSUMHASH"))
                        {
                            paytmChecksum = parameters["CHECKSUMHASH"];
                            parameters.Remove("CHECKSUMHASH");
                        }

                        if (CheckSum.verifyCheckSum(merchantKey, parameters, paytmChecksum))
                        {
                            Response.Write("");
                        }
                        else
                        {
                            Response.Write("");
                        }

                        if (!string.IsNullOrEmpty(TxnNo))
                        {
                            SqlCommand cmd2 = new SqlCommand();
                            DataTable dt2 = new DataTable();
                            DAL db1 = new DAL();

                            NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
                            RoutesController objRoutes = new RoutesController();
                            TransactionSuccessModel objTran = new TransactionSuccessModel();

                            string MycartDetailJsonStr = "";

                            cmd2.CommandType = System.Data.CommandType.StoredProcedure;
                            cmd2.CommandText = "NV_SP_GetDetailsToTemp";
                            cmd2.Parameters.AddWithValue("@TxnNo", TxnNo);

                            dt2 = db1.ReturnDataTable(cmd2);
                            MycartDetailJsonStr = db1.ConvertTableToJson(dt2);

                            foreach (DataRow dr in dt2.Rows)
                            {

                                obj.BillTo = Convert.ToString(dr["BillTo"]);
                                obj.Email_Id = Convert.ToString(dr["Email_ID"]);
                                obj.BillAddress1 = Convert.ToString(dr["BillAddress1"]);
                                obj.Country = Convert.ToString(dr["Country"]);
                                obj.State = Convert.ToString(dr["State"]);
                                obj.BillAddress2 = Convert.ToString(dr["BillAddress2"]);
                                obj.BillAddress3 = Convert.ToString(dr["BillAddress3"]);
                                obj.Voucher = Convert.ToString(dr["Voucher1"]);
                                obj.REGN_GUID = Convert.ToString(dr["REGN_GUID"]);
                                obj.MobileNo = Convert.ToString(dr["MobileNO"]);
                                obj.txnid = Convert.ToString(dr["sTxnId"]); ;
                                obj.PayUMoney_Id = CartId;
                            }

                            obj.BillAddress1 = obj.BillTo + '|' + obj.Email_Id + '|'
                                 + obj.BillAddress1 + '|' + obj.Country + '|' +
                                 obj.State + '|' + obj.BillAddress2 + '|' + obj.BillAddress3 + '|' + obj.Voucher;


                            objTran = objRoutes.SaveDetail(obj);
                            objTran = objRoutes.SaveCartDetail(obj);
                            objTran = objRoutes.RemoveDetailPaytm(obj);
                            ViewBag.PaymentId = CartId;

                        }
                        else
                        {
                            var apiContext = Configuration.GetAPIContext();

                            string payerId = Request.Params["PayerID"];

                            if (!string.IsNullOrEmpty(payerId))
                            {

                                string gl = Request.Params["guid"];

                                string[] guid = gl.Split(',');
                                // ^ Ignore workflow code segment
                                #region Track Workflow
                                // this.flow = Session["flow-" + guid] as RequestFlow;
                                // this.RegisterSampleRequestFlow();
                                // this.flow.RecordApproval("PayPal payment approved successfully.");
                                #endregion

                                // Using the information from the redirect, setup the payment to execute.
                                var paymentId = Session[guid[0]] as string;
                                var paymentExecution = new PaymentExecution() { payer_id = payerId };
                                var payment = new Payment() { id = paymentId };

                                // ^ Ignore workflow code segment
                                #region Track Workflow
                                //this.flow.AddNewRequest("Execute PayPal payment", payment);
                                #endregion

                                // Execute the payment.
                                var executedPayment = payment.Execute(apiContext, paymentExecution);
                                // ^ Ignore workflow code segment
                                #region Track Workflow
                                //this.flow.RecordResponse(executedPayment);
                                #endregion


                                NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
                                RoutesController objRoutes = new RoutesController();
                                TransactionSuccessModel objTran = new TransactionSuccessModel();

                                string id = executedPayment.id;
                                var transaction = executedPayment.transactions.GetEnumerator();
                                var tt = executedPayment.transactions[0].custom.ToString();
                                //"Siddhesh,siddheshpawar145@gmail.com,Dombivli,AUSTRALIA,NA,0,0,152175DF91B24B818C6087594E6892AE"	


                                string txnID = executedPayment.transactions[0].invoice_number.ToString();
                                string[] txn_custom = executedPayment.transactions[0].custom.Split('|');

                                string BillTo = txn_custom[0];
                                string Email_Id = txn_custom[1];
                                string BillAddress1 = txn_custom[2];
                                string Country = txn_custom[3];
                                string State = txn_custom[4];
                                string BillAddress2 = txn_custom[5];
                                string BillAddress3 = txn_custom[6];
                                string Voucher = txn_custom[7];

                                string EmailId = Convert.ToString(Session["EmailId"]);
                                string FirstName = Convert.ToString(Session["FirstName"]);
                                string REGN_GUID = Convert.ToString(Session["REGN_GUID"]);


                                obj.PayUMoney_Id = id;
                                obj.REGN_GUID = REGN_GUID;
                                obj.BillAddress1 = Convert.ToString(tt);
                                obj.FirstName = FirstName;
                                obj.Email_Id = EmailId;
                                obj.txnid = txnID;

                                ViewBag.PaymentId = obj.PayUMoney_Id;
                                objTran = objRoutes.SaveDetail(obj);
                                objTran = objRoutes.SaveCartDetail(obj);
                                objTran = objRoutes.RemoveDetail(obj);
                                ViewBag.TrasactionId = objTran.Trans_Id;

                                // For more information, please visit [PayPal Developer REST API Reference](https://developer.paypal.com/docs/api/).
                            }
                            else
                            {
                                NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
                                RoutesController objRoutes = new RoutesController();
                                TransactionSuccessModel objTran = new TransactionSuccessModel();
                                //obj = (NaamvidyaDetailModel)Session["NaamVidyaModel"];
                                obj.PayUMoney_Id = form["payuMoneyId"];
                                obj.REGN_GUID = form["udf1"];
                                obj.BillAddress1 = Convert.ToString(form["udf2"]);
                                obj.FirstName = Convert.ToString(form["udf4"]);
                                obj.Email_Id = Convert.ToString(form["udf3"]);
                                obj.txnid = Convert.ToString(form["txnid"]);
                                Session["EmailId"] = form["udf3"]; ;
                                Session["FirstName"] = form["udf4"];
                                Session["REGN_GUID"] = form["udf1"];
                                //obj.Price = Convert.ToDecimal(form["udf4"]);
                                //obj.Gender = form["udf5"];
                                //obj.Date_Of_Birth = form["udf6"];
                                //obj.Voucher = form["udf7"];
                                //obj.Discount = Convert.ToDecimal(form["udf8"]);

                                ViewBag.PaymentId = obj.PayUMoney_Id;
                                objTran = objRoutes.SaveDetail(obj);
                                objTran = objRoutes.SaveCartDetail(obj);
                                ViewBag.TrasactionId = objTran.Trans_Id;
                            }
                        }
                    }
                
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
            }
            finally
            {

            }
            return View();
        }
        public ActionResult CheckoutPaytmOrder(NaamvidyaDetailModel NaamvidyaModel)
        {
            String Voucher = "";
            string Country_flag = "I", MycartDatainJsonStr = "";
            DataTable dt = new DataTable();
            //TEMP_GUID = "", REGN_GUID = "", ProductId= "", FirstName= "", LastName= "", Date_Of_Birth, Gender, MobileNo, CartId, ProductInfo, Price, CGST, SGST, IGST, TotalAmt;

            try
            {
                //string Country_flag = NaamvidyaModel.Country_flag;
                Country_flag = NaamvidyaModel.getCountry_flag();

                //if (Session["REGN_GUID"] == null)
                //{
                //    //return View("Login", "Login");
                //    //("Login", "Login");
                //    return Redirect("/login");
                //}
                //else
                //{
                using (DAL db = new DAL())
                {
                    try
                    {
                        SqlCommand cmd1 = new SqlCommand();
                        //DataSet ds = db.ReturnDataset(cmd1);
                        NaamvidyaModel.REGN_GUID = Convert.ToString(Session["REGN_GUID"]);
                        // NaamvidyaModel.Email_Id = Convert.ToString(Session["EmailId"]);
                        NaamvidyaModel.FirstName = Convert.ToString(Session["FirstName"]);

                        //Voucher = Convert.ToString(Session["Voucher"]);

                        if (NaamvidyaModel.TEMP_GUID == null)
                        {
                            NaamvidyaModel.TEMP_GUID = "";
                        }
                        if (NaamvidyaModel.Voucher == null)
                        {
                            NaamvidyaModel.Voucher = "0";
                        }
                        if (NaamvidyaModel.Voucher == null)
                        {
                            NaamvidyaModel.Voucher = "0";
                        }
                        cmd1.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd1.CommandText = "NV_SP_GetMyCartDetail";
                        cmd1.Parameters.AddWithValue("@TEMP_GUID", NaamvidyaModel.TEMP_GUID);
                        cmd1.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                        cmd1.Parameters.AddWithValue("@Coupon_code", NaamvidyaModel.Voucher);
                        cmd1.Parameters.AddWithValue("@Country_flag", NaamvidyaModel.Country_flag);

                        dt = db.ReturnDataTable(cmd1);
                        MycartDatainJsonStr = db.ConvertTableToJson(dt);

                        foreach (DataRow dr in dt.Rows)
                        {

                            NaamvidyaModel.PayUMoney_Amt = Convert.ToDecimal(dr["FinalAmout"]);
                            NaamvidyaModel.PayPal_Amt = Convert.ToDecimal(dr["DFianlAmout"]);
                            NaamvidyaModel.MobileNo = Convert.ToString(dr["MobileNo"]);
                            NaamvidyaModel.CartId = Convert.ToInt64(dr["CartId"]);
                        }
                    }
                    catch (Exception ex)
                    {
                        Nlogger.nLoggerMsg(ex);
                    }
                    finally
                    {
                        db.Dispose();
                    }

                }

                string sHashCode = string.Empty;
                string sTxnId = string.Empty;
                sTxnId = GenerateTxnNo();

                string firstName = NaamvidyaModel.FirstName;
                string amount = NaamvidyaModel.PayUMoney_Amt.ToString();
                string productInfo = "NaamVidya"; //(NaamvidyaModel.ProductId.ToString());
                string email = NaamvidyaModel.Email_Id;
                string phone = NaamvidyaModel.MobileNo;

                //Merchant Key: oGlQyoew
                //Merchant Salt: tMB9AfHJXi
                //Merchant ID: 5830347

                string udf1 = NaamvidyaModel.REGN_GUID;
                //---- Extra added saving parameter
                string middleName = NaamvidyaModel.MiddleName;
                string lastName = NaamvidyaModel.LastName;
                string price = Convert.ToString(NaamvidyaModel.Price);
                string gender = Convert.ToString(NaamvidyaModel.Gender);
                string dob = Convert.ToString(NaamvidyaModel.Date_Of_Birth);
                string voucher = Convert.ToString(NaamvidyaModel.Voucher);
                string discount = Convert.ToString(NaamvidyaModel.Discount);
                string CartId = NaamvidyaModel.CartId.ToString();
                string MobileNO = NaamvidyaModel.MobileNo.ToString();

                if (NaamvidyaModel.State == null)
                {
                    NaamvidyaModel.State = "0";
                }
                if (NaamvidyaModel.BillAddress2 == null)
                {
                    NaamvidyaModel.BillAddress2 = "";
                }
                if (NaamvidyaModel.BillAddress3 == null)
                {
                    NaamvidyaModel.BillAddress3 = "";
                }
                //------- 
                string udf2 = Convert.ToString(NaamvidyaModel.BillTo) + '|' + Convert.ToString(NaamvidyaModel.Email_Id) + '|'
                        + Convert.ToString(NaamvidyaModel.BillAddress1) + '|' + Convert.ToString(NaamvidyaModel.Country) + '|' +
                        Convert.ToString(NaamvidyaModel.State) + '|' + Convert.ToString(NaamvidyaModel.BillAddress2)
                        + '|' + Convert.ToString(NaamvidyaModel.BillAddress3) + '|' + Convert.ToString(NaamvidyaModel.Voucher);
                //---- End Extra added saving parameter
                // string udf2 = Convert.ToString(NaamvidyaModel.ProductId); //middleName;

                string udf3 = NaamvidyaModel.Email_Id; //lastName;
                string udf4 = NaamvidyaModel.FirstName; //price;
                string udf5 = gender;
                string udf6 = dob;
                string udf7 = voucher;
                string udf8 = discount;

                string BillTo = Convert.ToString(NaamvidyaModel.BillTo);
                string BillAddress1 = Convert.ToString(NaamvidyaModel.BillAddress1);
                string Country = Convert.ToString(NaamvidyaModel.Country);
                string State = Convert.ToString(NaamvidyaModel.State);
                string BillAddress2 = Convert.ToString(NaamvidyaModel.BillAddress2);
                string BillAddress3 = Convert.ToString(NaamvidyaModel.BillAddress3);
                string Voucher1 = Convert.ToString(NaamvidyaModel.Voucher);

                SqlCommand cmd2 = new SqlCommand();
                DataTable dt2 = new DataTable();
                DAL db1 = new DAL();
                string MycartDetailJsonStr = "";

                cmd2.CommandType = System.Data.CommandType.StoredProcedure;
                cmd2.CommandText = "NV_SP_SaveDetailsToTemp";
                cmd2.Parameters.AddWithValue("@BillTo", BillTo);
                cmd2.Parameters.AddWithValue("@BillAddress1", BillAddress1);
                cmd2.Parameters.AddWithValue("@BillAddress2", BillAddress2);
                cmd2.Parameters.AddWithValue("@BillAddress3", BillAddress3);
                cmd2.Parameters.AddWithValue("@Voucher1", Voucher1);
                cmd2.Parameters.AddWithValue("@State", State);
                cmd2.Parameters.AddWithValue("@Country", Country);
                cmd2.Parameters.AddWithValue("@Email_ID", udf3);
                cmd2.Parameters.AddWithValue("@MobileNO", MobileNO);
                cmd2.Parameters.AddWithValue("@REGN_GUID", udf1);
                cmd2.Parameters.AddWithValue("@CartId", CartId);
                cmd2.Parameters.AddWithValue("@sTxnId", sTxnId);


                dt2 = db1.ReturnDataTable(cmd2);
                MycartDetailJsonStr = db1.ConvertTableToJson(dt2);

                if (Country_flag == "I")
                {

                    /*
                     Testing Credentials
                     
                    String merchantKey = "#aMCSJAr!w2qiv_G";
                    Dictionary<string, string> parameters = new Dictionary<string, string>();
                    parameters.Add("MID", "Asterr21110028875986");
                    parameters.Add("CHANNEL_ID", "WEB");
                    parameters.Add("INDUSTRY_TYPE_ID", "Retail");
                    parameters.Add("WEBSITE", "WEB_STAGING");
                    parameters.Add("EMAIL", udf3);
                    parameters.Add("MOBILE_NO", MobileNO);
                    parameters.Add("CUST_ID", udf1);
                    parameters.Add("ORDER_ID", sTxnId);
                    parameters.Add("TXN_AMOUNT", amount);
                    */


                    /*
                   Live Credentials
                      */

                  String merchantKey = "xSpzo8zLv5E0xDkN";
                  Dictionary<string, string> parameters = new Dictionary<string, string>();
                  parameters.Add("MID", "ASTRIA06592161724457");
                  parameters.Add("CHANNEL_ID", "WEB");
                  parameters.Add("INDUSTRY_TYPE_ID", "Retail109");
                  parameters.Add("WEBSITE", "ASTRIAWEB");
                  parameters.Add("EMAIL", "payments@naamvidya.com");
                  parameters.Add("MOBILE_NO", "8291033688");

                  parameters.Add("CUST_ID", udf1);
                  parameters.Add("ORDER_ID", sTxnId);
                  parameters.Add("TXN_AMOUNT", amount);
                 


                    //parameters.Add("ADDRESS_1", BillAddress1);
                    //parameters.Add("ADDRESS_2", BillAddress2);

                    //parameters.Add("MERC_UNQ_REF", BillTo +"_"+ State +"_"+ Country +"_"+ BillAddress3 +"_"+ Voucher1);                      

                    parameters.Add("CALLBACK_URL", "http://66.70.152.185:88/Success");
                    //parameters.Add("CALLBACK_URL", "http://localhost:2991/Success");
                 

                    string checksum = CheckSum.generateCheckSum(merchantKey, parameters);

                    //testing 
                    //string paytmURL = "https://pguat.paytm.com/oltp-web/processTransaction?orderid=" + sTxnId;

                    //Live
                      string paytmURL = "https://secure.paytm.in/oltp-web/processTransaction?orderid=" + sTxnId;


                    string outputHTML = "<html>";
                    outputHTML += "<head>";
                    outputHTML += "<title>Merchant Check Out Page</title>";
                    outputHTML += "</head>";
                    outputHTML += "<body>";
                    outputHTML += "<center><h1>Please do not refresh this page...</h1></center>";
                    outputHTML += "<form method='post' action='" + paytmURL + "' name='f1'>";
                    outputHTML += "<table border='1'>";
                    outputHTML += "<tbody>";
                    foreach (string key in parameters.Keys)
                    {
                        outputHTML += "<input type='hidden' name='" + key + "' value='" + parameters[key] + "'>";
                    }
                    outputHTML += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "'>";
                    outputHTML += "</tbody>";
                    outputHTML += "</table>";
                    outputHTML += "<script type='text/javascript'>";
                    outputHTML += "document.f1.submit();";
                    outputHTML += "</script>";
                    outputHTML += "</form>";
                    outputHTML += "</body>";
                    outputHTML += "</html>";

                    ViewBag.output = outputHTML;
                }

            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
            }
            finally
            {

            }
            return View();

        }
        // By smita on 21-feb-2018
        public TransactionSuccessModel RemoveDetailPaytm(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                TransactionSuccessModel objTran = new TransactionSuccessModel();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_RemoveTempDetailPaytm";
                    cmd.Parameters.AddWithValue("@txnid", NaamvidyaModel.txnid);
                    //cmd.Parameters.AddWithValue("@PayuMoneyId", NaamvidyaModel.PayUMoney_Id);
                    //cmd.Parameters.AddWithValue("@BillDetail", NaamvidyaModel.BillAddress1);
                    //cmd.Parameters.AddWithValue("@txnid", NaamvidyaModel.txnid);
                    DataSet ds = db.ReturnDataset(cmd);
                    List<Saveorderdetail> Saveorderdetail = new List<Saveorderdetail>();
                }

                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return objTran;
            }
        }
        //Ended by smita on 21-feb-2018
        public ActionResult UpdateLoginInMyCart(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetailModel = new List<NaamvidyaDetailModel>();
                try
                {
                    if (NaamvidyaModel.TEMP_GUID == null)
                    {
                        NaamvidyaModel.TEMP_GUID = "";
                    }
                    string REGN_GUID = Session["REGN_GUID"].ToString();
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_UpdateCart";
                    cmd.Parameters.AddWithValue("@TEMP_GUID", NaamvidyaModel.TEMP_GUID);
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                        data.REGN_GUID = Convert.ToString(dr["REGN_GUID"]);
                        NaamvidyaDetailModel.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetailModel);
            }
        }
        public TransactionSuccessModel SaveDetail(NaamvidyaDetailModel NaamvidyaModel)
        {
            using (DAL db = new DAL())
            {
                TransactionSuccessModel objTran = new TransactionSuccessModel();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_SaveOrderDetail";
                    cmd.Parameters.AddWithValue("@REGN_GUID", NaamvidyaModel.REGN_GUID);
                    cmd.Parameters.AddWithValue("@ProductId", NaamvidyaModel.ProductId);
                    cmd.Parameters.AddWithValue("@payuMoneyId", NaamvidyaModel.PayUMoney_Id);
                    DataSet ds = db.ReturnDataset(cmd);
                    List<Saveorderdetail> Saveorderdetail = new List<Saveorderdetail>();
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        Saveorderdetail data = new Saveorderdetail();
                        //OrderId
                        //PayumoneyId
                        objTran.Trans_Id = Convert.ToString(item["OrderNo"]);
                        data.OrderNo = Convert.ToString(item["OrderNo"]);
                        data.Orderstatus = Convert.ToString(item["OrderStatus"]);
                        //= Convert.ToString(item["ProductId"]);
                        //data.productname = Convert.ToString(item["ProductName"]);
                        //data.price = Convert.ToDecimal(item["Price"]);
                        //data.finalprice = Convert.ToDecimal(item["FinalPrice"]);
                        //data.name = Convert.ToString(item["FirstName"]);
                        //data.emailid = Convert.ToString(item["Email"]);
                        //orderdetail.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return objTran;
            }
        }
        public string Decrypt(string cipherText)
        {
            string EncryptionKey = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            cipherText = cipherText.Replace(" ", "+");
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] {  
            0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76  
        });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }
        public ActionResult moreinfopagebind(getorderdetail getorderdetail)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetail = new List<NaamvidyaDetailModel>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    string REGN_GUID = getorderdetail.REGN_GUID.Trim();
                    if (REGN_GUID == "")
                    {
                        return Redirect("/login");
                    }
                    string vOrderId = "";
                    int FromMail = getorderdetail.FromMail;
                    if (FromMail == 1)
                    {
                        vOrderId = Server.UrlDecode(getorderdetail.OrderId).Trim();
                        string orderid = Server.UrlDecode(Convert.ToString(Session["emailOrderId"]));
                        if (orderid == vOrderId)
                        {
                            vOrderId = Decrypt(vOrderId);
                        }
                        else
                        {
                            return Redirect("/my-orders");
                        }
                    }
                    else
                    {
                        vOrderId = getorderdetail.OrderId;
                    }
                    if (vOrderId != null)
                    {
                        Int64 iOrderId = Convert.ToInt64(vOrderId);
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.CommandText = "NV_SP_GetSavedOrderDetail";
                        cmd.Parameters.AddWithValue("@REGN_GUID", REGN_GUID);
                        cmd.Parameters.AddWithValue("@OrderId", iOrderId);
                        //cmd.Parameters.AddWithValue("@LName", userdetail.lastName);
                        //cmd.Parameters.AddWithValue("@DOB", userdetail.dob);
                        //cmd.Parameters.AddWithValue("@Gender", userdetail.gender);
                        DataSet ds = db.ReturnDataset(cmd);
                        //NaamvidyaDetailModel NaamvidyaDetailModel = new NaamvidyaDetailModel();
                        foreach (DataRow item in ds.Tables[0].Rows)
                        {
                            NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                            data.FirstName = Convert.ToString(item["FirstName"]);
                            data.MiddleName = Convert.ToString(item["MiddleName"]);
                            data.LastName = Convert.ToString(item["LastName"]);
                            data.Date_Of_Birth = Convert.ToString(item["DOB"]);
                            data.Years = Convert.ToString(item["Years"]);
                            data.MonthNames = Convert.ToString(item["MonthNames"]);
                            data.Days = Convert.ToString(item["Days"]);
                            data.Gender = Convert.ToString(item["Gender"]);
                            data.MobileNo = Convert.ToString(item["MobileNo"]);
                            data.ProductId = Convert.ToInt32(item["ProductId"]);
                            data.Remarks = Convert.ToString(item["Remarks"]);
                            data.OrderStatus = Convert.ToString(item["OrderStatus"]);
                            //data.Email_Id = Convert.ToString(item["Email"]);
                            data.Name1 = Convert.ToString(item["Name1"]);
                            data.Name2 = Convert.ToString(item["Name2"]);
                            data.Name3 = Convert.ToString(item["Name3"]);
                            data.Name4 = Convert.ToString(item["Name4"]);
                            data.Name5 = Convert.ToString(item["Name5"]);
                            NaamvidyaDetail.Add(data);
                        }
                    }
                    else
                    {
                        return Redirect("/my-orders");
                    }
                    // RenderViewToString("about", "");
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetail);
            }
            //return View("moreinfopage", NaamvidyaDetailModel);
        }
        public ActionResult orderdetailinfobind(getorderdetail getorderdetail)
        {
            using (DAL db = new DAL())
            {
                List<NaamvidyaDetailModel> NaamvidyaDetail = new List<NaamvidyaDetailModel>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    string REGN_GUID = getorderdetail.REGN_GUID;
                    Int64 iOrderId = Convert.ToInt64(getorderdetail.OrderId);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetOrderDetailInfo";
                    cmd.Parameters.AddWithValue("@OrderId", iOrderId);
                    //cmd.Parameters.AddWithValue("@LName", userdetail.lastName);
                    //cmd.Parameters.AddWithValue("@DOB", userdetail.dob);
                    //cmd.Parameters.AddWithValue("@Gender", userdetail.gender);
                    DataSet ds = db.ReturnDataset(cmd);
                    //NaamvidyaDetailModel NaamvidyaDetailModel = new NaamvidyaDetailModel();
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        NaamvidyaDetailModel data = new NaamvidyaDetailModel();
                        data.MiddleName = Convert.ToString(item["MiddleName"]);
                        data.LastName = Convert.ToString(item["LastName"]);
                        data.Date_Of_Birth = Convert.ToString(item["DOB"]);
                        data.Years = Convert.ToString(item["Years"]);
                        data.MonthNames = Convert.ToString(item["MonthNames"]);
                        data.Days = Convert.ToString(item["Days"]);
                        data.Gender = Convert.ToString(item["Gender"]);
                        data.MobileNo = Convert.ToString(item["MobileNo"]);
                        data.ProductId = Convert.ToInt32(item["ProductId"]);
                        data.Remarks = Convert.ToString(item["Remarks"]);
                        data.Name1 = Convert.ToString(item["Name1"]);
                        data.Name2 = Convert.ToString(item["Name2"]);
                        data.Name3 = Convert.ToString(item["Name3"]);
                        data.Name4 = Convert.ToString(item["Name4"]);
                        data.Name5 = Convert.ToString(item["Name5"]);
                        data.namespell = Convert.ToBoolean(item["AlterNameSpell"]);
                        data.lastnamespell = Convert.ToBoolean(item["AlterLNameSpell"]);
                        data.Alphabets = Convert.ToString(item["PreferedAlphabets"]);
                        data.MotherName = Convert.ToString(item["MothersName"]);
                        data.FatherName = Convert.ToString(item["FathersName"]);
                        data.Sibling1 = Convert.ToString(item["SiblingName1"]);
                        data.Sibling2 = Convert.ToString(item["SiblingName2"]);
                        data.Sibling3 = Convert.ToString(item["SiblingName3"]);
                        data.maxlength = Convert.ToString(item["MaxLengthName"]);
                        //data.Email_Id = Convert.ToString(item["Email"]);
                        NaamvidyaDetail.Add(data);
                    }
                    // RenderViewToString("about", "");
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(NaamvidyaDetail);
            }
            //return View("moreinfopage", NaamvidyaDetailModel);
        }
        public JObject orderdetaillmfName(getorderdetail getorderdetail)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                string v_data1 = db.ConvertTableToJson(blank_dt);
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    string REGN_GUID = getorderdetail.REGN_GUID;
                    Int64 iOrderId = Convert.ToInt64(getorderdetail.OrderId);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetOrderDetailFMLName";
                    cmd.Parameters.AddWithValue("@OrderId", iOrderId);
                    //cmd.Parameters.AddWithValue("@LName", userdetail.lastName);
                    //cmd.Parameters.AddWithValue("@DOB", userdetail.dob);
                    //cmd.Parameters.AddWithValue("@Gender", userdetail.gender);
                    DataSet ds = db.ReturnDataset(cmd);
                    List<ListBySurnames> ListBySurnames = new List<ListBySurnames>();
                    //NaamvidyaDetailModel NaamvidyaDetailModel = new NaamvidyaDetailModel();
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["json_data1"]);
                            v_data1 = Convert.ToString(ds.Tables[0].Rows[0]["json_data2"]);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"data1\":" + v_data1 + "}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        public JObject orderdetailFilterFName(FilterFNames FilterFNames)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                string v_data1 = db.ConvertTableToJson(blank_dt);
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    Int64 iOrderId = FilterFNames.OrderId;
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetOrderDetailFilterFName";
                    cmd.Parameters.AddWithValue("@OrderId", iOrderId);
                    cmd.Parameters.AddWithValue("@LNames", FilterFNames.LNames != null ? FilterFNames.LNames : "");
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["json_data"]);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"data1\":" + v_data1 + "}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        public JObject orderdetailSave(FilterFNames FilterFNames)
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                string v_data1 = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    Int64 iOrderId = FilterFNames.OrderId;
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_SaveOrderDetailByAdmin";
                    cmd.Parameters.AddWithValue("@OrderId", iOrderId);
                    cmd.Parameters.AddWithValue("@LNames", FilterFNames.LNames);
                    cmd.Parameters.AddWithValue("@FNames", FilterFNames.FNames);
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = Convert.ToBoolean(ds.Tables[0].Rows[0]["Flag"]);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"data\":" + v_data + ",\"flag\":\"" + flag + "\",\"data1\":" + v_data1 + "}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        public JObject getCountryState()
        {
            using (DAL db = new DAL())
            {
                JObject json = new JObject();
                DataTable blank_dt = new DataTable();
                string v_data = db.ConvertTableToJson(blank_dt);
                string v_data1 = db.ConvertTableToJson(blank_dt);
                Boolean flag = false;
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetCountryState";
                    DataSet ds = db.ReturnDataset(cmd);
                    if (ds != null)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            flag = true;
                            v_data = Convert.ToString(ds.Tables[0].Rows[0]["Country"]);
                            v_data1 = Convert.ToString(ds.Tables[0].Rows[0]["State"]);
                        }
                        else
                        {
                            flag = false;
                        }
                    }
                    else
                    {
                        flag = false;
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                string MainJson = "{\"CountryList\":" + v_data + ",\"flag\":\"" + flag + "\",\"StateList\":" + v_data1 + "}";
                json = JObject.Parse(MainJson);
                return json;
            }
        }
        //--------------- Huzaifa Retiwala ---------------  
        private PayUMoneyURLModel GetPayUMoneyUrl()
        {
            PayUMoneyURLModel obj = new PayUMoneyURLModel();
            try
            {
                obj = Connection.GetPayUMoneyUrls();
            }
            catch (Exception e)
            {
            }
            return obj;
        }
        public ActionResult getPOrders(getPOrders getPOrders)
        {
            // string REGN_GUID = Session["REGN_GUID"].ToString();
            using (DAL db = new DAL())
            {
                List<getPOrders> Orders = new List<getPOrders>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_PendingOrder";
                    cmd.Parameters.AddWithValue("@REGN_GUID", getPOrders.REGN_GUID);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        getPOrders data = new getPOrders();
                        data.OrderId = Convert.ToInt32(dr["OrderId"]);
                        data.OrderNo = Convert.ToString(dr["OrderNo"]);
                        data.OrderDate = Convert.ToString(dr["OrderDate"]);
                        data.ProductId = Convert.ToInt32(dr["ProductId"]);
                        data.ProductName = Convert.ToString(dr["ProductName"]);
                        data.FirstName = Convert.ToString(dr["FirstName"]);
                        data.MiddleName = Convert.ToString(dr["MiddleName"]);
                        data.LastName = Convert.ToString(dr["LastName"]);
                        data.Name1 = Convert.ToString(dr["Name1"]);
                        data.Name2 = Convert.ToString(dr["Name2"]);
                        data.Name3 = Convert.ToString(dr["Name3"]);
                        data.Name4 = Convert.ToString(dr["Name4"]);
                        data.Name5 = Convert.ToString(dr["Name5"]);
                        data.PreferedAlphabets = Convert.ToString(dr["PreferedAlphabets"]);
                        data.REGN_GUID = Convert.ToString(dr["REGN_GUID"]);
                        data.Status_Desc = Convert.ToString(dr["Status_Desc"]);
                        data.OrderStatus = Convert.ToString(dr["OrderStatus"]);
                        Orders.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(Orders);
            }
        }
        public ActionResult getFreeOrders(getFreeOrders getFreeOrders)
        {
            // string REGN_GUID = Session["REGN_GUID"].ToString();
            using (DAL db = new DAL())
            {
                List<getFreeOrders> Orders = new List<getFreeOrders>();
                try
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_FreeOrder";
                    cmd.Parameters.AddWithValue("@REGN_GUID", getFreeOrders.REGN_GUID);
                    DataTable dt = db.ReturnDataTable(cmd);
                    foreach (DataRow dr in dt.Rows)
                    {
                        getFreeOrders data = new getFreeOrders();
                        data.FirstName = Convert.ToString(dr["FName"]);
                        data.MiddleName = Convert.ToString(dr["MName"]);
                        data.LastName = Convert.ToString(dr["LName"]);
                        data.DOB = Convert.ToString(dr["DOB"]);
                        data.Gender = Convert.ToString(dr["Gender"]);
                        data.REGN_GUID = Convert.ToString(dr["REGN_GUID"]);
                        Orders.Add(data);
                    }
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(Orders);
            }
        }
        [HttpPost]
        public ActionResult getorderdetail(userdetail userdetail)
        {
            using (DAL db = new DAL())
            {
                List<orderdetail> orderdetail = new List<orderdetail>();
                try
                {
                    Int32 productid = Convert.ToInt32(userdetail.productid);
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "NV_SP_GetOrderDetail";
                    cmd.Parameters.AddWithValue("@REGN_GUID", Convert.ToString(Session["REGN_GUID"]));
                    cmd.Parameters.AddWithValue("@ProductId", productid);
                    cmd.Parameters.AddWithValue("@Voucher", "");
                    //cmd.Parameters.AddWithValue("@MName", userdetail.middleName);
                    //cmd.Parameters.AddWithValue("@LName", userdetail.lastName);
                    //cmd.Parameters.AddWithValue("@DOB", userdetail.dob);
                    //cmd.Parameters.AddWithValue("@Gender", userdetail.gender);
                    DataSet ds = db.ReturnDataset(cmd);
                    foreach (DataRow item in ds.Tables[0].Rows)
                    {
                        orderdetail data = new orderdetail();
                        data.productid = Convert.ToString(item["ProductId"]);
                        data.productname = Convert.ToString(item["ProductName"]);
                        data.price = Convert.ToDecimal(item["Price"]);
                        data.cgst = Convert.ToDecimal(item["cgst"]);
                        data.sgst = Convert.ToDecimal(item["sgst"]);
                        data.finalprice = Convert.ToDecimal(item["FinalPrice"]);
                        data.name = Convert.ToString(item["FirstName"]);
                        data.emailid = Convert.ToString(item["Email"]);
                        orderdetail.Add(data);
                    }
                    RenderViewToString("about", "");
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
                finally
                {
                    db.Dispose();
                }
                return Json(orderdetail);
            }
        }
        //public ActionResult MakePayUMoneyPayment(NaamvidyaDetailModel NaamvidyaModel)
        //{
        //    string sHashCode = string.Empty;
        //    string sTxnId = string.Empty;
        //    sTxnId = GenerateTxnNo();
        //    string firstName = NaamvidyaModel.Name;
        //    string amount = NaamvidyaModel.PayUMoney_Amt.ToString();
        //    string productInfo = NaamvidyaModel.ProductInfo;
        //    string email = NaamvidyaModel.Email_Id;
        //    string phone = NaamvidyaModel.MobileNo;
        //    string sTragModel = string.Empty;
        //    //            Merchant Key: oGlQyoew
        //    //Merchant Salt: tMB9AfHJXi
        //    //Merchant ID: 5830347
        //    PayUMoneyURLModel objUrl = new PayUMoneyURLModel();
        //    objUrl = GetPayUMoneyUrl();
        //    string salt = "tMB9AfHJXi";
        //    string key = "oGlQyoew";
        //    string udf1 = "PU";
        //    RemotePost myremotepost = new RemotePost();
        //    myremotepost.Url = "https://secure.payu.in/_payment";
        //    myremotepost.Add("key", key);
        //    myremotepost.Add("txnid", sTxnId);
        //    myremotepost.Add("amount", amount);
        //    myremotepost.Add("productinfo", productInfo);
        //    myremotepost.Add("firstname", firstName);
        //    myremotepost.Add("phone", phone);
        //    myremotepost.Add("email", email);
        //    myremotepost.Add("surl", objUrl.surl);
        //    myremotepost.Add("furl", objUrl.furl);
        //    myremotepost.Add("udf1", udf1);
        //    myremotepost.Add("service_provider", "payu_paisa");
        //    string hashString = key + "|" + sTxnId + "|" + amount + "|" + productInfo + "|" + firstName + "|" + email + "|" + udf1 + "||||||||||" + salt;
        //    string hash = Generatehash512(hashString);
        //    myremotepost.Add("hash", hash);
        //    myremotepost.Post();
        //    return View();
        //}
        public string ConvertTableToJson(DataTable dt)
        {
            string str = "";
            try
            {
                str = JsonConvert.SerializeObject(dt); // Serialization
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
                //throw ex;
            }
            return str;
        }
        private string GenerateTxnNo()
        {
            string sTxnNo = string.Empty;
            Random rng = new Random();
            int randomnum = rng.Next(1, 9999);
            try
            {
                sTxnNo = "T" + DateTime.Now.ToString("yyyyMMddhhmmss") + randomnum;
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
            }
            return sTxnNo;
        }
        public string Generatehash512(string text)
        {
            string hex = "";
            try
            {
                byte[] message = Encoding.UTF8.GetBytes(text);
                UnicodeEncoding UE = new UnicodeEncoding();
                byte[] hashValue;
                SHA512Managed hashString = new SHA512Managed();
                hashValue = hashString.ComputeHash(message);
                foreach (byte x in hashValue)
                {
                    hex += String.Format("{0:x2}", x);
                }
            }
            catch (Exception ex)
            {
                Nlogger.nLoggerMsg(ex);
            }
            return hex;
        }
        public class RemotePost
        {
            private System.Collections.Specialized.NameValueCollection Inputs = new System.Collections.Specialized.NameValueCollection();
            public string Url = "";
            public string Method = "post";
            public string FormName = "form1";
            public void Add(string name, string value)
            {
                try
                {
                    Inputs.Add(name, value);
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
            }
            public void Post()
            {
                try
                {
                    System.Web.HttpContext.Current.Response.Clear();
                    System.Web.HttpContext.Current.Response.Write("<html><head>");
                    System.Web.HttpContext.Current.Response.Write(string.Format("</head><body onload=\"document.{0}.submit()\">", FormName));
                    System.Web.HttpContext.Current.Response.Write(string.Format("<form name=\"{0}\" method=\"{1}\" action=\"{2}\" >", FormName, Method, Url));
                    for (int i = 0; i < Inputs.Keys.Count; i++)
                    {
                        System.Web.HttpContext.Current.Response.Write(string.Format("<input name=\"{0}\" type=\"hidden\" value=\"{1}\">", Inputs.Keys[i], Inputs[Inputs.Keys[i]]));
                    }
                    System.Web.HttpContext.Current.Response.Write("</form>");
                    System.Web.HttpContext.Current.Response.Write("</body></html>");
                    System.Web.HttpContext.Current.Response.End();
                }
                catch (Exception ex)
                {
                    Nlogger.nLoggerMsg(ex);
                }
            }
        }
    }
    public class data
    {
        public string firstName { get; set; }
    }
    public class freerptparam
    {
        public string firstName { get; set; }
        public string middleName { get; set; }
        public string lastName { get; set; }
        public DateTime dob { get; set; }
        public string gender { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string message { get; set; }
    }
    public class freerptdata
    {
        public List<rptdataitem> listitems { get; set; }
        public string fName { get; set; }
        public string mName { get; set; }
        public string lName { get; set; }
        public string dob { get; set; }
        public bool allow { get; set; }
        public int count { get; set; }
        public string flag { get; set; }
        public string msg { get; set; }
        public string id { get; set; }
        public string firstNm { get; set; }
        public string REGN_GUID { get; set; }
        public int UserFlag { get; set; }
        public string email { get; set; }
    }
    public class rptdataitem
    {
        public int Section { get; set; }
        public int SrNo { get; set; }
        public int SeqNo { get; set; }
        public string ParaDesc { get; set; }
    }
    //Hasti
    public class login
    {
        public string EmailId { get; set; }
        public string Password { get; set; }
        public string Captcha { get; set; }
        public string emailOrderId { get; set; }
    }
    public class logindata
    {
        public string msg { get; set; }
        public string FirstName { get; set; }
        public string REGN_GUID { get; set; }
        public string EmailId { get; set; }
        public Boolean flag { get; set; }
        public int UserFlag { get; set; }
    }
    public class forgotPassword
    {
        public string EmailId { get; set; }
        public string Captcha { get; set; }
    }
    public class forgotpwdData
    {
        public string msg { get; set; }
        public string FirstName { get; set; }
        public Boolean flag { get; set; }
        public string otp { get; set; }
    }
    public class changePassword
    {
        public string EmailId { get; set; }
        public string OPassword { get; set; }
        public string Password { get; set; }
        public string REGN_GUID { get; set; }
    }
    public class changePwdData
    {
        public string msg { get; set; }
        public Boolean flag { get; set; }
    }
    public class newRegistration
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string emailId { get; set; }
        public string password { get; set; }
    }
    public class newRegisData
    {
        public string msg { get; set; }
        public Boolean flag { get; set; }
        public Int32 otp { get; set; }
    }
    public class footermail
    {
        public string Name { get; set; }
        public string EmailId { get; set; }
        public string Message { get; set; }
    }
    public class getOrders
    {
        public int OrderId { get; set; }
        public string OrderNo { get; set; }
        public string OrderDate { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string Name3 { get; set; }
        public string Name4 { get; set; }
        public string Name5 { get; set; }
        public string PreferedAlphabets { get; set; }
        public string REGN_GUID { get; set; }
    }
    public class Surnames
    {
        public int OrderId { get; set; }
        public string LName { get; set; }
    }
    public class ListBySurnames
    {
        public int OrderId { get; set; }
        public string FName { get; set; }
        public string MName { get; set; }
        public string LName { get; set; }
        public Boolean Status { get; set; }
    }
    public class validateOTP
    {
        public int ValOtp { get; set; }
    }
    public class vOTP
    {
        public string msg { get; set; }
        public Boolean flag { get; set; }
    }
    public class saveInfoDetails
    {
        public string OrderId { get; set; }
        public string firstName { get; set; }
        public string middleName { get; set; }
        public string lastName { get; set; }
        public DateTime dob { get; set; }
        public string placeOfBirth { get; set; }
        public string birthCity { get; set; }
        public string birthTime { get; set; }
        public string gender { get; set; }
        public string mobileno { get; set; }
        public string remarks { get; set; }
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string Name3 { get; set; }
        public string Name4 { get; set; }
        public string Name5 { get; set; }
        public Boolean AlterNameSpell { get; set; }
        public Boolean AlterLNameSpell { get; set; }
        public Boolean rhymewithparents { get; set; }
        public string PreferedAlphabets { get; set; }
        public string Criteria { get; set; }
        public string MotherName { get; set; }
        public string FatherName { get; set; }
        public string Sibling1 { get; set; }
        public string Sibling2 { get; set; }
        public string Sibling3 { get; set; }
        public string MaxLengthName { get; set; }
        public string OptionalmiddleName { get; set; }
        public string OrderStatus { get; set; }
        public string REGN_GUID { get; set; }
    }
    public class InfoDetails
    {
        public string msg { get; set; }
        public Boolean flag { get; set; }
    }
    //Hasti End	
    public class userdetail
    {
        public Int64 userid { get; set; }
        public Int16 productid { get; set; }
        //public string firstName { get; set; }
        public string middleName { get; set; }
        public string lastName { get; set; }
        public DateTime dob { get; set; }
        public string gender { get; set; }
    }
    public class orderdetail
    {
        public string name { get; set; }
        public string emailid { get; set; }
        public string productid { get; set; }
        public string productname { get; set; }
        public Decimal price { get; set; }
        public string voucher { get; set; }
        public Decimal finalprice { get; set; }
        public Decimal cgst { get; set; }
        public Decimal sgst { get; set; }
    }
    public class getorderdetail
    {
        public string REGN_GUID { get; set; }
        public string OrderId { get; set; }
        public int FromMail { get; set; }
        public string EmailOrderId { get; set; }
    }
    public class TranReturnData
    {
        public string txnid { get; set; }
        public string amount { get; set; }
    }
    public class Criteria
    {
        public Int16 Criteria_ID { get; set; }
        public string Criteria_Name { get; set; }
        public bool ForDisplay { get; set; }
        public bool Checked { get; set; }
        public Int16 rowno { get; set; }
    }
    public class Saveorderdetail
    {
        public string OrderId { get; set; }
        public string OrderNo { get; set; }
        public string PayumoneyId { get; set; }
        public string OrderNoCommaSepratd { get; set; }
        public string Orderstatus { get; set; }
        public string To_EmailId { get; set; }
        public string To_Name { get; set; }
        public string FirstName { get; set; }
        public string Message { get; set; }
        public string ProductName { get; set; }
        public string ProductId { get; set; }
    }
    public class FirstNameData
    {
        public string firstName { get; set; }
        public string ethnicity { get; set; }
        public string emailid { get; set; }
        public string gender { get; set; }
    }
    public class Product
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public bool Active { get; set; }
    }
    public class inputJsonData
    {
        public string data { get; set; }
    }
    public class getPOrders
    {
        public int OrderId { get; set; }
        public string OrderNo { get; set; }
        public string OrderDate { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string Name3 { get; set; }
        public string Name4 { get; set; }
        public string Name5 { get; set; }
        public string PreferedAlphabets { get; set; }
        public string REGN_GUID { get; set; }
        public string Status_Desc { get; set; }
        public string OrderStatus { get; set; }
        public int CycleNo { get; set; }
    }
    public class getFreeOrders
    {
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string DOB { get; set; }
        public string Gender { get; set; }
        public string REGN_GUID { get; set; }
    }
    public class getCartCount
    {
        public int CartCount { get; set; }
    }
    public class FilterFNames
    {
        public Int64 OrderId { get; set; }
        public String LNames { get; set; }
        public String FNames { get; set; }
    }
    public class profile
    {
        public string Provider { get; set; }
        public string ProfileId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Captcha { get; set; }
    }
}