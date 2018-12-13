import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {Tool} from '../models/tool';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

    baseUrl = 'http://localhost:8080/tools';

    constructor(private http: HttpClient) { }

    getTools(): Observable<Tool[]> {
        return this.http.get<Tool[]>(this.baseUrl);
    }

    addTool(tool: Tool) {
        return this.http.post<Tool>(this.baseUrl, tool);
    }

    saveTool(id: number, tool: Tool) {
        return this.http.put(this.baseUrl + id, tool);
    }

    deleteTool(id: number) {
        this.http.delete(this.baseUrl + id);
    }
}
