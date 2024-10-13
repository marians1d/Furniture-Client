import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./features/pages/home/home.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
