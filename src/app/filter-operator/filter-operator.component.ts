import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, from, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.css']
})
export class FilterOperatorComponent implements OnInit, OnDestroy{

  subApples!: Subscription;
  subNumbers!: Subscription;

  ngOnInit(){

    // Added the tap operator to display initial value and then manipulated value 
    this.subNumbers = of(2, 2.5, 3.5, 4).pipe(
      map(value => value * 2),
      tap(value => console.log("Value in subNumbers is: ", value)),
      filter(value => value % 2 === 0),
      tap(value => console.log('Value shown with filter: ', value))
    ).subscribe()
  }

  ngOnDestroy(){
    // Remember to unsubscribe
    this.subNumbers.unsubscribe();
  }
}
