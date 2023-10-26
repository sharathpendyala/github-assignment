import { Component,Input} from '@angular/core';
interface features{
  name:string,
  disabled:boolean
}
interface myinterface
{
  price:string,
  plan:string,
  content:Array<features>
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input () data!: myinterface 
}
