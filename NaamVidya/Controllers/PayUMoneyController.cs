using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.IO;
//using Medikart_ecommNewBusinessLayer.Models;
//using Medikart_ecommNewBusinessLayer;
using System.Net.Http;
using NaamVidya.Models;

//using DataAccess;

//Created by Umesh godse on 4-Aug-16

namespace NaamVidya.Controllers

{
    public class PayUMoneyController : Controller
    {      
     //   MedikartEntities db = new MedikartEntities();
        //DAL dal = new DAL();
        [HttpPost]
        public ActionResult Failure(FormCollection form)
        {
            //TragPersonModel obj = new TragPersonModel();
            //TransactionSuccessModel objTran = new TransactionSuccessModel();
            //obj = (TragPersonModel)Session["TragModel"];
            //obj.PayUMoney_Id = form["payuMoneyId"];

            //ViewBag.PaymentId = obj.PayUMoney_Id;
            //objTran = SavePersonDetail(obj);
            //ViewBag.TrasactionId = objTran.Trans_Id;
            NaamvidyaDetailModel TragObj = (NaamvidyaDetailModel)Session["TragModel"];
            PayUMoneyViewModel Obj = new PayUMoneyViewModel();
            Obj.MemberId = Convert.ToInt64(Session["iMemberId"]);

            Obj.TransactionId = form["txnid"].ToString();
            //Obj.TragScoreId = TragObj.TagScore_Id;

            return View(Obj);
            //return View();
        }

        public ActionResult Success(FormCollection form)
        {
            NaamvidyaDetailModel obj = new NaamvidyaDetailModel();
            TransactionSuccessModel objTran = new TransactionSuccessModel();
            obj = (NaamvidyaDetailModel)Session["TragModel"];
            obj.PayUMoney_Id = form["payuMoneyId"];

            ViewBag.PaymentId = obj.PayUMoney_Id;
            objTran = SavePersonDetail(obj);
            ViewBag.TrasactionId = objTran.Trans_Id;

            return View();
        }

        [HttpGet]
        public ActionResult Cancel()
        {
            //ViewBag.City = new SelectList(db.cfe_district_m.OrderBy(x => x.District_Desc), "District_ID", "District_Desc");
            return View();
        }
        public TransactionSuccessModel SavePersonDetail(NaamvidyaDetailModel obj)
        {
            TransactionSuccessModel objTran = new TransactionSuccessModel();
            try
            {
                string webapiurl = string.Empty;
                webapiurl = Connection.GetWebapiConnection();
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(webapiurl);

                    HttpResponseMessage response = client.PostAsJsonAsync("api/TragingDetailNew", obj).Result;

                    if (response.IsSuccessStatusCode)
                    {
                        objTran = response.Content.ReadAsAsync<TransactionSuccessModel>().Result;

                    }
                }
            }
            catch (Exception e)
            {

            }
            return objTran;
        }

        

    }//--end of public class PayUController : Controller

}//--end of namespace Medikart_ecommNew.Controllers
