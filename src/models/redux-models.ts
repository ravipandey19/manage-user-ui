export interface UserModel {
    "first_name": string,
    "last_name": string,
    "emailid": string,
    "_id": string
}

export interface UserArrayModel {
    all_user_list: UserModel[],
}

export interface DataType {
    name: {
        first: string;
        last: string;
    };
    gender: string;
    email: string;
    login: {
        uuid: string;
    };
}