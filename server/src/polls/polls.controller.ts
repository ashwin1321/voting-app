import { Controller, Post } from '@nestjs/common';

@Controller('polls')
export class PollsController {
  @Post()
  async create() {
    return { message: 'Poll created' };
  }

  @Post('/join')
  async join() {
    return { message: 'Poll joined' };
  }

  @Post('/rejoin')
  async rejoin() {
    return { message: 'Poll rejoined' };
  }
}
