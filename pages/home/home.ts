import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
  
})
export class HomePage {
height: number;
weight: number;
age: number;
sex: string;
mRate: number;
other: string;
eFreq: string;
kCal: number;

dCal(){
   if (this.sex = "m") {
   this.mRate = (this.weight * 10) + (this.height * 6.25) - (5 * this.age + 5);
}

else if (this.sex = "f") {
   this.mRate = (this.weight * 10) + (this.height * 6.25) - (5 * this.age - 161);

}

else {
   this.other = "Invalid"
}

if (this.eFreq == "sedentary"){
  this.kCal = this.mRate * 1.2;
}
else if (this.eFreq == "slightlyactive"){
  this.kCal = this.mRate * 1.4;
}
else if (this.eFreq == "moderatelyactive"){
  this.kCal = this.mRate * 1.6;
}
else if (this.eFreq == "veryactive"){
  this.kCal = this.mRate * 1.75;
} 
else if (this.eFreq == "extraactive"){
  this.kCal = this.mRate * 2.0;
}
else if (this.eFreq == "athlete"){
  this.kCal = this.mRate * 2.3;
}
else {
  this.other = "Error"
}

}
}