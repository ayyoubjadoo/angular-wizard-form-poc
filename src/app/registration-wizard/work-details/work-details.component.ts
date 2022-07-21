import { AfterViewInit, Component, EventEmitter, Host, Input, OnInit, Output } from '@angular/core';
import { WizardStep } from 'src/app/enums';
import { WizardStepComponent } from 'src/app/interfaces/wizard-step-component';
import { RegistrationDetails } from 'src/app/models/registration-details.model';
import { StepReadyEvent } from 'src/app/models/step-ready-event.model';
import { RegistrationWizardComponent } from '../registration-wizard.component';

@Component({
  selector: 'work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.less']
})
export class WorkDetailsComponent implements WizardStepComponent, OnInit, AfterViewInit {
  @Input() model!: RegistrationDetails;
  @Output() ready = new EventEmitter<StepReadyEvent>();
  
  step: WizardStep = WizardStep.WorkDetails;
  someUIFlag = false;

  constructor(@Host() private parent: RegistrationWizardComponent) { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ready.emit({ step: this.step });
    }, 2000);
  }

  validate(): boolean {
    return this.model.workInfo.companyName.trim().length > 0;
  }

  onNext(nextStep: WizardStep): boolean {
    return this.validate();
  }

  onPrevious(prevStep: WizardStep): boolean {
    return true;
  }

  doSomething(value: boolean): void {
    this.someUIFlag = value;
  }
}
