import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UtilService } from '../services/util.service';
import { MachineStateService } from '../services/machine-state.service';
import { Subject, takeUntil } from 'rxjs';
import { MachineStates, MachineStatus, MachineType } from '../models/models';

@Component({
  selector: 'app-machine-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-card.component.html',
  styleUrl: './machine-card.component.scss'
})
export class MachineCardComponent {
  @Input('type') type: MachineType = "scale";
  @Input('showImg') showImg: boolean = false;

  status: MachineStatus = 'running';
  title: string = "";

  $destroy = new Subject<void>();

  constructor(
    private util: UtilService,
    public stateService: MachineStateService
  ) { }

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.title = this.util.capitalizeFirstLetter(this.type);
    this.stateService.$machineState.pipe(
      takeUntil(this.$destroy)
    ).subscribe((state: MachineStates) => {
      this.status = state[this.type];
    })
  }

  ngOnDestroy() {
    this.$destroy.next()
  }
}

