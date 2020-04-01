import { Component, OnInit } from '@angular/core';
import { AboutService, TeamPedadi } from '../../services/localServices/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pedadiTeam: TeamPedadi[];
  // tslint:disable-next-line: variable-name
  constructor(private _AboutService: AboutService) {
    this.pedadiTeam = this._AboutService.getTeamPedadi();
  }

  ngOnInit(): void {
  }

}
