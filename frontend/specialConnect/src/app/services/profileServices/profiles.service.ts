import { Injectable } from '@angular/core';
import { SpecialistProfile } from '../../interface/specialistProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  specialistDetails: SpecialistProfile | undefined;

  constructor() {
    this.specialistDetails = JSON.parse(localStorage.getItem('specialistDetails') || 'null');
  }

  updateDetails(details: SpecialistProfile) {
    this.specialistDetails = { ...this.specialistDetails, ...details };
    localStorage.setItem('specialistDetails', JSON.stringify(this.specialistDetails));
  }

  getDetails(): SpecialistProfile | null | undefined {
    return this.specialistDetails;
  }
}
