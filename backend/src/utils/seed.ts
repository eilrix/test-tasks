import { TaskModel } from 'src/models/task.model';
import { connectMongo } from './connectMongo';
import nameGenerator from 'project-name-generator';

export async function seedMongo() {
  await connectMongo();

  for (let i = 0; i < 10; i++) {
    const name = nameGenerator().spaced;

    await TaskModel.create({
      title: name,
      description: `Description for ${name}`,
    });
  }

  console.log('Seeded database'); // eslint-disable-line

  process.exit(0);
}

seedMongo();
