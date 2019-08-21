import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { ProServiceService } from '../service/pro-service.service';
import { Products } from '../model/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProServiceService]
})

export class ProductsComponent implements OnInit {
  products: Products;
  product: Products[];
  
  constructor(private productSRV: ProServiceService) {
    this.products = new Products();
  }

  ngOnInit() {

    this.genericRefreshMethods();
  }

  resetForm(form?: NgForm) {
    if (!this.productSRV.selectedPro) {

      this.productSRV.selectedPro = {
        p_id:null,
        p_name: "",
        p_cate: "",
        p_prize: null,
      }
    }
  }

 
  resetFormInput(): void{
    this.products = {
      p_id:null,
     p_name: "",
      p_cate: "",
      p_prize: null,
    }
  }

  formNullCheck(): boolean {
    if (this.products.p_name == "" || this.products.p_cate == "" || this.products.p_prize == null) {
      return false
    }
    else {
      return true;
    }
  }

  SaveForm(products: Products) {
    if (!this.formNullCheck()) {
      alert("Tüm alanları doldur!");
    }
    else{
   console.log(products);

      this.productSRV.postNewProducts(products).subscribe(res => {
        this.genericRefreshMethods();
        this.refreshUserList();
      });
       this.genericRefreshMethods();}
    
  }
  refreshUserList() {
    this.productSRV.getAllProducts().subscribe((res) => {
      console.log(res);
      this.product = res as Products[];
    });

  }



  Edit(product: Products) {
    this.products = product;
    
  }

  Update(products) {
   
      
    console.log(products);
    
      this.productSRV.updateProducts(products).subscribe((res)=>{
        this.genericRefreshMethods();
        
      });
    
    
  }

  Delete(p_id:number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productSRV.deleteProducts(p_id).subscribe((res) => {
        this.refreshUserList();
        
      });
    }
  }


  genericRefreshMethods(): void {
    //this.resetForm();
    this.refreshUserList();
    this.resetFormInput();
  }
}