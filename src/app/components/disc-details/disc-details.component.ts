import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-disc-details',
  templateUrl: './disc-details.component.html',
  styleUrls: ['./disc-details.component.scss']
})
export class DiscDetailsComponent implements OnInit {
  disc: any;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const discId = params.get('id');
      if (discId) {
        this.spotifyService.getDiscDetails(discId).subscribe((data: any) => {
          this.disc = data;
        });
      }
    });
  }
}
