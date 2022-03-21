import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultApi } from 'src/app/shared/interfaces/meals';
import { Saucer } from 'src/app/shared/interfaces/saucer.interface';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  public listType: string = "Listado";
  public meals: Saucer[] = [];
  public params: any = null;
  private filter: string = "";
  constructor(
    private _service: MainService,
    private _ar: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._ar.params.subscribe((routeParams: any) => {
      this.filter = routeParams.topic ?? "";
      if (this.filter != "na") {
        this.listType = `Listado de platillos con ${this.filter}`;
        this.loadMeals();
      }
      else {
        this.listType = "Buscador de platillos";
        this.params = {};
        this.meals = [];
      }
    });

  }
  private loadMeals() {
    this._service.requestPetition("filter.php", "GET", this.params != null ? this.params : { i: this.filter }).subscribe(
      (r: ResultApi) => {
        console.log(r);
        if (r.meals.length > 0) {
          this.meals = r.meals;

        }
      }
    );
  }
}
