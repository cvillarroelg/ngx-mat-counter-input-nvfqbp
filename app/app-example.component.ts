import {Component} from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
  styleUrls: ['./app-example.component.css']
})
export class AppExampleComponent {
  _value: number = 0;
  _step: number = 1;
  _min: number = 0;
  _max: number = Infinity;
  _wrap: boolean = false;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */