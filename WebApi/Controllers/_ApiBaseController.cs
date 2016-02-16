using System.Web.Http;

namespace WebApi.Controllers
{
    public class ApiBaseController : ApiController
    {
        public string Options()
        {
            return null;// HTTP 200 response with empty body
        }
    }
}
