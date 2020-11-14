import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ''): User[] {
    if(searchCriteria == "")
      return users;
    searchCriteria = searchCriteria.toLowerCase();    // convert user to all lowercase ("HUNG" = "Hung")
    let selectedUsers: User[] = [];
    for(let user of users) {
      if(
        user.id.toString().includes(searchCriteria) ||
        user.userName.toLowerCase().includes(searchCriteria) ||
        user.firstName.toLowerCase().includes(searchCriteria) ||
        user.lastName.toLowerCase().includes(searchCriteria) 
      ) {
        selectedUsers.push(user);
        // get the next user and start over again
      
     /* if(user.userName.toLowerCase().includes(searchCriteria)) {
        selectedUsers.push(user);                    // wouldnt get here if id does not match
        continue;
      }
      if(user.firstName.toLowerCase().includes(searchCriteria)) {
        selectedUsers.push(user);
        continue;
      }
      if(user.lastName.toLowerCase().includes(searchCriteria)) {
        selectedUsers.push(user);
        continue;
      } */
    }
    }  
    return selectedUsers;
  }
}

