import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentProduct: Product = new Product();
  id: number = 0;


  constructor (private service: ProductService, private router: Router, private actRoute: ActivatedRoute, private location:Location) { }



  ngOnInit(): void {
    const routeID = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeID);

    this.service.getProductByID(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct


    })

    
  }

  deleteItem() {
    var result = confirm("Want to delete?");
  if (result) {
    this.service.deleteProductByID(this.id).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl("/products")
    });
  }

  }

  goBack() {
    this.location.back();
  }
}
