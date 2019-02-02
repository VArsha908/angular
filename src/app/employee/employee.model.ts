export class Employee
{
    constructor(
        public firstname: string, 
        public lastname: string,
        public email: string,
        public contact: number,
        public address: string,
        public username: string,
        public password: string,
        public gender: string,
        public qualification: string,
        public experience: string,
        public coding_lang: string[]
        )
    {}
}