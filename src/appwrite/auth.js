import config from '../config/config'
import { Client, ID, Account } from 'appwrite';

export class AccountService {
    client = new Client();
    constructor() {
        this.client.setEndpoint(config.appWriteUrl),
            this.client.setProject(config.appWriteProject)
        this.account = new Account(this.client);
    }
    async creatAccount({ email, password, name }) {
        try {
            const userAccout = await this.account.creat(ID.unique(), email, password, name);
            if (userAccout) {
                this.login(email, password);
            } else {
                return userAccout;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email
        , password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    async getuser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}
const authService = new AccountService();
export default authService;