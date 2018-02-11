import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitService } from '../../shared/git.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 username:any;
 repos;

  constructor(public navCtrl: NavController, public gitService: GitService) {

  }
  public getRepo(username){
   this.gitService.getRepos(this.username).then(
    data => {
        this.repos = data || [];
    }); 
  }

}
