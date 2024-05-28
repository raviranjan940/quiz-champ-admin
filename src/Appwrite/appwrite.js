import { Client, Account } from "appwrite";

export class AppwriteClient {
    constructor() {
        this.client = new Client()
            .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
            .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID); // Your project ID

            this.account = new Account(this.client);
    }

    async login(email, password) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch(error) {
            throw error;
        }
        // return await this.account.createEmailPasswordSession(
        //     "contact@satyalok.in",
        //     "Admin@Satyalok"
        // );
    }
}


const appwriteClient = new AppwriteClient();

export default appwriteClient;


