export class User {
    username: string;
    objectId: string;
    email: string;
    emailVerify: boolean;
    sessionToken: string;

    firstName: string;
    lastName: string;

    role: string = 'user';

    constructor(){
        this.setUserRole();
    }

    private setUserRole(){
        //todo check user role and set property
    }
}