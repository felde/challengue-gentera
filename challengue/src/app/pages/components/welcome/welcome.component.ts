import { Component, OnInit } from '@angular/core';
import { ResultApi } from 'src/app/shared/interfaces/meals';
import { Saucer } from 'src/app/shared/interfaces/saucer.interface';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public daySaucer: Saucer = {};
  public ingredients: Array<string> = [];
  constructor(
    private _services: MainService
  ) {
    this.loadSaucer();
  }
  loadSaucer() {
    this._services.requestPetition("random.php", "GET", null)
      .subscribe((r: ResultApi) => {
        if (r.meals.length > 0) {
          this.daySaucer = r.meals[0];
          let x: any = this.daySaucer;
          for (let i = 1; i < 21; i++) {
            if (x[`strIngredient${i}`] != "") this.ingredients.push(x[`strIngredient${i}`]);
          }

          console.log(this.daySaucer, this.ingredients);
        }
      })
  }

  ngOnInit() {
  }

}
