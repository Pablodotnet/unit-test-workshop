export const activatedRouteSpy = {
    snapshot: {
        paramMap: {
            get: jasmine.createSpy('get').and.returnValue(10)
        }
    }
};
