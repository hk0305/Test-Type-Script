{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      // throw new TimeoutError("network time out!");
      throw new OfflineError("no network!");
    }
  }

  class UserService {
    // DI
    constructor(private client: NetworkClient) {}

    // 여기서 try-catch가 가능하지만,
    // 처리하는 곳에서 catch한 후
    // 별도의 로직을 수행하는 것이
    // 더 의미있을 수 있다.
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to use
        // 에러에 대한 어플리케이션의 의미있는 처리
        // 예를들어,
        //    네트워크 서버 오류
        //    로그인 실패에 대한 안내 등등
        // catch의 error의 Type은 any이기 때문에,
        // type of를 사용하여 분기별 에러처리가 불가능하다.
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
