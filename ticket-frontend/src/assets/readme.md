## Use below command to install bootstrap : 

    npm install bootstrap

## Copy below lines to angular.json file to update configuarion :

"styles": [
          "node_modules/bootstrap/dist/css/bootstrap.min.css", //<--add this line
          "src/styles.css"
          ],

"scripts": [
          "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" //<--and this line
        ]

========================================***************************========================================

#  To use font awesome icons, use below : 

## run below command git bash :

  npm install @fortawesome/fontawesome-svg-core
  npm install @fortawesome/free-solid-svg-icons

## Import below in app.module.ts and add in imports as well : 
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

  @NgModule({
    imports: [
      BrowserModule,
      FontAwesomeModule    < -------     add here 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

##  import below as in app.component.ts  or pertaining component.ts file :

  import { Component } from '@angular/core';
  import { faTrashCanIcon } from '@fortawesome/free-solid-svg-icons';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
  export class AppComponent {
    faTrashCan = faTrashCanIcon;
  }

## Use below icon in html template  :

  <fa-icon [icon]="faTrashCan"></fa-icon>