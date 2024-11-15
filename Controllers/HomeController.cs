using Microsoft.AspNetCore.Mvc;

namespace MaauHotelProject.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(); 
        }
    }

}
