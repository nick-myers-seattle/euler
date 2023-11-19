import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crutches',
  templateUrl: './crutches.component.html',
  styleUrls: ['./crutches.component.scss']
})
export class CrutchesComponent implements OnInit {
  crutches = true;
  axillary = 0;
  elbow = 0;
  gutter = 0;
  forearm = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://pythonapiserver.azurewebsites.net/v1/crutches').subscribe((data :any) => {
      this.axillary = data['axillary'];
      this.elbow = data['elbow'];
      this.gutter = data['gutter'];
      this.forearm = data['forearm'];

      if (!this.axillary && !this.elbow && !this.gutter && !this.forearm) {
        this.crutches = false;
      }
    });
  }
}
