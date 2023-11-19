import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheelchairs',
  templateUrl: './wheelchairs.component.html',
  styleUrls: ['./wheelchairs.component.scss']
})
export class WheelchairsComponent implements OnInit {
  wheelchairs = true;
  manual = 0;
  power = 0;
  transport = 0;
  reclining = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://pythonapiserver.azurewebsites.net/v1/wheelchairs').subscribe((data :any) => {
      this.manual = data['manual'];
      this.power = data['power'];
      this.transport = data['transport'];
      this.reclining = data['reclining'];

      if (!this.manual && !this.power && !this.transport && !this.reclining) {
        this.wheelchairs = false;
      }
    });
  }
}
