using Microsoft.AspNetCore.Mvc;

namespace okulprojesi3.Controllers
{
    public class UserController : Controller
    {
        private static List<User> _users = new List<User>
        {
            new User { Id = "1", Email = "user@example.com", Password = "password123" }
        };

        // This action method handles the route "Products/{id}"
        public IActionResult Sign()
        {    
            return View(); // Return the view with the product details
        }
        [HttpGet]
        public IActionResult Login()
        {    
            return View(); // Return the view with the product details
        }

        [HttpPost]
        public IActionResult Login(string email, string password)
        {
            var user = _users.FirstOrDefault(u => u.Email == email && u.Password == password);

            if (user != null)
            {
                // Successful login, you can add additional logic here
                return RedirectToAction("Index", "Home");
            }
            else
            {
                // Failed login, show an error message or redirect back to the login page
                TempData["ErrorMessage"] = "Invalid email or password";
                return RedirectToAction("Login");
            }
        }

        public IActionResult Create(string link)
        {    
            ViewBag.ProductId = link;
            return View(); // Return the view with the product details
        }
    }
}
