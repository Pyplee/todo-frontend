import { routes } from '../src/routes';

describe('routes module', () => {
  describe('taskPath function', () => {
    test('with ID returns the correct path', () => {
      const id = 123;
      const expectedPath = "http://localhost:5000/api/tasks/123";
      expect(routes.taskPath(id)).toBe(expectedPath);
    });

    test('tasksPath function', () => {
      const expectedPath = "http://localhost:5000/api/tasks";
      expect(routes.tasksPath()).toBe(expectedPath);
    });
  });

  describe('cardPath function', () => {
    test('cardsPath function', () => {
      const expectedPath = 'http://localhost:5000/api/cards';
      expect(routes.cardsPath()).toBe(expectedPath);
    });

    test('with ID returns the correct path', () => {
      const id = 123;
      const expectedPath = "http://localhost:5000/api/cards/123";
      expect(routes.cardPath(id)).toBe(expectedPath);
    });

  });
});