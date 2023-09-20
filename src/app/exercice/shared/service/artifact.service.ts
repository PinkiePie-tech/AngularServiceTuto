import { Injectable } from "@angular/core";
import { IArtifact } from "../model/artifact.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ArtifactService {
  constructor(private http: HttpClient) {}

  public getArtifacts(): Observable<IArtifact[]> {
    return this.http.get<IArtifact[]>("https://genshinlist.com/api/artifacts");
  }
}
