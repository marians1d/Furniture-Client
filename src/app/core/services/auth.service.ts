import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "@app/shared/models/user";
import {tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: IUser | null = null;

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor(private http: HttpClient) {
    }

    register(data: {
        username: string;
        email: string;
        password: string;
    }) {
        return this.http
            .post<IUser>('/api/register', data)
            .pipe(tap((user) => this.setUser(user)));
    }

    login(data: {
        email: string;
        password: string;
    }) {
        return this.http
            .post<IUser>('/api/login', data)
            .pipe(tap((user) => this.setUser(user)));
    }

    logout() {
        return this.http
            .post('/api/logout', {})
            .pipe(tap(() => this.setUser(null)));
    }

    private setUser(user: IUser | null) {
        this.user = user;
    }
}
