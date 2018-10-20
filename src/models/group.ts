import {User} from './User';

export class Group {
    user_id?: number;
    name?: string;
    id?: number;
    image?: string;
    is_private?: boolean;
    users?: User[];
    desc?: string;

    constructor(name?, image?, is_private?, users?, desc?) {

        this.name = name;
        this.image = image;
        this.is_private = is_private;
        this.users = users;
        this.desc = desc;

    }


}
