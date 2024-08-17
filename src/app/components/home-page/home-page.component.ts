// home-page.component.ts
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  searchTerm: string = '';
  searchResults: any[] = [];
  previousSearches: string[] = [];

  constructor(private spotifyService: SpotifyService) {}

  onSearch() {
    this.spotifyService.searchDiscs(this.searchTerm).subscribe((data: any) => {
      this.searchResults = data.albums.items;
      this.saveSearch(this.searchTerm);
    });
  }

  saveSearch(query: string) {
    this.previousSearches.unshift(query);
    if (this.previousSearches.length > 5) {
      this.previousSearches.pop();
    }
  }
}
