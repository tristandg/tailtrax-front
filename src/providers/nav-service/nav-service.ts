import {Injectable} from '@angular/core';
import {ViewController} from "ionic-angular";

/*
  Generated class for the NavServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavServiceProvider {

    private viewController: ViewController;

    public setViewController(viewController: ViewController) {

        this.viewController = viewController;
    }

    public dismissViewController(data?): Promise<any> {

        return this.viewController.dismiss(data);
    }
}
