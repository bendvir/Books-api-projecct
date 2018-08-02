import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "TitleFilter"
})
export class TitleFilterPipe implements PipeTransform {

    transform(value: string) {  
        let allLeters = "abcdefghijklmnopqrstuvwxyz";
        value=value.toLowerCase();
        let newValue="";
        for(let i=0; i<value.length; i++){
            if(allLeters.indexOf(value[i])>-1){
                newValue+=value[i];
            }
        }
        let firstLetter = newValue[0].toUpperCase();
        let otherLetters = newValue.substring(1, newValue.length);

        return  firstLetter+otherLetters;
    }
}