import { AfterViewInit, Component, EventEmitter, Host, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { KnowledgeLevel, WizardStep } from 'src/app/enums';
import { WizardStepComponent } from 'src/app/interfaces/wizard-step-component';
import { RegistrationDetails } from 'src/app/models/registration-details.model';
import { Skill } from 'src/app/models/skill.model';
import { StepReadyEvent } from 'src/app/models/step-ready-event.model';
import { RegistrationWizardComponent } from '../registration-wizard.component';

@Component({
  selector: 'skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.less']
})
export class SkillsListComponent implements WizardStepComponent, OnInit, AfterViewInit {
  @Input() model!: RegistrationDetails;
  @Output() ready = new EventEmitter<StepReadyEvent>();

  step: WizardStep = WizardStep.Skills;
  KnowledgeLevel = KnowledgeLevel;

  constructor(@Host() private parent: RegistrationWizardComponent) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ready.emit({ step: this.step });
    }, 5000);
  }

  add(): void {
    this.model?.skills.push(new Skill());
  }

  remove(index: number): void {
    this.model?.skills.splice(index, 1);
  }

  validate(): boolean {
    return this.model.skills.length > 0 && this.model.skills.every(s => s.name.trim().length > 0);
  }

  onNext(nextStep: WizardStep): boolean {
    return this.validate();
  }

  onPrevious(prevStep: WizardStep): boolean {
    return true;
  }
}
