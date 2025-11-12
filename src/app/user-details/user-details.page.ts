import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GithubService } from '../services/github.service';
import { HighlightDirective } from '../directives/highlight.directive';
import { FormatNumberPipe } from '../pipes/format-number.pipe';
import { RepoDirective } from '../directives/repo.directive';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    HighlightDirective,
    FormatNumberPipe,
    RepoDirective,
  ],
})
export class UserDetailsPage implements OnInit {
  username: string = '';
  userDetails: any;
  repositories: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    if (this.username) {
      this.loadUserDetails();
    }
  }

  private loadUserDetails() {
    this.githubService.getUser(this.username).subscribe((user) => {
      this.userDetails = user;
    });

    this.githubService.getRepos(this.username).subscribe((repos) => {
      this.repositories = repos;
    });
  }
}
