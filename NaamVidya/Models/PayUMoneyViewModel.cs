using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NaamVidya.Models
{
    public class PayUMoneyViewModel
    {
        public string TransactionId { get; set; }
      
        public Int64 MemberId { get; set; }

        public Int64 TragScoreId { get; set; }
    }
}