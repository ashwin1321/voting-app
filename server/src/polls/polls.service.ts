import { Injectable } from '@nestjs/common';
import { CreatePollFields, JoinPollFields, RejoinPollFields } from './types';
import { CreatePollID, createuserID } from 'src/ids';

@Injectable()
export class PollsService {
  async createPoll(fields: CreatePollFields) {
    const pollID = CreatePollID();
    const userID = createuserID();

    return {
      ...fields,
      userID,
      pollID,
    };
  }
  async joinPoll(fields: JoinPollFields) {
    const userID = createuserID();

    return {
      ...fields,
      userID,
    };
  }
  async rejoinPoll(fields: RejoinPollFields) {
    return fields;
  }
}
