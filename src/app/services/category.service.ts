import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    baseUrl = 'http://localhost:8080/categories';

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.baseUrl);
    }

    addCategory(category: Category) {
        return this.http.post<Category>(this.baseUrl, category);
    }

    saveCategory(id: number, category: Category) {
        return this.http.put(this.baseUrl + id, category);
    }

    deleteCategory(id: number) {
        this.http.delete(this.baseUrl + id);
    }
}
