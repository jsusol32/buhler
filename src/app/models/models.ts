export interface MachineStates {
    scale: MachineStatus, 
    attacher: MachineStatus, 
    packer: MachineStatus, 
    closer: MachineStatus
}

export type MachineStatus = 'running' | 'warning' | 'alarm'
export type MachineType = 'scale' | 'attacher' | 'packer' | 'closer'

