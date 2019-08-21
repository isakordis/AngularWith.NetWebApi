using ClassLibrary1;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication1.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ListController : ApiController
    {
        List newList { get; set; }
        public ListController()
        {
            newList = new List();

        }



        //[Route("api/list")]
        [HttpGet]
        public List<Products> GetProducts()
        {
            newList = new List();
            return newList.GetProducts();

        }

        //[Route("api/list/{id:int}")]
        [HttpGet]
        public Products GetProducts(int id)
        {
            newList = new List();
            return newList.GetProducts(id);
        }
        //[Route("api/list/update/{mp:Products}")]

        
        [HttpPut]
         public Products PutPro(Products mp)
        {
            newList = new List();
            return newList.PutPro(mp);
        }

        //[Route("api/list/add/{mp:Products}")]
        
        [HttpPost]
        public Products AddPro(Products mp)
        {
            newList = new List();
            newList.AddProducts(mp);
            return newList.GetProducts(mp.p_id);
            
        }

        //[Route("api/list/del/{id:int}")]
        [HttpDelete]
        public bool DelPro(int id)
        {
            newList = new List();
            newList.DeleteProducts(id);
            return true;
        }
    }
}
