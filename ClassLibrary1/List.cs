using System;
using System.Collections.Generic;
using System.Linq;

namespace ClassLibrary1
{
    
    public class List
    {
        public ExpDBEntities db { get; set; }
        public List()
        {
            db = new ExpDBEntities();
        }



        public List<Products> GetProducts()
        {
            return db.Products.ToList();
        }
        public Products GetProducts(int id)
        {
            var finded = db.Products.Where(sa => sa.p_id == id).FirstOrDefault();
            return finded;

        }
        public Products AddProducts(Products product)
        {
            try
            {
               
                db.Products.Add(product);
                db.SaveChanges();
                return product;



            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }
      
        public Products PutPro(Products products)
        {
            try
            {
                // var finded = db.Products.FirstOrDefault(sa => sa.p_id == id);
                //finded.p_id = mp.p_id;
                //finded.p_name = mp.p_name;
                //finded.p_category = mp.p_category;
                //finded.p_price = mp.p_price;
                db.Entry(products).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return products;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }

        }
        public bool DeleteProducts(int id)
        {
            try
            {
                var finded = db.Products.Find(id);

                db.Products.Remove(finded);
                db.SaveChanges();
                return true;
            }
            catch (Exception )
            {

                return false;
            }

        }
    }
}
