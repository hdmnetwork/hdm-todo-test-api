import { BadRequestException, Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
import SaveTaskDto from '../SaveTask/SaveTaskDto';

@Injectable()
export default class CreateTask implements UseCase<Promise<SaveTaskDto>, [dto: SaveTaskDto]>  {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(data: SaveTaskDto): Promise<SaveTaskDto> {
    try {
      const task = await this.taskRepository.create(data);
      return task;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
