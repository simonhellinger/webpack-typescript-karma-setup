import TaskCollection from '../src/TaskCollection';

describe('TaskCollection Test', function() {
    it('contains tasks', function() {
        let task1 = 'Eat cake',
            task2 = 'Eat more cake';

        let taskCollection = new TaskCollection([task1, task2]);

        expect(taskCollection.tasks).toEqual([task1, task2]);
    });
});