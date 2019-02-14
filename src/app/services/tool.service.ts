import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tool} from '../models/tool';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ToolService {

    baseUrl = environment.baseUrl + 'tools';

    constructor(private http: HttpClient) {
    }

    getTools(): Observable<Tool[]> {
        return this.http.get<Tool[]>(this.baseUrl);
    }

    getTool(id: number): Observable<Tool> {
        return this.http.get<Tool>(this.baseUrl + '/' + id);
    }

    addTool(tool: Tool) {
        return this.http.post<Tool>(this.baseUrl, tool);
    }

    saveTool(id: number, tool: Tool) {
        return this.http.put<Tool>(this.baseUrl + '/' + id, tool);
    }

    deleteTool(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
    }
}
