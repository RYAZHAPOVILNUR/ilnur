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
        bodyType: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        eyeColor: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        hairColor: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        facialHair: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        })
      }),
      lifestyle: new FormGroup({
        smoke: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        alcohol: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        eating: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        about: new FormControl(null),
        hobbies: new FormControl(null),
        sport: new FormControl(null),
        frequency: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
      }),
      work: new FormGroup({
        education: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        profession: new FormControl(null),
        employmentForm: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        position: new FormControl(null),
        financialCondition: new FormGroup({
          label: new FormControl(null),
          value: new FormControl(null)
        }),
        languages: new FormArray([])
      })
    })
  }
}
