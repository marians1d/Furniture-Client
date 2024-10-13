import {Component} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {AuthService} from "@app/core/services/auth.service";
import {IUser} from "@app/shared/models/user";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    isMenuCollapsed: boolean = true;

    get isLogged(): boolean {
        return this.authService.isLogged;
    }

    get currentUser(): IUser | null {
        return this.authService.user;
    }

    constructor(private authService: AuthService, private router: Router) {
    }

    logout(): void {
        this.authService.logout().subscribe(async () => {
            await this.router.navigate(['/']);
        });
    }
}
