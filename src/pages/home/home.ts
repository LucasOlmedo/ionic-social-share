import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message: string = null;
  file: string = null;
  link: string = null;
  subject: string = null;

  constructor(
    public navCtrl: NavController,
    private social: SocialSharing
  ) {

  }

  share() {
    this.social.share(
      this.message,
      this.subject,
      this.file,
      this.link
    )
      .then(() => {

      })
      .catch(() => {

      });
  }

}
