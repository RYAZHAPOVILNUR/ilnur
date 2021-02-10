import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class RegisterStore extends ComponentStore<any> {
  public readonly form: FormGroup

  constructor() {
    super();

    this.form = new FormGroup({
      commonInfo: new FormGroup({
        country: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        nationality: new FormControl(null, Validators.required)
      }),
      looks: new FormGroup({
        height: new FormControl(null, Validators.required),
        weight: new FormControl(null, Validators.required),
        bodyType: new FormControl(null, Validators.required),
        eyeColor: new FormControl(null, Validators.required),
        hairColor: new FormControl(null, Validators.required),
        facialHair: new FormControl(null, Validators.required)
      }),
      lifestyle: new FormGroup({
        smoke: new FormControl(null, Validators.required),
        alcohol: new FormControl(null, Validators.required),
        eating: new FormControl(null, Validators.required),
        about: new FormControl(null),
        hobbies: new FormControl(null),
        sport: new FormControl(null),
        frequency: new FormControl(null),
      }),
      work: new FormGroup({
        education: new FormControl(null, Validators.required),
        employmentForm: new FormControl(null, Validators.required),
        financialCondition: new FormControl(null, Validators.required),
        language: new FormControl(null, Validators.required),
        profession: new FormControl(null),
        position: new FormControl(null),
      }),
      maritalstatus: new FormGroup({
        status: new FormControl(null, Validators.required),
        children: new FormControl(null, Validators.required),
        liveParent: new FormControl(null, Validators.required),
        desiredChildren: new FormControl(null, Validators.required)
      }),
      futurespouse: new FormGroup({
        ageOf: new FormControl(null),
        ageUp: new FormControl(null),
        heightsOf: new FormControl(null),
        heightsUp: new FormControl(null),
        weightsOf: new FormControl(null),
        weightsUp: new FormControl(null),
        bodyType: new FormControl(null),
        belief: new FormControl(null, Validators.required),
        character: new FormControl(null),
        about: new FormControl(null),
        children: new FormControl(null)
      }),
      religion: new FormGroup({
        religion: new FormControl(null, Validators.required),
        flow: new FormControl(null, Validators.required),
        prayer: new FormControl(null, Validators.required),
        abstinence: new FormControl(null, Validators.required),
        pilgrimage: new FormControl(null, Validators.required),
        prescription: new FormControl(null),
        holiday: new FormControl(null),
        observe: new FormControl(null),
        sura: new FormControl(null),
        educationReligion: new FormControl(null),
        sourceReligion: new FormControl(null)
      }),
      additionally: new FormGroup({
        housing: new FormControl(null, Validators.required),
        relocation: new FormControl(null, Validators.required),
        adoptingChildren: new FormControl(null, Validators.required),
        polygamy: new FormControl(null, Validators.required)
      })
    })
  }
}
