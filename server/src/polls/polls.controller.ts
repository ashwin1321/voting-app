import { Body, Controller, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private pollsService: PollsService) {}

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    return await this.pollsService.createPoll(createPollDto);
  }

  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    return await this.pollsService.joinPoll(joinPollDto);
  }

  @Post('/rejoin')
  async rejoin() {
    return await this.pollsService.rejoinPoll({
      name: 'from token',
      pollID: 'from token',
      userID: 'from token',
    });
  }
}
