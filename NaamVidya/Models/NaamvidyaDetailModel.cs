using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace NaamVidya.Models
{
    public class NaamvidyaDetailModel
    {
        public string Email_Id { get; set; }
        public string Date_Of_Birth { get; set; }
        public string REGN_GUID { get; set; }
        public string TEMP_GUID { get; set; }
        public string Industry_Employer { get; set; }
        public string Employment_Duration { get; set; }
        public string MobileNo { get; set; }
        public string Name { get; set; }
        public string ProductName { get; set; }
        public string PayUMoney_Id { get; set; }
        public string PayUMoney_Date { get; set; }
        public string Gender { get; set; }
        public Int64 User_Id { get; set; }
        public decimal PayUMoney_Amt { get; set; }
        public decimal PayPal_Amt { get; set; }

        public string PayUMoney_ReceiptNo { get; set; }
        public decimal Discount { get; set; }
        public string Voucher { get; set; }
        public Int32 ProductId { get; set; }
        public string ProductType { get; set; }
        public string ProductInfo { get; set; }
        public decimal Price { get; set; }
        public decimal GPrice { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string Name3 { get; set; }
        public string Name4 { get; set; }
        public string Name5 { get; set; }
        public Boolean namespell { get; set; }
        public Boolean lastnamespell { get; set; }
        public string Alphabets { get; set; }
        public string MotherName { get; set; }
        public string FatherName { get; set; }
        public string Sibling1 { get; set; }
        public string Sibling2 { get; set; }
        public string Sibling3 { get; set; }
        public string maxlength { get; set; }
        public string OrderStatus { get; set; }
        public decimal CGST { get; set; }
        public decimal SGST { get; set; }
        public decimal IGST { get; set; }
        public Int64 CartId { get; set; }
        public decimal SubTotal { get; set; }

        public decimal TotalAmt { get; set; }
        public decimal FinalAmt { get; set; }
        public decimal DTotalAmt { get; set; }
        public decimal DFinalAmt { get; set; }
        public string Country_flag { get; set; }
        public string getCountry_flag()
        {
            return Country == "INDIA" ? "I" : "O";
        }

        public decimal DollerPrice { get; set; }

        public string Remarks { get; set; }

        public string msg { get; set; }
        public string Years { get; set; }
        public string MonthNames { get; set; }
        public string Days { get; set; }

        public string BillTo { get; set; }

        public string BillAddress1 { get; set; }

        public string BillAddress2 { get; set; }

        public string BillAddress3 { get; set; }

        public string Country { get; set; }

        public string State { get; set; }

        public string txnid { get; set; }
        public string OrderId { get; set; }

        public string Message { get; set; }
        public string To_EmailId { get; set; }

        public string To_Name { get; set; }

        public string Business { get; set; }
        public string track { get; set; }

        public Boolean flag { get; set; }
        public Boolean ExpressDelivery { get; set; }
        public string ExpressDeliveryDate { get; set; }


        public string App_Date { get; set; }
        public string App_Time { get; set; }

        public string ClientsEmailId { get; set; }
        public Boolean PStatus { get; set; }
        public string PayumoneyTranId { get; set; }
        public string userflag { get; set; }
    }
}