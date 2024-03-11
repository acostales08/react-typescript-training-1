import { Api } from "../http";

export class HttpRequest {
    public fetchData() {
        return new Api().connect().get('/users')
    }
}