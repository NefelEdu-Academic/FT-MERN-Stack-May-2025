# Routing and Handling Forms

---

### 1. Create Components
#### Command to Generate Components:
```bash
ng generate component home
ng generate component about
ng generate component contact
ng generate component profile
ng generate component form
ng generate component display
```

---

### 2. Configure Routing
#### Add Routing Module:
- Open the `app-routes.ts` file.
- Define routes for the components:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: FormComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'profile/:id', component: ProfileComponent },
];

```

#### Update `app.component.html`:
Add a navigation bar and `<router-outlet>` for routing.

```html
  <div class="d-flex justify-content-around navbar navbar-expand-lg bg-light mb-4">
    <a class="nav-link" routerLink="/">Home</a> | 
    <a class="nav-link" routerLink="/about">About</a> | 
    <a class="nav-link" routerLink="/contact">Contact</a> | 
    <a class="nav-link" routerLink="/profile/{{id}}">Profile</a> | 
    <a class="nav-link" routerLink="/form">Form</a>
  </div>
  
  <router-outlet></router-outlet>
```

Import `RouterOutlet` and `RouterModule` in `app.component.ts`

```typescript
  import { Component } from '@angular/core';
  import { RouterModule, RouterOutlet } from '@angular/router';
  
  @Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    id: number = 1;
  }
```

#### Retrieve the ID in `ProfileComponent` 

Inside `ProfileComponent`, use `ActivatedRoute` to capture the ID from the URL:  

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
```
🔹 The `ActivatedRoute` service allows us to **access route parameters**.  
🔹 `this.route.snapshot.paramMap.get('id')` retrieves the `id` from the URL.  
🔹 We convert it to a **number** using `Number()` before storing it in `this.id`.

---

### 3. Create a Form Component
#### Create interface for object type:
```bash
  ng generate interface user
```

#### Add Fields:
```typescript
  export interface User {
  name: string;
  email: string;
  }
```

#### Handle Form Data in `form.component.ts`:
Add a method to send form data to another component.

```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  newUser: User = {name: "", email: ""};
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/display'], { state: { userData: this.newUser } });
  }
}

```

#### Add Form Controls:
- Open `form.component.html` and add a form:

```html
<div class="mx-5">
    <h1>User Form</h1>
    <form (ngSubmit)="onSubmit()" class="col-3 ">
        <div class="form-group mb-3">
            <label >Name</label>
            <input class="form-control" name="name" [(ngModel)]="newUser.name" type="text">
            
        </div>
        <div class="form-group mb-3">    
            <label >Email</label>
            <input class="form-control" name="email" [(ngModel)]="newUser.email" type="email">
        </div>
        <button class="btn btn-primary btn-lg w-100" type="submit" >Create</button>
    </form>
</div>
```

---

### 4. Display Submitted Data
#### Access Data in `display.component.ts`:
Retrieve and display the form data passed via the router's state.

```typescript
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { User } from '../user';
  
  @Component({
    selector: 'app-display',
    imports: [],
    templateUrl: './display.component.html',
    styleUrl: './display.component.css'
  })
  export class DisplayComponent {
    displayData: User
    constructor(private router: Router){
      const navigation = this.router.getCurrentNavigation();
      this.displayData = navigation?.extras?.state?.["userData"] || {};
    }
  }
```

#### Display Data in `display.component.html`:
Render the submitted data.

```html
  <div class="mx-5">
      <h2>Submitted Data</h2>
      <p> <strong>Name: </strong> {{displayData.name}} </p>
      <p> <strong>Email: </strong> {{displayData.email}} </p>
  </div>
```

---

### **Assignment 1: User Profile Submission App**

**Objective**:  
Build an Angular application with a form to collect user profile data and a display component to show the submitted information. This assignment will help you practice working with Angular components, routing, forms, and data passing between components.

---

**Description**:  
You are tasked with creating a simple user profile submission app that includes the following features:  

1. **FormComponent**:  
   - Create a form to collect user profile data with the following fields:  
     - Full Name (text input).  
     - Age (number input).  
     - Gender (dropdown selection with options: Male, Female, Other).  
     - Email Address (email input).  
     - Is Subscribed (checkbox to indicate subscription preference).  
   - Upon submission, navigate to the display page and pass the collected data.  

2. **DisplayComponent**:  
   - Retrieve the submitted data passed from the form.  
   - Display the data in a user-friendly format, clearly showing each field and its value.  

3. **Routing**:  
   - Configure routing so that:  
     - `/form` displays the form page (default route).  
     - `/display` displays the submitted profile information.  
   - Add a navigation bar for easy switching between routes.

---

### **Assignment 2: Product Feedback Submission App**

**Objective**:  
Develop an Angular application that allows users to submit product feedback and displays the submitted information on a separate page. This assignment will help you solidify your understanding of Angular components, forms, routing, and data sharing.

---

**Description**:  
Create an app with the following functionality:

1. **FormComponent**:  
   - Create a form to collect product feedback with the following fields:  
     - Product Name (text input).  
     - Rating (number input).  
     - Feedback (textarea).  
     - Email (email input).  
     - Would Recommend (radio buttons with options: Yes, No).  
   - Upon submission, navigate to the display page and pass the feedback data.

2. **DisplayComponent**:  
   - Retrieve and display the submitted feedback data, clearly showing each field and its value.  
   - Format the information in a visually structured way, e.g., using headings and bullet points.

3. **Routing**:  
   - Configure routing so that:  
     - `/form` is the default route and shows the feedback form.  
     - `/display` shows the feedback details page.  
   - Include a navigation bar for easy switching between routes.

---

# **Use JavaScript Files in angular**
If you have a custom JavaScript file, you can include it in the `angular.json` file.

## Steps:
### 1. Create your JavaScript `custom-script.js` file in `src/assets/js`
### 2. Add the path to the JavaScript file under the `scripts` array:
```json
"scripts": [
  "src/assets/js/custom-script.js"
]
```

### 3. Use the functions defined in the file within your component:
```typescript
declare var customFunction: any;

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent {
  executeExternalScript(): void {
    customFunction();
  }
}
```