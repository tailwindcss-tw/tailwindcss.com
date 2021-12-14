import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-movies',
  template: `
    <div class="divide-y divide-gray-100">
      <app-nav>
        <app-nav-item routerLink="/new" [isActive]="true">新片上映</app-nav-item>
        <app-nav-item routerLink="/top">熱門電影</app-nav-item>
        <app-nav-item routerLink="/picks">文森精選</app-nav-item>
      </app-nav>
      <app-list>
        <app-list-item *ngFor="let movie of movies" [movie]="movie"></app-list-item>
      </app-list>
    </div>
  `,
})

export class MoviesComponent {
  @Input() movies!: {
    image: string
    title: string
    starRating: string
    rating: string
    year: string
    genre: string
    runtime: string
    cast: string
  }[]
}
