import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondproject';
  plan = [
    {
      price : "0",
      plan: "Free",
      content:[
          {
            name:"Free User",
            disabled:false
          },
          {
            name:"5GB Storage",
            disabled:false
          },
          {
            name:"Public Access",
            disabled:false
          },
          {
            name:"Community Access",
            disabled:false
          },
          {
            name:"Free Sharing",
            disabled:true
          },
          {
            name:"Multi device access",
            disabled:true
          },
          {
            name:"Customer Service",
            disabled:true
          }
      ]
    },
    {
      price : "9",
      plan: "Plus",
      content:[
          {
            name:"Plus User",
            disabled:false
          },
          {
            name:"20GB Storage",
            disabled:false
          },
          {
            name:"Restricted Public Access",
            disabled:false
          },
          {
            name:"Community Access",
            disabled:false
          },
          {
            name:"Free Sharing",
            disabled:false
          },
          {
            name:"Multi device access",
            disabled:true
          },
          {
            name:"Customer Service",
            disabled:true
          }
      ]
    },
    {
      price : "49",
      plan: "Pro",
      content:[
          {
            name:"Pro User",
            disabled:false
          },
          {
            name:"500GB Storage",
            disabled:false
          },
          {
            name:"Unlimited Public Access",
            disabled:false
          },
          {
            name:"Community Access",
            disabled:false
          },
          {
            name:"Free Sharing",
            disabled:false
          },
          {
            name:"Multi device access",
            disabled:false
          },
          {
            name:"Customer Service",
            disabled:false
          }
      ]
    }
  ]
}
