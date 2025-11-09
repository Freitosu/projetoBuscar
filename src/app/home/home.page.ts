import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../services/github.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormatNumberPipe } from '../pipes/format-number.pipe';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, FormatNumberPipe, HighlightDirective]
})
export class HomePage {

  user: any;
  repos: any[] = [];
  username: string = '';

  constructor(
    private githubService: GithubService,
    private router: Router
  ) {}

  buscar() {
    if (!this.username) return;

    this.githubService.getUser(this.username).subscribe(data => {
      this.user = data;
    });

    this.githubService.getRepos(this.username).subscribe(data => {
      this.repos = data;
    });
  }

  verDetalhes(username: string) {
    this.router.navigate(['/user-details', username]);
  }
}
