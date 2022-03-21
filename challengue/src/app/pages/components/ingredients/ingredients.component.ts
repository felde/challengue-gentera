import { Component, OnInit } from '@angular/core';
import { ResultApi } from 'src/app/shared/interfaces/meals';
import { Topic } from 'src/app/shared/interfaces/topic.interface';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  public topics: Topic[] = [];
  public selectedTopic: Topic = {
    idIngredient: "",
    strDescription: "",
    strIngredient: "",
    strType: null
  };
  public isVisible: boolean = false;
  constructor(
    private _service: MainService
  ) {

  }

  ngOnInit(): void {
    this.loadTopics();
  }
  private loadTopics() {
    this._service.requestPetition("list.php", "GET", { i: "list" }).subscribe(
      (r: ResultApi) => {
        console.log(r);
        if (r.meals.length > 0) {
          this.topics = r.meals;

        }
      }
    );
  }
  public viewTopic(t: Topic): void {
    this.selectedTopic = t;
    this.isVisible = true;
  }

  public handleCancel(): void {
    this.isVisible = false;
  }
}
