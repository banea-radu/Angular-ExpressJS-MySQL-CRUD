import { Component, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @ViewChild('modalCloseButton1') modalCloseButton1;
  @ViewChild('modalCloseButton2') modalCloseButton2;
  products$: Observable<any>;
  productToChangeAfterConfirmation: any = {};
  addNewProductForm = this.formbuilder.group({
    CodIdx: [''],
    CodMagazin: ['', Validators.compose(
      [
        Validators.required,
        Validators.minLength(3),
      ]
    )],
    Denumire: ['', Validators.compose(
      [
        Validators.required,
        Validators.minLength(3),
      ]
    )],
    DataInregistrare: [new Date],
    Cantitate: [1, Validators.compose(
      [
        Validators.required,
        Validators.pattern(/^-?\d*[.,]?\d{0,2}$/),
      ]
    )],
    PretUnitar: [null, Validators.compose(
      [
        Validators.required,
        Validators.pattern(/^-?\d*[.,]?\d{0,2}$/),
      ]
    )],
  })
  addNewProductFormSubmitted = false;
  editProductForm = this.formbuilder.group({
    CodIdx: [''],
    CodMagazin: ['', Validators.compose(
      [
        Validators.required,
        Validators.minLength(3),
      ]
    )],
    Denumire: ['', Validators.compose(
      [
        Validators.required,
        Validators.minLength(3),
      ]
    )],
    DataInregistrare: [new Date],
    Cantitate: [0, Validators.compose(
      [
        Validators.required,
        Validators.pattern(/^-?\d*[.,]?\d{0,2}$/),
      ]
    )],
    PretUnitar: [0, Validators.compose(
      [
        Validators.required,
        Validators.pattern(/^-?\d*[.,]?\d{0,2}$/),
      ]
    )],
  })
  editProductFormSubmitted = false;

  constructor(
    public db: DatabaseService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.products$ = this.db.getAllProducts();
  }

  // save details of the product to update/delete before confirming
  saveProductToChangeAfterConfirmation(product: ProductModel) {
    this.productToChangeAfterConfirmation = product;
    this.editProductForm = this.formbuilder.group({
      CodIdx: [product.CodIdx],
      CodMagazin: [product.CodMagazin, Validators.compose(
        [
          Validators.required,
          Validators.minLength(3),
        ]
      )],
      Denumire: [product.Denumire, Validators.compose(
        [
          Validators.required,
          Validators.minLength(3),
        ]
      )],
      DataInregistrare: [new Date],
      Cantitate: [product.Cantitate, Validators.compose(
        [
          Validators.required,
          Validators.pattern(/^-?\d*[.,]?\d{0,2}$/),
        ]
      )],
      PretUnitar: [product.PretUnitar, Validators.compose(
        [
          Validators.required,
          Validators.pattern(/^-?\d*[.,]?\d{0,2}$/),
        ]
      )],
    })
  }

  submitAddNewProductForm() {
    this.addNewProductFormSubmitted = true;
    if (this.addNewProductForm.valid) {
      this.db.addNewProduct(this.addNewProductForm.value).subscribe((res) => {
        console.log(res);
        this.ngOnInit();
      });
      this.addNewProductForm.reset();
      this.addNewProductFormSubmitted = false;
      this.modalCloseButton1.nativeElement.click(); // close the modal only if form is valid and submitted
    } else {
      console.log('form invalid');
    }
  }

  submitEditProductForm() {
    this.editProductFormSubmitted = true;
    if (this.editProductForm.valid) {
      this.db.updateProduct(this.editProductForm.value).subscribe((res) => {
        console.log(res);
        this.ngOnInit();
      });
      this.editProductForm.reset();
      this.editProductFormSubmitted = false;
      this.modalCloseButton2.nativeElement.click(); // close the modal only if form is valid and submitted
    } else {
      console.log('form invalid');
    }
  }

  deleteProduct() {
    this.db.deleteProduct(this.productToChangeAfterConfirmation).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }
}
