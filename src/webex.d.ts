declare module 'webex' {
  export default class Webex {
    static init(options: any): Promise<any>;
    meetings: {
      register(): Promise<void>;
      create(destination: string): Promise<any>;
      syncMeetings(): Promise<any>;
    };
  }
}

declare module '@wxcc-desktop/sdk' {
  const Desktop: {
    init(): Promise<void>;
    agentStateInfo: {
      latestData: any;
    };
    agentContact: {
      addEventListener(callback: (event: any) => void): void;
    };
    actions: {
      getTaskMap(): Promise<any>;
      getAccessToken(): Promise<string>;
    };
  };
  export default Desktop;
}