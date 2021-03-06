import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchService } from '../../services/domain/match.service';


@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  start(){
    this.navCtrl.push('MatchPage');
  }
}
