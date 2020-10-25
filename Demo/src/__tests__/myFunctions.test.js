const resetCreationModal = require('../myFunctions');

describe('resetModal', () => {
    it('calls the clearSomethingInModal function', () => {
        const clearSomethingInModal = jest.fn();
        resetCreationModal(clearSomethingInModal);
        expect(clearSomethingInModal.mock.calls.length).toBe(1);
    })
})