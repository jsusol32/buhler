import { Component } from '@angular/core';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { CommonModule } from '@angular/common';
import { CardFlowComponent } from './card-flow/card-flow.component';
import { UtilService } from './services/util.service';
import { MachineStateService } from './services/machine-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavPanelComponent,CardFlowComponent],
  providers: [UtilService,MachineStateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
