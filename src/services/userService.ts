import Api from './Api';

import { UserModel } from '../models/redux-models';

export default {
    async getAllData() {
        var response = await Api().get('getData');
        return response.data;
    },
    // async getParticularTodo(todo_id: number) {
    //     var response = await Api().get('todos');
    //     return response.data.filter((todo: UserModel) => todo.id === todo_id)[0];
    // }
}