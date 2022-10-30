import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { DatabaseModule } from '../libs/database/src';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
      imports: [DatabaseModule],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.list()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
