import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { HostListener } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductService) {  

  }
  searchValue:string = "";
  baseUrl: string = `http://localhost:3000/products?q=`
  sortBy?: string;
  priceFilter?: string;
  typeFilter?: string;



  

  productList: Product[] = [];

  ngOnInit(): void {
    this.service.getAllProducts().subscribe (Products => {
      this.productList = Products
    })
  }

  deleteItem(id:number) {
    var result = confirm("Want to delete?");
      if (result) {
      this.service.deleteProductByID(id).subscribe(result => {
        console.log(result);
        this.ngOnInit()
      });
    }
  }

  makeURL():string {
    let URL = this.baseUrl.concat(this.searchValue);

    if (this.sortBy) {
      URL = URL.concat(`&_sort=${this.sortBy}`)
    }

    if(this.priceFilter) {
      URL = URL.concat(this.priceFilter);
    }

    if(this.priceFilter && !(this.sortBy)) {
      URL = URL.concat("&_sort=price&_order=asc")
    }

    if(this.typeFilter) {
      URL = URL.concat(`&type=${this.typeFilter}`);
    }

    console.log(URL);
    return URL;
  }

  search() {
    this.service.getProductsByURL(this.makeURL()).subscribe(result => {
      this.productList = result
    })
  }

clear() {
  this.searchValue = "";
  this.sortBy = undefined;
  this.priceFilter = undefined;
  this.typeFilter = undefined;
  this.search();
}




}


