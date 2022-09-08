import { PRIORITY_LEVEL, TaskEntity } from './entities/task.entity';
import RankTasks from './task.utils';

describe('TaskUtils', () => {
  const tasks: TaskEntity[] = [
    {
      id: '9262b879-8a28-4ab6-9944-3975fbd162c5',
      createdAt: new Date('2022-08-29T22:10:06.049Z'),
      updatedAt: new Date('2022-08-29T22:10:06.050Z'),
      deletedAt: null,
      title: 'small victory certainly behind gather bit adjective deep',
      description: null,
      priority: PRIORITY_LEVEL.URGENT,
      dueDate: new Date('2022-09-08T13:01:15.570Z'),
      timeSpentEstimate: null,
      isDone: null,
    },
    {
      id: '12b6cbb3-68b8-419f-8113-7ed658b9de4a',
      createdAt: new Date('2022-08-29T22:10:06.049Z'),
      updatedAt: new Date('2022-08-29T22:10:06.050Z'),
      deletedAt: null,
      title: 'yes reason shallow central customs excited slave trick',
      description: null,
      priority: PRIORITY_LEVEL.HIGHEST,
      dueDate: new Date('2022-09-09T05:57:11.799Z'),
      timeSpentEstimate: null,
      isDone: null,
    },
    {
      id: '70c8b8fc-cf70-4b7a-9f60-b7593a4a8bd6',
      createdAt: new Date('2022-08-29T22:10:06.049Z'),
      updatedAt: new Date('2022-08-29T22:10:06.050Z'),
      deletedAt: null,
      title:
        'another hung till kind plural satellites tired gulf compound pink angle examine',
      description: null,
      priority: PRIORITY_LEVEL.NORMAL,
      dueDate: new Date('2022-09-10T03:03:45.503Z'),
      timeSpentEstimate: null,
      isDone: null,
    },
    {
      id: '227dbb9c-a961-4b19-b2bc-2f0ec5a96338',
      createdAt: new Date('2022-08-29T22:10:06.049Z'),
      updatedAt: new Date('2022-08-29T22:10:06.050Z'),
      deletedAt: null,
      title: 'manufacturing position pink saddle get every mice',
      description: null,
      priority: PRIORITY_LEVEL.LOW,
      dueDate: new Date('2022-09-11T11:41:19.714Z'),
      timeSpentEstimate: new Date('07:04:00'),
      isDone: null,
    },
    {
      id: '0ad119bf-33d2-4bdd-bcd9-6534e1e31dbd',
      createdAt: new Date('2022-08-29T22:10:06.049Z'),
      updatedAt: new Date('2022-08-29T22:10:06.050Z'),
      deletedAt: null,
      title:
        'pound child just lady said mostly experience warm though already by provide classroom blew across softly stay hall',
      description: null,
      priority: PRIORITY_LEVEL.LOW,
      dueDate: new Date('2022-09-11T20:37:53.778Z'),
      timeSpentEstimate: null,
      isDone: null,
    },
    {
      id: 'd6b5ce9b-31a4-4d85-af30-ad156064b574',
      createdAt: new Date('2022-08-29T22:10:06.049Z'),
      updatedAt: new Date('2022-08-29T22:10:06.050Z'),
      deletedAt: null,
      title: 'dirt compound outer afraid area worker hill',
      description: null,
      priority: PRIORITY_LEVEL.NORMAL,
      dueDate: new Date('2022-09-12T23:36:55.860Z'),
      timeSpentEstimate: null,
      isDone: null,
    },
  ];

  it('should return an empty tasks array', () => {
    const rank = new RankTasks([]);

    expect(rank.rank()).toEqual([]);
  });
});
