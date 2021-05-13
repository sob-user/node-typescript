export class StudentRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async postUser() {
        const UserEntity = this.entities.User
        console.log(UserEntity)
        return null
    }
}