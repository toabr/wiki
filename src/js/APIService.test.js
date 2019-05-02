import APIService from './APIService';

// test
it('hit endpoint', () => {
    APIService.getArticle(1)
        .then(data => expect(data).toBe([]))
})