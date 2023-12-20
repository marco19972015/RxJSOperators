import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, from, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.css']
})
export class TapOperatorComponent {
  // Applying the concept of tap

  subApples!: Subscription;
  subNumbers!: Subscription;

  // ngOnInit(){
  //   const apples$ = from([ 
  //     { id: 1, type: 'macintosh'},
  //     { id: 2, type: 'gala'},
  //     { id: 3, type: 'fugi'}
  //   ]);

  //   // Added the tap operator to display initial value and then manipulated value 
  //   this.subNumbers = of(10, 30, 50).pipe(
  //     tap(value => console.log("Initial value is: ", value)),
  //     map(value => value * 2),
  //     tap(value => console.log("Value in subNumbers is: ", value)),
  //   ).subscribe()

  //   this.subApples = apples$
  //     .pipe(
  //       map(a => ({ ...apples$, color: 'red'})),
  //       // Using the cursor to hover over shows the type of the item 
  //       tap(a => console.log('Apple: ', a))
  //     ).subscribe(); 
  // }

  // ngOnDestroy(){
  //   // Remember to unsubscribe
  //   this.subApples.unsubscribe();
  //   this.subNumbers.unsubscribe();
  // }
}
