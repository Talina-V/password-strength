import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordStrengthComponent, StrengthIndicatorComponent} from "./password";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        PasswordStrengthComponent,
        StrengthIndicatorComponent,
    ],
    imports: [
        CommonModule, FormsModule,
    ],
    exports: [
        PasswordStrengthComponent,
        StrengthIndicatorComponent,
    ]
})
export class FeaturesModule {
}
