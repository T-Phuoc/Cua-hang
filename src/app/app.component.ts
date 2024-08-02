
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first_project';

  products = [
    {
      id: 1,
      name: 'Mèo Ragdoll',
      imgURL:"../assets/Ragdoll.jpeg",
      price: 15000000,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Mèo Munchkin',
      imgURL:"../assets/Munchkin.jpg",
      price: 10000000,
      inStock: 5,
    },
    {
      id: 3,
      name: 'Mèo Maine Coon',
      imgURL:"../assets/Maine-Coon.jpg",
      price: 49000000,
      inStock: 7,
    },
  ];

  cart: any[] = [];

  addToCart(index: number) {
    let findIndex = this.cart.findIndex((element) => {
      return element.id == this.products[index].id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    if (findIndex != -1) {// Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity += 1;
      if(this.products[index].inStock <= 0){
        return;
      }else{
        this.products[index].inStock--;
      } // Tăng số lượng lên 1
    } else {// Nếu không tồn tại
      this.cart.push({// Thêm sp mới đó vào
        id: this.products[index].id,
        name: this.products[index].name,
        price: this.products[index].price,
        quantity: 1,
      });
      this.products[index].inStock--;
    }
    console.log(this.cart);
  }

  deleteProduct(index:number) {
    this.cart.splice(index, 1);
  };
  
  totalCart() {
    let total = 0;
    this.cart.forEach((element) => {
      total += element.price * element.quantity;
    });
    return total;
  }
}


