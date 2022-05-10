import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'json' })

export class jsonPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}
