import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canes',
  templateUrl: './canes.component.html',
  styleUrls: ['./canes.component.scss']
})
export class CanesComponent implements OnInit {
  canes = true;
  standard = 0;
  offset = 0;
  multipleLegged = 0;
  chair = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://pythonapiserver.azurewebsites.net/v1/canes').subscribe((data :any) => {
      this.standard = data['standard'];
      this.offset = data['offset'];
      this.multipleLegged = data['multiple-legged'];
      this.chair = data['chair'];

      if (!this.standard && !this.offset && !this.multipleLegged && !this.chair) {
        this.canes = false;
      }
    });
  }
}
