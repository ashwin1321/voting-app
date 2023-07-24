import { customAlphabet, nanoid } from 'nanoid';

export const CreatePollID = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  6,
);

export const createuserID = () => nanoid();
export const createNominationID = () => nanoid(8);
