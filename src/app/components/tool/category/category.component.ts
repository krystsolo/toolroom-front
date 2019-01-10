import {Component, OnInit} from '@angular/core';
import {Category} from '../../../models/category';
import {Observable} from 'rxjs';
import {CategoryService} from '../../../services/category.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    categories: Category[];
    newCategory: Category = {name: ''};

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.getCategories();
    }

    private getCategories() {
        this.categoryService.getCategories().subscribe(
            res => {
                this.categories = res;
            },
            error => {
                console.log(error);
            }
        );
    }

    onSubmit() {
        this.categoryService.addCategory(this.newCategory).subscribe(
            res => {
                this.newCategory.name = '';
                this.categories.push(res);
            },
            error => {
                console.log(error);
            }
        );
    }

    update(category: Category) {
        // todo show dialog with category name change and confirmation
    }

    delete(category: Category) {
        this.categoryService.deleteCategory(category.id).subscribe(
            res => {
                console.log('deleted category ' + category.name + ' with id: ' + category.id);
             this.getCategories();
            },
            err => {
                console.log(err);
            }
        );
    }
}
