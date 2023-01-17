/**
 * ----- About the @Component ----
 * A simple success alert component is created by using the terminal command : sudo ng g c SuccessAlert.
 * Angular generator generates the necessary files such as success-alert.component.ts, success-alert.component.html and success-alert.component.css
 * The typescript declaration of the component @Component creates the neccessary attributes of the components and compiles it into JS.
 * In the @Component the attribute 'selector' takes a string with the name of the element warning-alert, which is used in the app.component.html
 * In the attribute 'templateUrl' is located a string containing the path of the html elements that holds the content of the component.
 * In the 'styleUrls' attributes contains the style in which the component is displayed.
 * 
 * ----- About the export class ----
 * The class SuccessAlertComponent needs to be exported such that this class can be visualized outside of this file and organized into packages.
 * The class is declared and imported into the app.component.ts module file
 * 
 * ----- About the import class ----
 * The Component is imported from the Angular package such that typescript can detect and understands it.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {

}
