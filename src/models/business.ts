import {User} from './User';

export class BusinessHour {

    days: string[] = [];
    start_time = '';
    end_time = '';
}

export class Business {
    id?: number;
    name?: string;
    desc?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    email?: string;
    phone?: string;
    emergency_phone?: string;
    image?: string;
    license?: string;
    website?: string;
    business_hours?: BusinessHour[] = [];
    users?: User[];
    user_id?: number;
}

