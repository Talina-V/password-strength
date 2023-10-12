import { PasswordStrengthComponent } from './password-strength.component';
import {CustomValidators} from "../../../shared/validators/custom.validators";
import {VALIDATE_CONFIG} from "../../../app.config";

describe('PasswordStrengthComponent', () => {
    let component: PasswordStrengthComponent;

    beforeEach(() => {
        component = new PasswordStrengthComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set initial strength to 0', () => {
        expect(component.strength).toBe(0);
    });

    it('should set password and calculate strength', () => {
        component.password = 'Password123!';
        component.checkPassword();
        expect(component.strength).toBe(2);
    });

    it('should set strength to 0 for weak password', () => {
        component.password = 'weak';
        component.checkPassword();
        expect(component.strength).toBe(0);
    });

    it('should set correct colors for password strength', () => {
        component.password = 'weak';
        expect(component.strengthColor(0)).toBe(VALIDATE_CONFIG.Red);
        expect(component.strengthColor(1)).toBe(VALIDATE_CONFIG.Gray);
        expect(component.strengthColor(2)).toBe(VALIDATE_CONFIG.Gray);
    });

    it('should set correct colors for strong password', () => {
        component.password = 'StrongPassword123!';
        component.checkPassword();
        expect(component.strengthColor(0)).toBe(VALIDATE_CONFIG.Green);
        expect(component.strengthColor(1)).toBe(VALIDATE_CONFIG.Green);
        expect(component.strengthColor(2)).toBe(VALIDATE_CONFIG.Green);
    });
});

describe('CustomValidators', () => {
    it('should calculate password strength as 2 for a strong password', () => {
        const strength = CustomValidators.calculatePasswordStrength('StrongPassword123!');
        expect(strength).toBe(2);
    });

    it('should calculate password strength as 1 for a medium strength password', () => {
        const strength = CustomValidators.calculatePasswordStrength('Medium123');
        expect(strength).toBe(1);
    });

    it('should calculate password strength as 0 for a weak password', () => {
        const strength = CustomValidators.calculatePasswordStrength('weak');
        expect(strength).toBe(0);
    });
});
