import {Router, RouterModule} from '@angular/router';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '@app/core/services/auth.service';
import {Subject} from 'rxjs';
import {confirmPasswordValidator} from '@app/shared/validators/auth';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        ReactiveFormsModule, RouterModule
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
    errorMessage: string | undefined = undefined;

    killSubscription = new Subject();

    form: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
        this.form = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            confirmPassword: ['', [
                Validators.required,
                confirmPasswordValidator(
                    () => this.form?.get('password'),
                    this.killSubscription
                )
            ]]
        })
    }

    register() {
        if (this.form.invalid) return;

        const {username, email, password} = this.form.value;

        this.authService.register({username, email, password}).subscribe({
            next: async () => {
                await this.router.navigate(['/']);
                this.errorMessage = undefined;
            },
            error: (err: any) => {
                this.errorMessage = err.error.message;
            }
        });
    }

    ngOnDestroy() {
        this.killSubscription.next(null);
        this.killSubscription.complete();
    }
}
