import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../../shared/home.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 username:any;
 repos;

  constructor(public navCtrl: NavController, public homeService: HomeService) {

  }
  public getRepo(username){
   this.homeService.getRepos(this.username).subscribe(
    data => {
        this.repos = data || [];
    }); 
  }

}
