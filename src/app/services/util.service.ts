import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor() { }

    capitalizeFirstLetter(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    getCurrentDateTime(): string {
        return new Date().toLocaleString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })
    }
}