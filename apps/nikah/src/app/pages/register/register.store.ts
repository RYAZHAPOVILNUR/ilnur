import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class RegisterStore extends ComponentStore<any> {
  public readonly form: FormGroup

  constructor() {
    super();

    this.form = new FormGroup({
      commonInfo: new FormGroup({
        country: new FormControl(null),
        city: new FormControl(null),
        nationality: new FormControl(null)
      }),
      looks: new FormGroup({
        height: new FormControl(null),
        weight: new FormControl(null),
        bodyType: new FormControl(null),
        eyeColor: new FormControl(null),
        hairColor: new FormControl(null),
        facialHair: new FormControl(null)
      }),
      lifestyle: new FormGroup({
        smoke: new FormControl(null),
        alcohol: new FormControl(null),
        eating: new FormControl(null),
        about: new FormControl(null),
        hobbies: new FormControl(null),
        sport: new FormControl(null),
        frequency: new FormControl(null),
      }),
      work: new FormGroup({
        education: new FormControl(null),
        profession: new FormControl(null),
        employmentForm: new FormControl(null),
        position: new FormControl(null),
        financialCondition: new FormControl(null),
        languages: new FormArray([])
      }),
      maritalstatus: new FormGroup({
        status: new FormControl(null),
        children: new FormControl(null),
        liveParent: new FormControl(null),
        desiredChildren: new FormControl(null)
      }),
      futurespouse: new FormGroup({
        ageof: new FormControl(null),
        ageup: new FormControl(null),
        heightof: new FormControl(null),
        heightup: new FormControl(null),
        weightof: new FormControl(null),
        weightup: new FormControl(null),
        bodyType: new FormControl(null),
        belief: new FormControl(null),
        character: new FormControl(null),
        about: new FormControl(null),
        children: new FormControl(null)
      }),
      religion: new FormGroup({
        religion: new FormControl(null),
        flow: new FormControl(null),
        prayer: new FormControl(null),
        abstinence: new FormControl(null),
        pilgrimage: new FormControl(null),
        prescription: new FormControl(null),
        holiday: new FormControl(null),
        observe: new FormControl(null),
        sura: new FormControl(null),
        educationReligion: new FormControl(null),
        sourceReligion: new FormControl(null)
      }),
      additionally: new FormGroup({
        housing: new FormControl(null),
        relocation: new FormControl(null),
        adoptingChildren: new FormControl(null),
        polygamy: new FormControl(null)
      })
    })
    console.log(this.form)
  }
}
