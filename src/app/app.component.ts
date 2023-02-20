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
  emailUserName : String = "";
  userIdentity : String = "";
  constantPP : String = "";
  constantPPIdentity : string = "";

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
    console.log('CleverTap Identity is ',clevertap.getCleverTapID())
  }
  onClickOULSame(){
    clevertap.onUserLogin.push({
        Site :{
          // Email: `${Math.ceil(Math.random() * 100012)}@gmail.com`
          Email: `${this.emailUserName}@gmail.com`
        }
    })
    console.log('User logged Sucessfully ',this.emailUserName);
  }

  onClickOULIdentitySame(){
    console.log('On User login identitry button is clicked')
    clevertap.onUserLogin.push({
      Site :{ 
        // Email: `${Math.ceil(Math.random() * 100012)}@gmail.com`
        Identity: `${this.userIdentity}@gmail.com`}
    })
    console.log('User identity logged Sucessfully', this.userIdentity);
  }

  onClickPP() {
    clevertap.profile.push({
      Site :{
        Email: `as${Math.ceil(Math.random() * 10002320)}@gmail.com`}
    });
    console.log('Profile pushed Sucessfully', this.emailUserName);
  }

  onClickPPSame(){
    clevertap.profile.push({
      Site :{
        Email: `${this.constantPP}@gmail.com`}
    });
    console.log('Profile pushed Sucessfully', `${this.constantPP}@gmail.com`);
  }

  onClickPPIdentitySame(){
    clevertap.profile.push({
      Site :{
        Identity: `${this.constantPPIdentity}`}
    });
    console.log('PP identity done Sucessfully for ', this.constantPPIdentity);
  }
}