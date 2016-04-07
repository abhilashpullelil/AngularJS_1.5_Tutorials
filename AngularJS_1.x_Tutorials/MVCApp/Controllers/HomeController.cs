using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
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

        public ActionResult GetAllPersons() { 
            var data = new List<Person>();
            data.Add(new Person(){Name = "Aroma"});
            data.Add(new Person(){Name = "Jason"});
            data.Add(new Person() { Name = "Malik" });
            data.Add(new Person() { Name = "Madona" });
            return Json( new {myData= data}, JsonRequestBehavior.AllowGet);
        }
    }

    public class Person
    {
        public string Name { get; set; }
    }
}