import { Component } from '@angular/core';
import { Subscription, filter, map, of, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent {
 // Bang operator (!) allows us to not have to provide an initial value
 subNumbers!: Subscription;
 subTimer!: Subscription;

 ngOnInit(){

   // Added the tap operator to display initial value and then manipulated value 
   this.subNumbers = of(2, 2.5, 3.5, 4).pipe(
     map(value => value * 2),
     tap(value => console.log("Value in subNumbers is: ", value)),
     filter(value => value % 2 === 0),
     tap(value => console.log('Value shown with filter: ', value))
   ).subscribe()

   this.subTimer = timer(0, 1000).pipe(
     // With an infinite amount of items we can control how many of those items are outputted and at a time interval
     take(5)
   )
   .subscribe({
     next: (item) => console.log('Time: ', item),
     error: (err) => console.log('Timer error occurred: ', err),
     complete: () => console.log('No more ticks')
   });
 }

 ngOnDestroy(){
   // Remember to unsubscribe
   this.subNumbers.unsubscribe();
   this.subTimer.unsubscribe();
 }
}
