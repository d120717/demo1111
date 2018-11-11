import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'callapi';
  // apiSource = this.http.get('uri');
  constructor(private http: HttpClient) {
    http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((posts: any[]) => {
          return posts.map((post: any) => {
            return { id: post.id, title: post.title };
          });
        }),
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}
