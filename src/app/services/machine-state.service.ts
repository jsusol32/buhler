import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { UtilService } from "./util.service";
import { MachineStates, MachineStatus } from "../models/models";

@Injectable({
    providedIn: 'root'
})
export class MachineStateService {

    public $machineState = new ReplaySubject<MachineStates>(1);

    constructor(private util: UtilService) {
        this.triggerState()
    }

    triggerState() {
        setInterval(() => { 
            this.$machineState.next(this.getRandomStates());
        }, 2000)
    }

    getRandomStates(): MachineStates {
        const statusTypes: MachineStatus[] = ['running', 'alarm', 'warning'];
        return {
            scale: statusTypes[this.util.getRandomInt(statusTypes.length)],
            attacher: statusTypes[this.util.getRandomInt(statusTypes.length)],
            packer: statusTypes[this.util.getRandomInt(statusTypes.length)],
            closer: statusTypes[this.util.getRandomInt(statusTypes.length)]
        }
    }
}