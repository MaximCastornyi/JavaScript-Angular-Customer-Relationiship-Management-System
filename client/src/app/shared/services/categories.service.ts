import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Category} from '../interfaces'
import {Observable} from 'rxjs/index'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/category')
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`/api/category/${id}`)
  }

  create(name: string, image?: File): Observable<Category> {
    const fd = new FormData()

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name)

    return this.http.post<Category>('/api/category', fd)
  }

  update(id: string, name: string, image?: File): Observable<Category> {
    const fd = new FormData()

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name)

    return this.http.patch<Category>(`/api/category/${id}`, fd)
  }

   delete(id: string): Observable<Message>{
return this.http.delete<Message>(url: '/api/category/${id}')
   }

}
