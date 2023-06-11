import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor (private location: Location, private service: ProductService, private router: Router) { }

  newProduct: Product = new Product();

  ngOnInit(): void {
    this.newProduct = new Product();

    
  }

  submit() {
    this.service.createNewProduct(this.newProduct).subscribe(response => {
      this.router.navigateByUrl('/products');
    })
  }

  goBack() {
    this.location.back();
  }
}
