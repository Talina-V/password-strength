import {Component} from '@angular/core';

@Component({
    selector: 'app-strength-indicator',
    templateUrl: './strength-indicator.component.html',
    styleUrls: ['./strength-indicator.component.scss']
})
export class StrengthIndicatorComponent {
    password: string = '';
    strength: number = 0;

    setStrength(strength: number) {
        this.strength = strength;
    }
}
