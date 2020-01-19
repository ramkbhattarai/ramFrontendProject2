import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee/employee';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/services/viewServices/view.service';
import { Reimbursement } from 'src/app/models/reim/reim';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  allReims: Reimbursement[];
  currentUser: IEmployee = JSON.parse(sessionStorage.getItem("currentUser"));
  user_id: number = this.currentUser.id;
  imageData:any;
  constructor(private router: Router, private _view: ViewService, private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
    let userString: string = sessionStorage.getItem('currentUser');
    if (userString === null) {
      this.router.navigate(['/login']);
    }

  }
  
  handleClick(){
    this._view.getReims(this.user_id).subscribe(
      (response: Reimbursement[]) =>{
        this.allReims = response;
      }
    ),
      error => console.log("Error", error)
    
  }

  handleBack(){
    this.router.navigate(['/reimbursement']);
  }
  
  

  getImage =(data) =>{
    // let TYPED_ARRAY = new Uint8Array(arrayBytes);
    // const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
    // let base64String = btoa(STRING_CHAR);
    // this.imageData = this._domSanitizer.bypassSecurityTrustUrl(`data: image / jpg; base64, ` + base64String);
      var base64 = ''
      var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    this.imageData = data;
    console.log(data);
    var bytes = new Uint8Array(data)
      var byteLength = bytes.byteLength
      var byteRemainder = byteLength % 3
      var mainLength = byteLength - byteRemainder

      var a, b, c, d
      var chunk

      // Main loop deals with bytes in chunks of 3
      for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12 // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6 // 4032     = (2^6 - 1) << 6
        d = chunk & 63               // 63       = 2^6 - 1

        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
      }

      // Deal with the remaining bytes and padding
      if (byteRemainder == 1) {
        chunk = bytes[mainLength]

        a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4 // 3   = 2^2 - 1

        base64 += encodings[a] + encodings[b] + '=='
      } else if (byteRemainder == 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

        a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4 // 1008  = (2^6 - 1) << 4

        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2 // 15    = 2^4 - 1

        base64 += encodings[a] + encodings[b] + encodings[c] + '='
      }

      return base64;
   

  }
  miniUrl = this.getImage(this.imageData);
  // url: any = this._domSanitizer.bypassSecurityTrustUrl(this.miniUrl);
  url: any = this._domSanitizer.bypassSecurityTrustUrl(this.imageData);

}
