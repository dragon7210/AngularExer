import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'objectFilter',
  pure: false,
})
export class DemoPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items
    }
    return Object.values(items)[filter - 1]
  }
}
