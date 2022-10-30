import { Inject, Injectable } from '@nestjs/common';
import { Level } from 'level';

@Injectable()
export class DatabaseService {
  constructor(@Inject('DATABASE') public db: Level) {}
}
