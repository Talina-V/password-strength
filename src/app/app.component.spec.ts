import { AppComponent } from './app.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let appComponent: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        appComponent = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(appComponent).toBeTruthy();
    });
});
