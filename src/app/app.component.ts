import { Component, OnInit } from '@angular/core';
import clevertap from 'clevertap-web-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title1 = 'chw-todo-list';
  // constructor(){
  //    setTimeout(() => {
  //      this.title = 'NOC Production'
  //    }, 2000);
  // }
  title = 'clevertap-sdk-angular';

  ngOnInit() {
    clevertap.spa = true;
    clevertap.privacy.push({optOut: false}) // Set the flag to true, if the user of the device opts out of sharing their data
    clevertap.privacy.push({useIP: false})  // Set the flag to true, if the user agrees to share their IP data
    clevertap.init('W84-4WR-565Z') // Replace with values applicable to you. Refer below
  }

  handleEventPushClick () {
    clevertap.event.push('Product Viewed', {
      "Product name": "Casio Chronograph Watch",
      "Category": "Mens Accessories",
      "Price": 59.99,
      "Date": new Date()
    }); // Replace Payload as per your event schema and design
  }
}
