$output.webapp("app/entities/${entity.model.var}/${entity.model.var}-line.component.ts")##
import {Component, Input} from '@angular/core';
import {${entity.model.type}} from './${entity.model.var}';
@Component({
	template: `
        #foreach($attr in $entity.printerAttributes.flatUp.list){{ ${attr.fullVar} }} #end
	`,
	selector: '${entity.model.var}-line',
})
export class ${entity.model.type}LineComponent {
    @Input() $entity.model.var : $entity.model.type;
}
