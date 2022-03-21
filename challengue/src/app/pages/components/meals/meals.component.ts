import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Area } from 'src/app/shared/interfaces/area';
import { Category } from 'src/app/shared/interfaces/category.interface';
import { ResultApi } from 'src/app/shared/interfaces/meals';
import { Saucer } from 'src/app/shared/interfaces/saucer.interface';
import { Topic } from 'src/app/shared/interfaces/topic.interface';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  public listType: string = "Listado";
  public meals: Saucer[] = [];
  public categories: Category[] = [];
  public areas: Area[] = [];
  public topics: Topic[] = [];
  public params: any = null;
  public filter: string = "";
  public carousel: Saucer[] = [];
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
        this.loadFilters();
      }
    });

  }
  public makeFilter(type: string, filter: string): void {
    this.params = {};
    this.params[type] = filter;
    this.loadMeals();
  }
  private loadFilters() {
    this._service.requestPetition("list.php", "GET", { c: "list" }).subscribe(
      (r: ResultApi) => {
        if (r.meals.length > 0) {
          this.categories = r.meals;
        }
      }
    );
    this._service.requestPetition("list.php", "GET", { a: "list" }).subscribe(
      (r: ResultApi) => {
        if (r.meals.length > 0) {
          this.areas = r.meals;
        }
      }
    );
    this._service.requestPetition("list.php", "GET", { i: "list" }).subscribe(
      (r: ResultApi) => {
        if (r.meals.length > 0) {
          this.topics = r.meals;
        }
      }
    );
  }
  private loadMeals() {
    this._service.requestPetition("filter.php", "GET", this.params != null ? this.params : { i: this.filter }).subscribe(
      (r: ResultApi) => {
        console.log(r);
        if (r.meals.length > 0) {
          this.meals = r.meals;
          this.carousel = [];
          for (let i = 0; i < 10; i++) {
            if (this.meals[i]) this.carousel.push(this.meals[i]);
          }
        }
      }
    );
  }
}
