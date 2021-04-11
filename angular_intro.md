

## Background 

what is angular js?  
MVC style javascript app framework/platform for building/creating single page apps 
data driven 

angular is written in TypeScript. It implements core and optional functinality as a set of libraries that you import into your apps 


components that are organized into NgModules. 
Components define views, which are sets of elements that Angular can choose among and modify accoriding your program logic and data 

components use services, which provide specific functionality not directly related to views. service providers can be injected into components as dependencies, making your code modular, reusable, and efficient 

module, components and services are classes that use decoratrors.

the metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with directive and binding markup that allow angular to modify the HTML before rendering it for display 

the metadata for a service class provides the info angular needs to make it available to components through dependency injection (DI)

an app's component typically define many views, arranged hierarchically. angular provides the Router service to help you define navigation paths among views. the router provides sophisticated in-browser navigational capabilities 


```html
<!DOCTYPE html> 

<html ng-app>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js">

</script>
</head>


<body>
<div>
<label> Names:</label>
<input type = "text" ng-model="yourName" placeholder = "Enter a Name here">
<hr/>
<h1> hello {{yourName}} </h1>

</div>

</body>
</html>

```




## features 
2 way data binding 
templating 
DOM interaction 
filters 
directives 



## single page apps 
angular JS primarily used to make single page, data driven applications 
additional content brough into the web page without the need to refresh 
use the views the V in MVC to achieve this 


```javascript 
<!DOCTYPE html> 

<html ng-app>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js">

</script>
</head>


<body>

<main ng-view>

	
</main>

</body>
</html>
```

# MVC archicture 

MVC approach to create applicaitons 
it is a methodology which aims to split our app up into three core components 


model : data/ json, database 


view: 
1 used to display content & data to a user in a browser 
2 html 
3 use expressions to insert data into views 
<html_tags> {{data}} </html_tags>











