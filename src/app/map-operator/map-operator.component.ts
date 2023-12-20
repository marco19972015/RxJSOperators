import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, map, of } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit, OnDestroy{

  subApples!: Subscription;
  subNumbers!: Subscription;

  ngOnInit(){
    // We want each apple item emitted separately 
    const apples$ = from([  // Defind apple objects
      { id: 1, type: 'macintosh'},
      { id: 2, type: 'gala'},
      { id: 3, type: 'fugi'}
    ]);

    // Define an observable that defines a set of numbers

    // Map those numbers, such as multiplying by 2 
    this.subNumbers = of(10, 30, 50).pipe(
      map(item => item * 2)
    ).subscribe(item => console.log(item));

    // We specificy the subscription variable and set it equal to the observable
    this.subApples = apples$
      .pipe(
        // Copy the existing object inside the new object (spread operator), then we add the color property
        // Since it's an arrow function the braces are interpreted as a function body (fix: add parentheses)
        map(a => ({ ...apples$, color: 'red'}))
      ).subscribe(x => console.log('Apple: ', x));  // Finally we subscribe and log out the resulting object
  }

  ngOnDestroy(){
    // Remember to unsubscribe
    this.subApples.unsubscribe();
    this.subNumbers.unsubscribe();
  }

}
