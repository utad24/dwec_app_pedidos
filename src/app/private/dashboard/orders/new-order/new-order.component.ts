import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../../shared/models/product';
import { NgFor } from '@angular/common';
import { OrdersService } from '../../../../shared/services/orders.service';
import { ProductService } from '../../../../shared/services/product.service';
import { Order } from '../../../../shared/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './new-order.component.html'
})
export class NewOrderComponent implements OnInit {

  orderForm: FormGroup;

  productList: Product[] = [];

  constructor(private fb: FormBuilder, private ordersService: OrdersService, private productsService: ProductService, private router: Router) {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      products: [[]],
      price: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      const order: Order = {
        userData: {
          fullName: this.orderForm.value.name,
          address: this.orderForm.value.address,
        },
        products: this.orderForm.value.products,
        totalPrice: this.orderForm.value.price,
        orderStatus: 'pending'
      }

      this.ordersService.createOrder(order).subscribe((order) => {
        console.log(order);
        this.router.navigate(['/admin/orders']);
      });
    } else {
      alert('Formulario inválido');
      console.log('Formulario inválido');
    }
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.productList = products.data;
    });
  }
}
