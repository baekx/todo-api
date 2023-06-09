import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './models/todo.models';

@Resolver()
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Query(() => [Todo], { nullable: 'items' })
    findAll() {
        return this.todoService.findAll();
    }

    @Query(() => Todo)
    findOneById(@Args('id', { type: () => ID }) id: string) {
        return this.todoService.findOneById(id);
    }
}
