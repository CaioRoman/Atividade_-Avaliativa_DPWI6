import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';

const generateLearderBoardData = (number) => {
    const users = [];
    while (number >= 0) {
      users.push({
        id: number,
        nickname: faker.internet.userName(),
        game: faker.number.int({ min: 1, max: 3 }),
        score: faker.number.int({ min: 99, max: 9999 }),
      });
      number--;
    }
    return users;
  };
  writeFileSync(
    "./db.json",
    JSON.stringify({ leaderboard: generateLearderBoardData(20) })
  );


  //"backend": "node ./faker.js && json-server --watch db.json --port 3333"