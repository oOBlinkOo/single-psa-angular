
import { Component, HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  count:any=0;

  @HostListener('window:onIncrement', ['$event'])
  onMessage(event:any) {
      // console.log(event,"angular");
      let window2:any= window;
      this.count= window2["myapp"].counter;
      
  }
}
