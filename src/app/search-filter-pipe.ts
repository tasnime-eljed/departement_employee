import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './model/employee.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Employee[], filterText: string): Employee[] {
    if (!list) return [];
    if (!filterText) return list;
    return list.filter(e =>
      (e.nomComplet ?? '').toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
