using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NaamVidya.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            ViewBag.Title = "Home | Naamvidya";
            ViewBag.Description = "NaamVidya, Naam Vidya, Baby Name, Adult Name, Child Name, Spouse Name, Name Change, Numerology, Nominative Determinism, Hindu Baby Name, Muslim Baby Name, Name and destiny, Name Analysis, astrology, Chaldean, name correction, changing names, name meaning, consciousness, Purpose of life, Karma, why names matter, how to choose a name, personality, nature, purpose of life";
            ViewBag.Keywords = "A name can bring success or struggle in life. Take a free first name and full name analysis to see how it has affected you or your baby. Understand why a naming ceremony was a ritual and why saints took up a new name on their spiritual journeys";


            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}