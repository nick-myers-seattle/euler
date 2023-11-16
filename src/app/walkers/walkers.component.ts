import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkers',
  templateUrl: './walkers.component.html',
  styleUrls: ['./walkers.component.scss']
})
export class WalkersComponent implements OnInit {
  medicalSupplies :string[] = [];
  wheelchairs = false;
  walkers = false;
  canes = false;
  crutches = false;
  hospitalBeds = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://pythonapiserver.azurewebsites.net/v1/medical-supplies').subscribe((data :any) => {
      this.medicalSupplies = data['medical-supplies'];
      console.log(this.medicalSupplies);

      this.medicalSupplies.forEach((item :string) => {
        if (item === 'wheelchair') {
          this.wheelchairs = true;
        } else if (item === 'walker') {
          this.walkers = true;
        } else if (item === 'cane') {
          this.canes = true;
        } else if (item === 'crutches') {
          this.crutches = true;
        } else if (item === 'hospital-bed') {
          this.hospitalBeds = true;
        }
      });
    });
  }
}
