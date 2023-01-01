import { environment } from 'src/environments/environment';

export class AppService {
    public callHello() {
        console.log(environment.apiUrl);
    }

}