import { Client, Account } from "appwrite";

class AppwriteClient {
    constructor() {
        this.client = new Client()
            .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
            .setProject(import.meta.env.VITE_PROJECT_ID); // Your project ID

            this.account = new Account(this.client);
    }

    async login() {
        const promise = await this.account.createEmailPasswordSession(
            "contact@satyalok.in",
            "Admin@Satyalok"
        );
    
        promise.then(
            function (response) {
                console.log(response); // Success
            },
            function (error) {
                console.log(error); // Failure
            }
        );
    }
}


const appwriteClient = new AppwriteClient();

export default AppwriteClient;
export { appwriteClient };

