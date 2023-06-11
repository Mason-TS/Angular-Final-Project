import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProductService) {  }

  
  productList: Product[] = [];


  ngOnInit(): void {

    this.service.getAllProducts().subscribe( result => {
      let listLength:number = result.length


      let ranNums:number[] = this.generateRandomNumbersInRange(listLength);
      console.log(ranNums);

      for (let index = 0; index < ranNums.length; index++) {
        this.service.getProductByID(ranNums[index]).subscribe(result => {
          this.productList.push(result);
          
        })
        
      }

    })


    
  }

   generateRandomNumbersInRange(max: number): number[] {
    const numbers: number[] = [];
  
  
    while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * max ) + 1;
  
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
  
    return numbers;
  }
}
