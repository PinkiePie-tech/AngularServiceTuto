import { Injectable } from "@angular/core";
import { Observable, timer, map, of } from "rxjs";
import { ICourse } from "../models/course.interface";
import { dataCourses } from "../data/course.data";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor() {}

  public getCourses(): Observable<ICourse[]> {
    return timer(200).pipe(
      map((timer: number) => {
        return dataCourses;
      })
    );
  }

  // Première étape, création d'un mock de service, je ne donne pas cette fois si le nom des services,
  // à toi de créer ceux dont tu auras besoin et que tu jugera nécessaire
}
