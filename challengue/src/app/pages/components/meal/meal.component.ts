import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultApi } from 'src/app/shared/interfaces/meals';
import { Saucer } from 'src/app/shared/interfaces/saucer.interface';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  public meal: Saucer = {};
  constructor(
    private _service: MainService,
    private _router: Router,
    private _ar: ActivatedRoute) {
    this._ar.params.subscribe((routeParams: any) => {
      this.loadData(routeParams.id);
    });

  }
  private loadData(id: string): void {
    this._service.requestPetition('lookup.php', "GET", { i: id }).subscribe(
      (r: ResultApi) => {
        if (r.meals.length > 0) {
          this.meal = r.meals[0];
        }
      });
  }
  public onBack(): void {
    this._router.navigate(["/pages/meals/list/na"])
  }
  ngOnInit(): void {
  }

}
