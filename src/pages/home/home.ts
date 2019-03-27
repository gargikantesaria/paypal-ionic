import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var paypal: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  paymentAmount = 200;
  payPalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AZfa5sAt8gFQiJv-dJBsdTb81dAQzunBEtK6B76AARf4YXal8DCkD5QcWJSrJt7v0iaSxIVw7TF01DFo',
    },
    commit: false,
    payment: (data, actions) => {
      console.log("data is", data, actions);
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.paymentAmount, currency: 'CAD' } }
          ]
        }
      });
    }
  }
  constructor(public navCtrl: NavController) {}

  payButtonHandler() {
    console.log(paypal);
    paypal.Buttons(this.payPalConfig).render('#paypal-button');
  }
}
