import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  //for Tab

  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

  public isCollapsed:boolean = false;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

  //for pagination

  public totalItems: number = 64;
  public currentPage: number = 4;

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

// for popover
  public html:string = `
<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;

  // FOR DYMANIC RATING

  public max:number = 10;
  public rate:number = 7;
  public isReadonly:boolean = false;

  public overStar:number;
  public percent:number;

  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar():void {
    this.overStar = void 0;
  }


  title = 'app works!';
}
