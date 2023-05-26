import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoStatus } from './models/todo.models';
import { ID } from '@nestjs/graphql';
import { todos } from './models/dummy';

@Injectable()
export class TodoService {


    // static todo1: Todo = {
    //     id: '1',
    //     title: 'todo1',
    //     description: null,
    //     status: TodoStatus.NEW,
    //     createdAt: null,
    //     updatedAt: null
    // };


    findAll(): Todo[] {
        return todos;
    }

    findOneById(id: string): Todo {
        const result = todos.find((todo) =>
            id === todo.id
        );
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
