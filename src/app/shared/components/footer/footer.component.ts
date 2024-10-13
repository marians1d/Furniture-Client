import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "@app/core/services/auth.service";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
    get isLogged(): boolean {
        return this.authService.isLogged;
    }

    constructor(private authService: AuthService) {}
}
