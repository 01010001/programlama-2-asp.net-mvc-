using Microsoft.AspNetCore.Mvc;

namespace okulprojesi3.Controllers
{
    public class ProductsController : Controller
    {
        // This action method handles the route "Products/{id}"
        public IActionResult Details(string link)
        {
            // Your code here to get the product details using the id
            
            return View(); // Return the view with the product details
        }
    }
}
