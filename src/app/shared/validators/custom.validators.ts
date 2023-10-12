export class CustomValidators {
    static calculatePasswordStrength(password: string): number {

        if (!password || password.length < 8) {
            return 0;
        }

        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

        if (hasLetters && (hasNumbers || hasSpecialChars)) {
            return 2;
        }

        return 1;
    }
}

