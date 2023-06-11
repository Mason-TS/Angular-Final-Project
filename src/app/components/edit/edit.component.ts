import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor (private actRoute: ActivatedRoute, private location: Location, private service: ProductService, private router: Router) { }

  id:number = 0
  newProduct: Product = new Product();

  ngOnInit(): void {
    let routeID = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeID);

    this.service.getProductByID(this.id).subscribe(result => {
      this.newProduct = result;
    })
  }

  submit() {
    this.service.editProductByID(this.id, this.newProduct).subscribe(response => {
      this.router.navigateByUrl('/products');
    })
  }

  goBack() {
    this.location.back();
  }

}
