export default class EntityNotFound extends Error {
    public code: number = 500;
    public message: string; 
    public status: string = 'Internal server error!';
    public cause: string = 'Tried to find some entity that doesn\'t exist!';
  
    constructor(entity: string) {
      super();
      this.message = `This ${entity} doesn't exist!`;
    }
}


function errorHandler(err: unknown): { code: any; status: any; message: any; errors: any; cause: any; } {
    throw new Error('Function not implemented.');
}

export { errorHandler as errorHandler };
