import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DadejokeServiceService } from 'src/app/service/dadejoke-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  jokeObject: any;

  constructor(private jokeService: DadejokeServiceService) {}

  ngOnInit(): void {
    this.generateJoke();
  }

  generateJoke() {
    this.jokeService
      .generateJoke()
      .subscribe((result) => (this.jokeObject = result));
  }
}
