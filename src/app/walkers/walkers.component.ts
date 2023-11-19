import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkers',
  templateUrl: './walkers.component.html',
  styleUrls: ['./walkers.component.scss']
})
export class WalkersComponent implements OnInit {
  walkers = true;
  standard = 0;
  rollator = 0;
  folding = 0;
  knee = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://pythonapiserver.azurewebsites.net/v1/walkers').subscribe((data :any) => {
      this.standard = data['standard'];
      this.rollator = data['rollator'];
      this.folding = data['folding'];
      this.knee = data['knee'];

      if (!this.standard && !this.rollator && !this.folding && !this.knee) {
        this.walkers = false;
      }
    });
  }
}
