# AffinityHub ♾️
### Group Records, Live Collaboration & Community Suite

**AffinityHub** is an all-in-one group records management, secure community portal, and real-time live discussion platform designed specifically for:
- 🎓 **School & University Alumni Associations** (people who completed the same school)
- 💼 **Workplace Fellowships & Staff Syndicates** (people who work at the same place)
- 🏡 **Hometown & Community Cultural Unions** (people who come from the same place)

---

## 🚀 Quick Start / How to Run

1. Open File Explorer and navigate to the project directory:
   ```
   C:\Users\User\OneDrive\Desktop\AffinityHub\
   ```
2. **Double-click `index.html`** or right-click and choose **Open with Google Chrome / Microsoft Edge / Firefox**.
3. **No server, build tools, or Node.js required.** The app runs client-side with persistent storage (`localStorage` & `IndexedDB`) and works offline.

---

## 🌟 Newly Added Features & Enhancements

### 1. 🛡️ Autonomous Account Creation & Local Database (`js/auth-db.js`)
- **Completely Autonomous**: Users can create an account independently from joining or creating any group.
- **Required Contact Information**: Requires Full Name, Email Address, WhatsApp Number, and Phone/SMS Number, plus an account password before the account can be established.
- **Omnichannel Verification Choice (Zero-Backlog, Non-Twilio)**:
  - Users choose whether to receive their 6-digit verification code via **✉️ Email**, **💬 WhatsApp**, or **📱 SMS**.
  - Built-in zero-backlog direct dispatch engine: avoids Twilio delays or backlogs, generates high-entropy 6-digit codes with 5-minute validity, and provides on-screen verification notification with a convenient **"⚡ 1-Click Autofill Code"** button for testing.
  - Interactive 6-digit box verification interface with auto-advance, backspace handling, paste support, and countdown timer.
- **Multi-User Database & Instant Switching**:
  - IndexedDB storage with localStorage mirror for registered user profiles.
  - Switch active account profiles in 1 click or log out at any time.

### 2. 🖥️ Screen Sharing & System Audio Capture in Live Sessions
- **Live Desktop & Slide Sharing**: Present slides, applications, or desktop to all participants via WebRTC `navigator.mediaDevices.getDisplayMedia`.
- **System Audio Capture in Live Recordings**:
  - Automatically requests and captures computer/slide audio tracks.
  - **Web Audio API Mixing Pipeline**: Combines presenter microphone audio and system audio from shared slides into a single mixed stream recorded by `MediaRecorder`.
- **Clear On-Screen System Audio Indicator**:
  - 🟢 **System Audio: Allowed**: Displayed when audio is successfully captured.
  - 🔴 **System Audio: Blocked**: Displayed when screen is shared without system audio permissions.
- **1-Click Permissions Help & Auto-Retry**:
  - Clicking the blocked badge opens a step-by-step permission fix guide explaining how to check *"Also share system audio"* in browser prompts.
  - Features an **"🔄 Auto-Retry Screen Share with Audio"** button that immediately restarts the screen share prompt with system audio requested.

### 3. ⏱️ Downloadable Recording with Timelines & Clickable Timestamps
- **Real-Time Key Moment Tracking**: Records key milestones during the session (e.g. `[00:00] Recording Initiated`, `[00:15] Screen Share with System Audio`, `[00:45] Strategy Presentation`, `[01:10] Shared File: Budget.pdf`, `[01:35] Health Outreach Report`).
- **Interactive Timeline Playback Modal**:
  - Pops up automatically when recording concludes.
  - Displays formatted timestamps (`[00:15]`, `[00:45]`, `[01:10]`) with **"▶ Jump"** buttons that seek directly to that key moment in video playback!
  - **"📥 Download Timeline Report (HTML/TXT)"**: Generates and downloads a standalone interactive HTML report with jumpable timestamps, agenda milestones, and chat logs.

### 4. 🤖 AI Gateway Meeting Agenda Drafter (`js/ai-agenda.js`)
- **In-App Tool for Group Admins**:
  - Accessible directly from the Group Workspace Control Center.
  - Admins input the **Event Purpose** (e.g., *"Achimota Alumni Annual Strategy & $500k STEM Endowment Launch"*).
  - Admins select relevant **Member Interest Tags** (e.g., *Cloud Technology & AI*, *Healthcare Outreach*, *Corporate Law*, *Venture Capital & Agribusiness*, *Youth Mentorship*).
  - Admins pick Meeting Duration (30m, 60m, 90m, 120m) and Tone (*Strategic & Inspiring*, *Corporate*, *Action-Oriented*).
- **AI Gateway Synthesis**:
  - Generates a minute-by-minute timestamped agenda integrating the specified member interests into dedicated focus tracks.
  - Includes discussion prompts, committee lead designations, and an actionable deliverables matrix.
  - **1-Click Actions**:
    - **"📅 Prefill into Calendar Event"**: Automatically creates a scheduled event on the group calendar.
    - **"💬 Copy to Live Session Chat"**: Broadcasts the adopted agenda into live session discussions.

---

## 🏛️ Core Architecture & Complete Feature Matrix

### 1. 👥 Associations & Dual-Admin Criteria Records (`js/groups.js`)
- **3 Core Categories**: School Alumni, Workplace Colleagues, and Hometown Unions.
- **Dual Administrator Governance**: Two admins per group (Admin 1 and Admin 2).
- **One Admin Sets Criteria at a Time**: Exclusive session lock banner prevents race conditions.
- **Admin Reassignment**: Any current admin can reassign admin privileges to another group member.
- **9 Core Criteria Records**: Date of birth, place of birth, current location, contact, vocation, position held/holds in group, marital status, hobbies, what the person is doing currently + custom fields.
- **CSV Data Export**: 1-click export of member criteria records.

### 2. 🔑 Group Security & Joining Flow
- **Group Password Protection**: Set and changed only by group admins.
- **Group Search & Verification**: Search by group name or category; entry requires group password or QR code.
- **"✉️ Ask Admin" Password Request**: Users without a password can send a direct in-app message to group admins.
- **Dynamic QR Code & Link Sharing**: Built-in standalone [`qrcode.js`](file:///c:/Users/User/OneDrive/Desktop/AffinityHub/js/qrcode.js) generates dynamic QR codes and invite links offline.

### 3. 👤 Master Profile & Smart Auto-Fill (`js/profile.js`)
- **Master Profile Persistence**: Stores individual records securely in the user's account.
- **✨ 1-Click Auto-Fill**: Automatically fills all matching criteria fields in group join forms without manual re-typing.

### 4. 📷 Interactive Avatar Cropper & Color-Coded Initials
- **Avatar Cropper**: Canvas-based crop with circular mask, zoom slider (50% to 300%), pan, preset enhancement filters, and side-by-side circular & square previews.
- **Color-Coded Initials**: Automatically generates deterministic, high-contrast color-coded avatars based on a hash of the member's name when no photo is uploaded.

### 5. 🎙️ Live Session Studio (`js/live-session.js`)
- Audio-only, Video-only, or full Audio + Video.
- Microphone & Camera toggles with audio waveform bars.
- Live Language Translation Subtitles in **10 languages**: English, Spanish, French, German, Twi (Akan), Swahili, Portuguese, Chinese, Arabic, and Hindi.
- In-session live chat and file sharing.
- Real-time video filters and virtual background replacement.

### 6. 🤝 Cross-Group Connections (Inter-Group Summits) (`js/intergroup.js`)
- Connect two distinct groups for a joint live discussion.
- Single joint connecting password, link, and QR code.
- Both groups retain their normal members and respective dual admins.
- Presiding Chairperson nomination & election module.

### 7. 🔐 Secure Password Vault & Strong Generator (`js/vault.js`)
- High-entropy password generator with live entropy score.
- 1-click password suggestions.
- Reveal/hide toggle and clipboard copy.
- **🔄 Reuse Old Passwords**: Safely reuse past passwords from password history.

### 8. 📅 Group Event Calendar (`js/calendar.js`)
- Interactive month grid with day cells and today highlight.
- Event scheduling with date, time, venue, description, and RSVP tracking.
- 1-click launch into the live discussion room directly from calendar events.

### 9. 📜 Activity Logs & Audit Trails (`js/activity.js`)
- Tracks group activities (criteria updates, member joins, sessions recorded) and user account events.
- **🔄 Reuse / Repeat Activity**: 1-click button to re-trigger, duplicate, or re-run past actions.

### 10. 🎨 Personalization & Accessibility (`js/customize.js`)
- 6 Color Themes, 5 Font Styles, 4 Font Scales, 4 Corner Shapes, and Preferred Language switcher.

---

## 🧪 Testing Demonstration Scenarios

1. **Test Autonomous Account Creation & Omnichannel Verification**:
   - In the top header, click **"🔄 Switch User"** -> **"➕ Register Another Account Autonomously"**.
   - Enter Full Name, Email, WhatsApp number, and Phone/SMS number.
   - Select your preferred verification channel (Email, WhatsApp, or SMS).
   - Click **"Dispatch Code & Proceed"**.
   - Notice the zero-backlog notification banner displaying the 6-digit code.
   - Click **"⚡ 1-Click Autofill Code"** or type the digits, then click **"Verify & Establish Account"**. Your account is established in the local database!
2. **Test Screen Sharing with System Audio & Auto-Retry**:
   - Go to **Live Studio** (`live-room`).
   - Click the **🖥️ Screen Share** button.
   - Check the top bar: notice the 🟢 **System Audio: Allowed** or 🔴 **System Audio: Blocked** badge.
   - If blocked, click the badge to view the permission fix guide, then click **"🔄 Auto-Retry Screen Share with Audio Now"**.
3. **Test Session Recording with Key Moments Timeline**:
   - Click **⏺️** to start recording. Notice the live timer and red blinking indicator.
   - Perform an action (e.g. share screen or upload a file).
   - Click **⏹️** to stop recording.
   - The **Recording Timeline Modal** appears automatically showing timestamped key moments (`00:00`, `00:15`, etc.). Click any timestamp button to seek to that moment!
4. **Test AI Gateway Tailored Meeting Agenda Drafter**:
   - Go to **Groups** (`groups-catalog`), click **"📂 Open Group Records"** on Achimota School.
   - In the admin control center, click **"🤖 Draft Agenda (AI Gateway)"**.
   - Input the event purpose, select cohort interest tags, choose 60 minutes duration, and click **"⚡ Synthesize Tailored Agenda with AI Gateway"**.
   - Inspect the generated minute-by-minute agenda, then click **"📅 Prefill into Calendar Event"** or **"💬 Copy to Live Session Chat"**!

---

*Engineered with clean HTML5, CSS3 Custom Properties, Web Audio API, and vanilla JavaScript. Zero build steps. Fully responsive.*
