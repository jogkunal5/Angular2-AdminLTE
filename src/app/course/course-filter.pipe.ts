import { Pipe, PipeTransform } from '@angular/core';
import Course from './models/course.model';
@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(value:any[],searchString:string ){

    if(!searchString){
      console.log('no search')
      return value  
    }

    return value.filter(it=>{   
        const fee = it.fee.toString().includes(searchString) 
        const stream = it.stream.toLowerCase().includes(searchString.toLowerCase())
        const name = it.name.toLowerCase().includes(searchString.toLowerCase())
        console.log( fee + stream + name);
        return (name + stream + fee);      
    }) 
 }

}
