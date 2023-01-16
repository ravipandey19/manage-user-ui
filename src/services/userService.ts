import Api from './Api';

import { UserModel } from '../models/redux-models';

export default {
    async getAllData() {
        var response = await Api().get('getData');
        return response.data;
    },
    async addData(values: object) {
        var response = await Api().post('insertData', values);
        return { status: response.status, message: response.statusText };
    }
}