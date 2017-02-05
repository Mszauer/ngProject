import { Component } from '@angular/core';

@Component({
    template: `
        <div class='col-xs-3'></div>
        <div class='well text-center col-xs-6'>
            <h1> Home </h1>
            <p>
                Hello! This angular2 application uses <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a>.
            </p>
            <p>
                What is JSONPlaceholder;
            </p>            
            <blockquote cite='https://jsonplaceholder.typicode.com/'>
                "JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.
                It's great for tutorials, faking a server, sharing code examples, ..."
            </blockquote>
            <p> 
                What this means is while this application is not connected to a real server, all functions are created in a way
                that easily mimics a server endpoint. All that would need to be changed is the destination along with very minor 
                refactoring.
            </p>
            <p>
                If you open the developer tools inside your browser, under the networks tab you will see these calls
            </p>
        </div>
        <div class='col-xs-3'></div>
    `
})

export class HomeComponent{
    
}