import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tool} from '../models/tool';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class ToolService {

    baseUrl = environment.baseUrl + 'tools';

    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    }

    getTools(data?: any): Observable<Tool[]> {
        return this.http.get<Tool[]>(this.baseUrl, {params: data});
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

    uploadImage(id: number, file: File) {
        const formData: FormData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(this.baseUrl + '/' + id + '/image', formData);
    }

    getImage(id: number) {
        return this.http.get(this.baseUrl + '/' + id + '/image', {responseType: 'blob'})
            .pipe(
                map(blob => {
                    const urlCreator = window.URL;
                    return this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
                }));
    }
}
