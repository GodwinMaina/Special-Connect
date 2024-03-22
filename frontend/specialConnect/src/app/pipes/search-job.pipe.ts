import { Pipe, PipeTransform } from '@angular/core';
import { alljobs } from '../interface/postJobs';


//pipe decorator to tell angular that this is a pipe
@Pipe({
  name: 'filter',
  standalone: true
})
export class SearchJobPipe implements PipeTransform {

  //transform value will receive the array of jobs and the search term from the search bar of type string
  transform(AllJobs:alljobs[],  filterJob: string ){

   if (!AllJobs || AllJobs.length === 0 || !filterJob) {
      return AllJobs;
   }

    if(filterJob === 'All'){
      return AllJobs
    }
    else{

    return  AllJobs.filter((job)=>
     
     {
      return job.message.some((job)=>{job.category.toLowerCase() === filterJob.toLowerCase()})
    
    })
    
    

 }


  }

}
