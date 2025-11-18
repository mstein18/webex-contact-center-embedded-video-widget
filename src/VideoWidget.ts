import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import Webex from 'webex';
import Desktop from '@wxcc-desktop/sdk';

@customElement('webex-video-widget')
export class WebexVideoWidget extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, mode: 'open' as const };
  @state()
  private webex: any = null;

  @state()
  private meeting: any = null;

  @state()
  private webexInitialized: boolean = false;  

  @state()
  private agentInfo: any = null;

  @state()
  private currentTask: any = null;

  @state()
  private isMuted: boolean = false;

  @state()
  private isVideoOff: boolean = false;

  // Styling for the widget
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      font-family: 'CiscoSansTT', Arial, sans-serif;
    }

    .video-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #000;
      position: relative;
    }

    .video-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding: 10px;
      flex: 1;
    }

    .video-single {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      flex: 1;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      background: #1a1a1a;
    }

    .controls {
      display: flex;
      justify-content: center;
      gap: 15px;
      padding: 20px;
      background: rgba(0, 0, 0, 0.8);
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: background-color 0.3s;
    }

    .btn-primary {
      background: #007aa3;
      color: white;
    }

    .btn-primary:hover {
      background: #005a7a;
    }

    .btn-danger {
      background: #d32f2f;
      color: white;
    }

    .btn-danger:hover {
      background: #9a0007;
    }

    .status {
      padding: 10px;
      text-align: center;
      background: #1a1a1a;
      color: #fff;
      font-size: 14px;
    }

    .waiting {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #fff;
      font-size: 18px;
      gap: 20px;
    }

    .error {
      color: #ff6b6b;
      padding: 20px;
      text-align: center;
    }
  `;

  // Lifecycle: Called when component is added to DOM
  connectedCallback() {
    super.connectedCallback();
    this.initializeDesktopSDK();
  }

  // Lifecycle: Called when component is removed from DOM
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
  }

  // Initialize Webex Contact Center Desktop SDK
  async initializeDesktopSDK() {
    try {
      // Initialize Desktop SDK
      await Desktop.init();
      console.log('Desktop SDK initialized');

      // Get agent information
      const agentData = Desktop.agentStateInfo?.latestData;
      this.agentInfo = agentData;
      console.log('Agent Info:', agentData);

      // Subscribe to agent contact events
      Desktop.agentContact.addEventListener((event: any) => {
        console.log('Agent Contact Event:', event);
        this.handleContactEvent(event);
      });

      // Get current tasks
      try {
        const taskMap = await Desktop.actions.getTaskMap();
        console.log('Current Tasks:', taskMap);
      } catch (err) {
        console.log('No current tasks:', err);
      }

    } catch (error) {
      console.error('Error initializing Desktop SDK:', error);
    }
  }

  // Initialize Webex Meetings SDK
  async initializeWebex() {
    try {
      // Get access token from Desktop SDK
      const token = await Desktop.actions.getAccessToken();
      
      this.webex = await Webex.init({
        credentials: {
          access_token: token
        }
      });

      // Register to receive incoming calls
      await this.webex.meetings.register();
      console.log('Webex SDK initialized and registered');

      this.webexInitialized = true;
    } catch (error) {
      console.error('Error initializing Webex:', error);
    }
  }

  async handleContactEvent(event: any) {
    console.log('Contact Event Type:', event.type);
    
    switch (event.type) {
      case 'OFFERED':
        // Incoming call offered to agent
        console.log('Call offered:', event.data);
        this.currentTask = event.data;
        break;
        
      case 'CONNECTED':
        // Call connected - auto-join video meeting
        console.log('Call connected, joining video...');
        await this.joinVideoMeeting(event.data);
        break;
        
      case 'ENDED':
        // Call ended - leave video meeting
        console.log('Call ended');
        await this.leaveMeeting();
        break;
    }
  }

  async joinVideoMeeting(callData: any) {
    try {
      if (!this.webex) {
        await this.initializeWebex();
      }

      // Create or join meeting based on call destination
      const destination = callData.destination || callData.callerId || 'test@example.com';
      
      this.meeting = await this.webex.meetings.create(destination);
      
      await this.meeting.join({
        enableMultistream: false,
        moderator: false
      });

      // Get local media stream
      const localStream = await this.meeting.getMediaStreams({
        sendAudio: true,
        sendVideo: true,
        receiveAudio: true,
        receiveVideo: true
      });

      // Attach media streams to video elements
      await this.meeting.addMedia({
        localStream: localStream,
        mediaSettings: {
          receiveVideo: true,
          receiveAudio: true,
          receiveShare: false,
          sendVideo: true,
          sendAudio: true,
          sendShare: false
        }
      });

      // Listen for media ready events
      this.meeting.on('media:ready', (media: any) => {
        this.attachMediaStream(media);
      });

      // Listen for participant events
      this.meeting.on('meeting:participantJoined', (participant: any) => {
        console.log('Participant joined:', participant);
      });

      console.log('Successfully joined video meeting');
      this.requestUpdate();
      
    } catch (error) {
      console.error('Error joining video meeting:', error);
    }
  }

  // Attach media streams to video elements
  private attachMediaStream(media: any) {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const localVideo = this.shadowRoot?.querySelector('#local-video') as HTMLVideoElement;
      const remoteVideo = this.shadowRoot?.querySelector('#remote-video') as HTMLVideoElement;

      if (media.type === 'local' && localVideo) {
        localVideo.srcObject = media.stream;
        console.log('Local video attached');
      } else if (media.type === 'remoteVideo' && remoteVideo) {
        remoteVideo.srcObject = media.stream;
        console.log('Remote video attached');
      }
    }, 100);
  }

  // Leave the current meeting
  async leaveMeeting() {
    try {
      if (this.meeting) {
        await this.meeting.leave();
        this.meeting = null;
        this.isMuted = false;
        this.isVideoOff = false;
        this.requestUpdate();
      }
    } catch (error) {
      console.error('Error leaving meeting:', error);
    }
  }

  // Toggle mute/unmute
  async toggleMute() {
    if (this.meeting) {
      try {
        if (this.isMuted) {
          await this.meeting.unmuteAudio();
          this.isMuted = false;
        } else {
          await this.meeting.muteAudio();
          this.isMuted = true;
        }
        this.requestUpdate();
      } catch (error) {
        console.error('Error toggling mute:', error);
      }
    }
  }

  // Toggle video on/off
  async toggleVideo() {
    if (this.meeting) {
      try {
        if (this.isVideoOff) {
          await this.meeting.unmuteVideo();
          this.isVideoOff = false;
        } else {
          await this.meeting.muteVideo();
          this.isVideoOff = true;
        }
        this.requestUpdate();
      } catch (error) {
        console.error('Error toggling video:', error);
      }
    }
  }

  // Cleanup when component is removed
  private async cleanup() {
    if (this.meeting) {
      await this.leaveMeeting();
    }
  }

  // Render the component
  render() {
    return html`
      <div class="video-container">
        ${this.meeting ? html`
          <div class="status">
            Connected to: ${this.currentTask?.callerId || 'Customer'}
          </div>
          <div class="video-grid">
            <video id="remote-video" autoplay playsinline></video>
            <video id="local-video" autoplay muted playsinline></video>
          </div>
          <div class="controls">
            <button class="btn-primary" @click=${this.toggleMute}>
              ${this.isMuted ? '🔇 Unmute' : '🔊 Mute'}
            </button>
            <button class="btn-primary" @click=${this.toggleVideo}>
              ${this.isVideoOff ? '📹 Start Video' : '🚫 Stop Video'}
            </button>
            <button class="btn-danger" @click=${this.leaveMeeting}>
              ❌ End Call
            </button>
          </div>
        ` : html`
          <div class="waiting">
            <p>🎥 Video Widget Ready</p>
            <p style="font-size: 14px; color: #888;">
              ${this.webexInitialized 
                ? 'Waiting for incoming call...' 
                : 'Initializing Webex...'}
            </p>
          </div>
        `}
      </div>
    `;
  }
}

// TypeScript declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    'webex-video-widget': WebexVideoWidget;
  }
}