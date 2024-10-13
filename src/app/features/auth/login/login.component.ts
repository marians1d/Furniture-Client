import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "@app/core/services/auth.service";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        RouterLink
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    errorMessage: string | undefined = undefined;

    form: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    login(): void {
        if (this.form.invalid) return;

        const { email, password } = this.form.value;

        this.authService.login({ email, password }).subscribe({
            next: async () => {
                await this.router.navigate(['/']);
            },
            error: (error) => {
                this.errorMessage = error.message;
            }
        });
    }
}
