using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace ReactAuthDemo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SecretDataController : ControllerBase
    {
        [HttpGet]
        [Route("get")]
        public object GetSecretData()
        {
            Response.Headers.Add("responseheader", "whatever");
            return new
            {
                randomNumber = new Random().Next(1, 10000)
            };
        }
        
        [HttpGet]
        [Route("anyone")]
        [AllowAnonymous]
        public object GetPublicData()
        {
            return new
            {
                message = "LIT is amazing!"
            };
        }
    }
}
