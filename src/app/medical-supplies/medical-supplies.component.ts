import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medical-supplies',
  templateUrl: './medical-supplies.component.html',
  styleUrls: ['./medical-supplies.component.scss']
})
export class MedicalSuppliesComponent implements OnInit {
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
        if (item === 'wheelchairs') {
          this.wheelchairs = true;
        } else if (item === 'walkers') {
          this.walkers = true;
        } else if (item === 'canes') {
          this.canes = true;
        } else if (item === 'crutches') {
          this.crutches = true;
        } else if (item === 'hospital-beds') {
          this.hospitalBeds = true;
        }
      });
    });
  }
}
