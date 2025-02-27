import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import CreateTask from './CreateTask/CreateTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';

type UseCases = GetAllTasksUseCase | DeleteTask| CreateTask ;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
