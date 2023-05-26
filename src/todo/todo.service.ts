import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo, TodoStatus } from './models/todo.models';
import { ID } from '@nestjs/graphql';

@Injectable()
export class TodoService {

    static todo1: Todo = {
        id: '1',
        title: 'todo1',
        description: null,
        status: TodoStatus.NEW,
        createdAt: null,
        updatedAt: null
    };

    private todos: Todo[] = [
        TodoService.todo1,
        TodoService.todo1,
        TodoService.todo1,
        TodoService.todo1,
    ];

    findAll(): Todo[] {
        return this.todos;
    }

    findOneById(id: string): Todo {
        const result = this.todos.find((todo) =>
            id === todo.id
        );
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}
