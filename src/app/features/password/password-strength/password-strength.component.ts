import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {VALIDATE_CONFIG} from "../../../app.config";
import {CustomValidators} from "../../../shared/validators/custom.validators";

@Component({
    selector: 'app-password-strength',
    templateUrl: './password-strength.component.html',
    styleUrls: ['./password-strength.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordStrengthComponent {
    @Input() password: string = '';
    @Input() strength: number = 0;
    @Input() setStrength: (strength: number) => void = () => {};
    colorIndices: number[] = [0, 1, 2];

    constructor() {
    }

    checkPassword() {
        this.strength = CustomValidators.calculatePasswordStrength(this.password);
        this.setStrength(this.strength);
    }

    strengthColor(index: number) {
        if (!this.password || this.password.length === 0) {
            return VALIDATE_CONFIG.Gray;
        }

        if (this.password.length < 8) {
            return index === 0 ? VALIDATE_CONFIG.Red : VALIDATE_CONFIG.Gray;
        }

        if (this.strength === 0) {
            return index === 0 ? VALIDATE_CONFIG.Red : VALIDATE_CONFIG.Gray;
        }

        if (this.strength === 1) {
            return index < 2 ? VALIDATE_CONFIG.Yellow : VALIDATE_CONFIG.Gray;
        }

        return VALIDATE_CONFIG.Green;
    }
}
